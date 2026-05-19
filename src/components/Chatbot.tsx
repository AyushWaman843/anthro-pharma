import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot, ShieldAlert, Sparkles, Check, RefreshCw } from 'lucide-react';
import { PRODUCT_CATALOG, THERAPEUTIC_SEGMENTS, CONTACT_INFO, STRENGTHS } from '../constants';

interface Message {
  id: string;
  role: 'user' | 'assistant' | 'system_alert';
  text: string;
  timestamp: Date;
  modelUsed?: string;
}

const OPENROUTER_KEY = import.meta.env.VITE_OPENROUTER_KEY || '';

// Grounding data compiled from constants.ts for the assistant
const SYSTEM_PROMPT = `You are AnthroAI, the official Virtual Assistant for Anthro Pharmaceuticals Private Limited.
Your tone should be professional, ethical, clean, clinical, and helpful.

Anthro Pharmaceuticals is an innovation-driven pharmaceutical marketing company based in Navi Mumbai, India, operating with decades of industry experience.

Here is your highly accurate knowledge base to ground your answers:
1. Contact & Address:
   - "SAHU HOUSE", 101, Plot No. B-128, Sector – 20, Belapur, Navi Mumbai – 400614, Maharashtra, India.
   - Email: admin@anthropharma.com
   - Phone: +91 92236 82223
   - Website: www.anthropharma.com

2. Leadership:
   - Mr. O. P. Sahu (Co-Founder): 20+ years pharmaceutical marketing veteran (ex-Torrent, Alkem, Abbott). Expert in sales execution, division turnarounds, brand building across anti-infectives, gastro, pain management, etc.
   - Mr. S. K. Thakur (Co-Founder): Veteran with 35+ years of selling experience (ex-Aristo, Alkem).
   - Mrs. Harpreet Sahu (Director): B.Pharm, 2+ decades of operational & marketing expertise (ex-Piramal, Hoechst). Played a pivotal role in specialty therapeutic segment revitalization.
   - Mr. A. K. Sahu (Director): Commerce graduate, 10+ years pharma experience, driver of operational scalability and business expansion.
   - Mr. Aman Sahu (Director): B.Com, 5+ years of operations management and Day-to-day coordination.
   - Mr. V. K. Sharma (Director): 30+ years in pharma sales, East India expert (ex-Aristo, Alkem, Mapra Country Sales Head).
   - Mr. Ratnesh Thakur (Director): 20+ years in pharma sales, established numerous brands in Bihar (ex-Aristo, Alkem).

3. Strengths:
   - WHO-GMP manufactured products, ISO 9001:2000 certified partner facilities.
   - Separate Penicillin and Non-Penicillin production divisions.
   - Strictly scientific product communication, relationship-based doctor engagement, long-term distributor partnerships.
   - Strong logistics backed by a multi-state group presence.

4. Therapeutic Segments & Brand Portfolio:
   - Antibiotics: 
     * Injectables: Cefanthro 1g/250mg (Ceftriaxone), Cefanthro-XP (Ceftriaxone + Tazobactam), Cefanthro-SB (Ceftriaxone + Sulbactam), Anthrocin (Amikacin), Anthronem (Meropenem).
     * Tablets: Anthrofix (Cefixime), Anthrofix-O (Cefixime + Ofloxacin), Anthroclav 625 (Amoxycillin + Clavulanic Acid).
     * Suspensions: Anthrofix DS, Anthrofix Drops, Anthroclav DS.
   - Gastro & Acid Management: Pumpan-40 (Pantoprazole), Pumpan-D (Pantoprazole + Domperidone), Pumpan-L (Pantoprazole + Levosulpiride), Pumpan-IV.
   - Pain Management: Anthrodol (Aceclofenac + Paracetamol), Anthrodol-SP (Aceclofenac + Paracetamol + Serratiopeptidase).
   - Anti-Helminthics: Worm-ve (Albendazole), Qnida (Levofloxacin + Ornidazole).
   - Cough & Cold: LCZINE-M (Levocetrizine + Montelukast).
   - Cardio & Diabetics Segment: Anti-hypertensives, Anti-coagulants, Anti-diabetics.
   - Hormone Therapy: Contraceptive pills, pregnancy & lactation, pre/post menopause.
   
Always provide clear, concise answers. If a user asks about partnerships, tell them they can reach out via admin@anthropharma.com or +91 92236 82223. Never invent new products outside the catalog. Keep your clinical recommendations highly ethical, noting that patients should always consult registered physicians.`;

// Highly resilient models for virtually zero rate limits
const MODELS = [
  { id: 'google/gemini-2.0-flash-001', label: 'Gemini 2.0 Flash (Resilient)' },
  { id: 'meta-llama/llama-3.1-8b-instruct', label: 'Llama 3.1 8B (Resilient)' },
  { id: 'meta-llama/llama-3.3-70b-instruct', label: 'Llama 3.3 70B (High Concurrency)' }
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [activeModel, setActiveModel] = useState(MODELS[0]);
  const [rateLimitInfo, setRateLimitInfo] = useState<string | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);

  // Load chat history from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('anthro_chat_history');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setMessages(parsed.map((m: any) => ({ ...m, timestamp: new Date(m.timestamp) })));
      } catch (e) {
        // clear corrupted logs
        localStorage.removeItem('anthro_chat_history');
      }
    } else {
      // Send greeting message
      const initialGreeting: Message = {
        id: 'greet_1',
        role: 'assistant',
        text: 'Welcome to Anthro Pharmaceuticals! 🔬 I am your AI Clinical Operations Assistant. How can I assist you with our product portfolio, WHO-GMP facilities, or partnership inquiries today?',
        timestamp: new Date(),
        modelUsed: 'Local Guide'
      };
      setMessages([initialGreeting]);
    }
  }, []);

  // Save chat history
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('anthro_chat_history', JSON.stringify(messages));
    }
  }, [messages]);

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Helper to handle OpenRouter API requests with graceful model fallbacks
  const fetchWithFallback = async (userMsgText: string, chatHistory: Message[]) => {
    // Construct request history payload
    const formattedHistory = chatHistory
      .filter(m => m.role !== 'system_alert')
      .map(m => ({
        role: m.role,
        content: m.text
      }));

    const messagesPayload = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...formattedHistory,
      { role: 'user', content: userMsgText }
    ];

    // Try models sequentially if one fails or rate-limits (429)
    for (let i = 0; i < MODELS.length; i++) {
      const model = MODELS[i];
      try {
        console.log(`Attempting conversation using model: ${model.id}`);
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPENROUTER_KEY}`,
            'HTTP-Referer': 'https://anthropharma.com',
            'X-Title': 'Anthro Pharma AI'
          },
          body: JSON.stringify({
            model: model.id,
            messages: messagesPayload,
            temperature: 0.7,
            max_tokens: 800
          })
        });

        if (response.status === 429) {
          throw new Error('429_RATE_LIMIT');
        }

        if (!response.ok) {
          throw new Error(`API_ERROR_STATUS_${response.status}`);
        }

        const data = await response.json();
        const text = data?.choices?.[0]?.message?.content;
        
        if (text) {
          // Success! Return answer and the model used
          return { text, model };
        } else {
          throw new Error('NO_CONTENT_IN_RESPONSE');
        }
      } catch (err: any) {
        console.warn(`Model ${model.id} failed:`, err.message);
        
        // If this is not the last model, we will log a temporary rate-limit notification and proceed to fallback
        if (i < MODELS.length - 1) {
          const nextModel = MODELS[i + 1];
          setRateLimitInfo(`⚠️ Primary channel busy. Auto-routing to ${nextModel.label} for rate limit safety...`);
          setActiveModel(nextModel);
          // Wait 300ms before trying backup model
          await new Promise(resolve => setTimeout(resolve, 300));
        } else {
          // All models failed
          throw new Error('ALL_MODELS_FAILED');
        }
      }
    }
    throw new Error('NO_AVAILABLE_MODELS');
  };

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend || inputText).trim();
    if (!query) return;

    if (!textToSend) {
      setInputText('');
    }

    // Add user message
    const userMsg: Message = {
      id: `user_${Date.now()}`,
      role: 'user',
      text: query,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);
    setRateLimitInfo(null);

    try {
      // Fetch response using the resilient fallback stack
      const { text, model } = await fetchWithFallback(query, [...messages, userMsg]);
      
      const assistantMsg: Message = {
        id: `ai_${Date.now()}`,
        role: 'assistant',
        text: text,
        timestamp: new Date(),
        modelUsed: model.label
      };
      
      setMessages(prev => [...prev, assistantMsg]);
      setActiveModel(model); // Reset to successful model
      setRateLimitInfo(null);
    } catch (error) {
      console.error('Chatbot request error:', error);
      
      const systemAlert: Message = {
        id: `err_${Date.now()}`,
        role: 'system_alert',
        text: 'System Note: OpenRouter key rate limits were temporarily exceeded across primary and secondary models. Please try again in a few seconds.',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, systemAlert]);
    } finally {
      setIsTyping(false);
    }
  };

  const clearHistory = () => {
    if (window.confirm('Clear conversation history?')) {
      localStorage.removeItem('anthro_chat_history');
      const initialGreeting: Message = {
        id: 'greet_1',
        role: 'assistant',
        text: 'Welcome to Anthro Pharmaceuticals! 🔬 I am your AI Clinical Operations Assistant. How can I assist you with our product portfolio, WHO-GMP facilities, or partnership inquiries today?',
        timestamp: new Date(),
        modelUsed: 'Local Guide'
      };
      setMessages([initialGreeting]);
      setRateLimitInfo(null);
      setActiveModel(MODELS[0]);
    }
  };

  const PRESETS = [
    'Tell me about Anthro Pharma',
    'What products do you offer?',
    'Who is the leadership team?',
    'Partner with Anthro Pharma'
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-sans antialiased pointer-events-none">
      {/* 1. Closed Launcher Floating Bubble */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            onClick={() => setIsOpen(true)}
            initial={{ scale: 0, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1, translateY: -2 }}
            whileTap={{ scale: 0.95 }}
            className="absolute bottom-0 right-0 flex items-center justify-center w-14 h-14 rounded-full bg-brand-green text-white shadow-2xl border-2 border-white hover:bg-brand-green-dark transition-all duration-300 group cursor-pointer origin-bottom-right pointer-events-auto"
            aria-label="Open Chat Assistant"
          >
            {/* Heartbeat pulse animation to attract clicks */}
            <span className="absolute -inset-0.5 rounded-full bg-brand-green/35 animate-ping -z-10 group-hover:animate-none" />
            <MessageSquare className="w-6 h-6" />
            
            {/* Glowing active badge */}
            <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-brand-orange border-2 border-white rounded-full" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* 2. Floating Glassmorphic Chat Dialog */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatWindowRef}
            initial={{ opacity: 0, scale: 0.9, y: 60 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 60 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="absolute bottom-0 right-0 w-[92vw] sm:w-[400px] h-[550px] bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-150 flex flex-col overflow-hidden origin-bottom-right pointer-events-auto"
          >
            {/* Header */}
            <div className="bg-brand-green text-white px-5 py-4 flex items-center justify-between relative shadow-sm">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                    <Bot className="w-5.5 h-5.5 text-white" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-brand-green rounded-full" />
                </div>
                <div>
                  <h3 className="font-heading font-black text-base tracking-wide flex items-center gap-1.5 leading-none">
                    Anthro AI Assistant
                  </h3>
                  <p className="text-[10px] text-white/80 font-bold uppercase tracking-wider mt-1">
                    Virtual Assistant
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={clearHistory}
                  title="Clear chat history"
                  className="p-1.5 hover:bg-white/10 rounded-lg text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 hover:bg-white/10 rounded-lg text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-4.5 h-4.5" />
                </button>
              </div>
            </div>

            {/* Message Feed */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-pharma-pattern/10">
              {rateLimitInfo && (
                <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-250 text-amber-800 text-xs font-semibold text-center leading-relaxed">
                  {rateLimitInfo}
                </div>
              )}
              
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'system_alert' ? (
                    <div className="w-full flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-800 text-xs font-semibold">
                      <ShieldAlert className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>{msg.text}</span>
                    </div>
                  ) : (
                    <div className="flex flex-col max-w-[82%] space-y-1">
                      <div
                        className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                          msg.role === 'user'
                            ? 'bg-brand-green text-white rounded-br-none shadow-md font-semibold'
                            : 'bg-white text-charcoal border border-gray-150 rounded-bl-none shadow-sm'
                        }`}
                      >
                        {msg.text.split('\n').map((para, i) => (
                          <p key={i} className={i > 0 ? 'mt-2' : ''}>
                            {para}
                          </p>
                        ))}
                      </div>
                      
                      {/* Message details */}
                      <span className={`text-[10px] text-gray-400 font-bold px-1 ${
                        msg.role === 'user' ? 'text-right' : 'text-left'
                      }`}>
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-150 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 bg-brand-green/30 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2.5 h-2.5 bg-brand-green/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2.5 h-2.5 bg-brand-green rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Presets Carousel */}
            {messages.length <= 2 && !isTyping && (
              <div className="px-4 py-2 border-t border-gray-150 flex gap-2 overflow-x-auto bg-neutral/30 no-scrollbar">
                {PRESETS.map((preset) => (
                  <button
                    key={preset}
                    onClick={() => handleSend(preset)}
                    className="flex-shrink-0 px-3 py-1.5 rounded-full border border-brand-green/20 bg-white hover:bg-brand-green/5 text-brand-green hover:text-brand-green-dark text-xs font-semibold shadow-sm transition-all cursor-pointer"
                  >
                    {preset}
                  </button>
                ))}
              </div>
            )}

            {/* Footer / Input Panel */}
            <div className="p-4 border-t border-gray-150 bg-white flex items-center gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about WHO-GMP products or operations..."
                className="flex-grow bg-neutral/80 border border-gray-150 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-brand-green/50 font-semibold"
                disabled={isTyping}
              />
              <button
                onClick={() => handleSend()}
                disabled={!inputText.trim() || isTyping}
                className="w-10.5 h-10.5 bg-brand-green text-white hover:bg-brand-green-dark disabled:bg-gray-100 disabled:text-gray-400 rounded-xl flex items-center justify-center shadow-md transition-all shrink-0 cursor-pointer"
              >
                <Send className="w-4.5 h-4.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
