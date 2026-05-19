import { Leader, Strength, TherapeuticSegment, ProductCatalog } from './types';
import opsahu from './assets/images/opsahu.jpg';
import harpreetsahu from './assets/images/harpreetsahu.jpg';
import aksahu from './assets/images/aksahu.jpg';
import amansahu from './assets/images/amansahu.jpg';

export const BRAND_COLORS = {
  primary: '#4CAF26',
  secondary: '#FFFFFF',
  accent: '#E85A1B',
  neutral: '#F4F9F2',
  text: '#3D5140',
  dark: '#1A2B1C'
};

export const CONTACT_INFO = {
  name: "Anthro Pharmaceuticals Private Limited",
  email: "admin@anthropharma.com",
  phone: "+91 92236 82223",
  website: "www.anthropharma.com",
  address: {
    line1: "“SAHU HOUSE”",
    line2: "101, Plot No. B-128, Sector – 20, Belapur,",
    line3: "Navi Mumbai – 400614, Maharashtra, India"
  }
};

export const STRENGTHS: Strength[] = [
  {
    title: "WHO-GMP Manufactured Products",
    description: "Our products are manufactured at facilities following strict WHO-GMP guidelines.",
    icon: "Shield"
  },
  {
    title: "ISO 9001:2000 Certified Facilities",
    description: "Commitment to quality management systems across all operational touchpoints.",
    icon: "CheckCircle"
  },
  {
    title: "Experienced Leadership with 30+ Years Industry Expertise",
    description: "Managed by professionals with 30+ years of deep pharmaceutical industry expertise.",
    icon: "Users"
  },
  {
    title: "Ethical Marketing Model",
    description: "We follow a scientific and transparent marketing model to build lasting trust.",
    icon: "Handshake"
  },
  {
    title: "Third-Party Manufacturing & Own Brand Portfolio",
    description: "Versatile portfolio featuring both proprietary brands and manufacturing partnerships.",
    icon: "Factory"
  },
  {
    title: "Structured Quality Assurance Systems",
    description: "Meticulous quality assurance systems ensuring batch consistency and safety.",
    icon: "FileSearch"
  }
];

export const LEADERS: Leader[] = [
  {
    name: "Mr. O. P. Sahu",
    title: "Co-Founder @ Anthro Pharmaceuticals Private Limited",
    bio: "Mr. Omprakash Ramnarayan Sahu is a senior pharmaceutical professional with 20+ years of experience in pharma marketing, product management, and sales strategy across leading Indian pharmaceutical companies. like Torrent, Alkem & Abbott\n\nHolding a Bachelor of Pharmacy degree and an MMS in Marketing Management, he brings in 2 decades of extensive expertise in Domestic markets\n\nHe has successfully led many multi-specialty divisions across therapies including anti-infectives, gastroenterology, gynaecology, pain management, cough & cold, and nutrition, transforming underperforming portfolios into profitable, high-growth businesses. His expertise spans brand building, new product launches, division turnaround, and pan-India sales execution\n\nWith a strong focus on ethical promotion, scientific excellence, and sustainable growth, he brings strategic depth and execution strength to every healthcare initiative.",
    image: opsahu
  },
  {
    name: "Mr. S. K. Thakur",
    title: "Co-Founder @ Anthro Pharmaceuticals Private Limited",
    bio: "Mr. S. K. Thakur, a veteran in Pharma industry having more than 35 years’ experience in pharma selling who was associated with M/s Aristo Pharmaceuticals for more than 3 decades and then with M/s Alkem laboratories Ltd., till he decided that now it’s time to move on and create something of our own."
  },
  {
    name: "Mrs. Harpreet Sahu",
    title: "Director @ Anthro Pharmaceuticals Private Limited",
    bio: "Mrs. Harpreet Sahu is a B.Pharm graduate and seasoned pharmaceutical professional with over two decades of experience in the Indian pharmaceutical industry. She has extensive exposure to pharmaceutical operations, product management, marketing, and business development, providing her with strong technical as well as commercial expertise. She has worked in many MNC like Piramal, Hoechst in various roles throughout her career span.\n\nFor the last two years, she has been associated with Anthro Pharmaceuticals Pvt. Ltd. as an Additional Director, where she has played a pivotal role in the turnaround of the company, particularly in strengthening and expanding its specialty pharmaceutical segments. She has contributed significantly to portfolio optimization, specialty product development, brand positioning, and strategic market execution.\n\nShe is known for her hands-on leadership style, deep understanding of specialty markets, and her ability to drive sustainable growth and organizational revival.",
    image: harpreetsahu
  },
  {
    name: "Mr. A. K. Sahu",
    title: "Director @ Anthro Pharmaceuticals Private Limited",
    bio: "Mr. A. K. Sahu is a Commerce graduate with Management Honours and brings over two decades of rich business experience, including more than 10 years of dedicated exposure to the pharmaceutical industry. As a Director at Anthro Pharmaceuticals Private Limited, he has been actively associated with the organization for the past three years, playing a pivotal role in strengthening operations and accelerating the company’s growth trajectory.\n\nHe is widely recognized for his strong execution capability, strategic planning approach, and business expansion mindset, contributing significantly to the development of operational systems, market presence, and organizational scalability. His leadership continues to support Anthro Pharmaceuticals in building a stronger footprint across therapy segments and geographic markets.\n\nWith a practical understanding of business dynamics and a results-driven approach, Mr. Sahu remains committed to driving sustainable growth, operational excellence, and long-term value creation for the organization.",
    image: aksahu
  },
  {
    name: "Mr. Aman Sahu",
    title: "Director @ Anthro Pharmaceuticals Private Limited",
    bio: "Mr. Aman Sahu is a Commerce graduate and a dynamic young professional with over 5 years of hands-on experience in business operations and organizational support functions. As a Director at Anthro Pharmaceuticals Private Limited, he plays an active role in strengthening operational efficiency and supporting the company’s expansion initiatives across key functional areas.\n\nWith a forward-looking mindset and strong involvement in day-to-day operational strengthening, Mr. Sahu continues to support the organization’s mission of building a scalable and performance-driven pharmaceutical business.",
    image: amansahu
  },
  {
    name: "Mr. V. K. Sharma",
    title: "Director @ Anthro Pharmaceuticals Private Limited",
    bio: "Mr. V. K. Sharma is a well-known name in East India pharma circles and has 30+ years in pharma sales. He has worked with companies such as Aristo Pharmaceuticals, Alkem laboratories and most recently with Mapra Laboratories where he was the Country Sales Head. He is ably supported by his young and bright son, Mr. Tejeshwi Sharma. Tejeshwi has over 5 years of experience in finance and received a B.Tech degree from I.I.T. Delhi."
  },
  {
    name: "Mr. Ratnesh Thakur",
    title: "Director @ Anthro Pharmaceuticals Private Limited",
    bio: "Mr. Ratnesh Thakur, a young dynamic sales professional having over 20+ years of experience in pharma sales and who has been instrumental in establishing numerous new brands in bihar while working with companies such as Aristo Pharmaceuticals and Alkem laboratories."
  }
];

export const THERAPEUTIC_SEGMENTS: TherapeuticSegment[] = [
  {
    id: "antibiotics",
    name: "Antibiotics",
    indications: [
      "Urinary tract Infections",
      "Lower respiratory tract infection",
      "Upper respiratory tract infection",
      "Serious ICU (HAP, VAP, Diabetic foot) infections",
      "Typhoid"
    ]
  },
  {
    id: "gastro",
    name: "Gastro & Acid Management",
    indications: [
      "Peptic Ulcers",
      "GERD",
      "GERD & Dyspepsia associated Nausea & Vomiting",
      "PPI + Domperidone"
    ]
  },
  {
    id: "pain",
    name: "Pain Management",
    indications: [
      "Pain & Inflammation",
      "Accelofenac + Paracetamol + Serratiopeptidase"
    ]
  },
  {
    id: "anti-helminthics",
    name: "Anti-Helminthics",
    indications: [
      "Complete De-worming & parasitic clearance",
      "Round worms, Hook worms, Whip worms",
      "Chronic & Recurrent Amoebiasis"
    ]
  },
  {
    id: "cardio-diabetics",
    name: "Cardio & Diabetics Segment",
    indications: [
      "Anti Hypertensives",
      "Anti coagulants",
      "Anti diabetics"
    ]
  },
  {
    id: "hormone",
    name: "Hormone Therapy",
    indications: [
      "To cater to Gynaecologists",
      "Pre & Post menopause including contraceptive pills",
      "Pregnancy & Lactation"
    ]
  },
  {
    id: "cough-cold",
    name: "Cough & Cold Preparations",
    indications: [
      "Dry & Allergic cough & cold",
      "Anti Allergic & Anti Cold",
      "Severe & Chronic dry cough"
    ]
  }
];

export const PRODUCT_CATALOG: ProductCatalog = {
  injectables: [
    { brandName: "Cefanthro 1g", composition: "Ceftriaxone 1gm Injection with WFI" },
    { brandName: "Cefanthro 250mg", composition: "Ceftriaxone 250mg Injection" },
    { brandName: "Cefanthro-XP 1.125", composition: "Ceftriaxone 1gm + Tazobactam 125mg Injection" },
    { brandName: "Cefanthro-XP 281.25 mg", composition: "Ceftriaxone 250mg + Tazobactam 31.25mg Injection" },
    { brandName: "Cefanthro-XP 140.625", composition: "Ceftriaxone 125mg + Tazobactam 15.625mg Injection" },
    { brandName: "Cefanthro-SB1.5g", composition: "Ceftriaxone 1g + Sulbactam 500mg Injection" },
    { brandName: "Anthrocin 500mg", composition: "Amikacin 500mg Injection" },
    { brandName: "Anthrocin 100mg", composition: "Amikacin 100mg Injection" },
    { brandName: "Anthronem 125mg", composition: "Meropenem 125mg Injection" },
    { brandName: "Anthronem 250mg", composition: "Meropenem 250mg Injection" },
    { brandName: "Anthronem 1gm", composition: "Meropenem 1gm Injection" },
    { brandName: "Pumpan-IV", composition: "Pantoprazole Lyophilised Injection IV 40mg" },
    { brandName: "VM12 inj.", composition: "Methylcobalamine + Pyridoxine+ Niacinamide+ folic acid inj." }
  ],
  tablets: [
    { brandName: "Anthrofix 200mg", composition: "Cefixime 200mg Tablet " },
    { brandName: "Anthrodol", composition: "Aceclofenac 100mg + Paracetamol 325mg Tablet" },
    { brandName: "Anthrodol-SP", composition: "Aceclofenac100 mg,Paracetamol 325 mg + Serratiopeptidase 15 mg " },
    { brandName: "Pumpan-40", composition: "Pantoprazole 40mg Tablet" },
    { brandName: "Pumpan- D", composition: "Pantoprazole 40mg + Domperidone 30mg S.R Capsules" },
    { brandName: "Pumpan- L", composition: "Pantoprazole 40mg + LEVOSULPIRIDE 30mg S.R Capsules" },
    { brandName: "Anthroclav 625", composition: "Amoxycillin 500mg + Clavulanic Acid 125mg" },
    { brandName: "Worm-ve", composition: "Albendazole 400mg Tab" },
    { brandName: "Qnida", composition: "Levofloxacin 250mg + Ornidazole 500mg " },
    { brandName: "Anthrofix-O", composition: "Cefixime 200mg Tab + Ofloxacin 200mg Tab" },
    { brandName: "LCZINE-M tab", composition: "Levocetrizine 5mg + Monteleukast 10mg" },
    { brandName: "V-OFF", composition: "BETAHISTINE 16MG" },
    { brandName: "UCLO", composition: "FEBUXOSTAT 40mg" },
    { brandName: "FLO-ON", composition: "Tamsulosin (MR) 0.4mg + Dutasteride 0.5mg Tab" }
  ],
  suspensions: [
    { brandName: "Anthrofix DS", composition: "Cefixime 50mg 60ml Dry Syrup With Carton" },
    { brandName: "Anthroclav DS", composition: "Amoxycillin 200mg + Clavulanic Acid-28.5mg/5ml" },
    { brandName: "Anthrofix Drops", composition: "Cefixime 25mg/ml" },
    { brandName: "LCZINE-M susp", composition: "Levocetrizine 2.5mg + Monteleukast 4mg" },
    { brandName: "VM+", composition: "Lycopene + Multivitamin + Multimineral Syrup" },
    { brandName: "D-OFF", composition: "Ofloxacin 50mg + Ornidazole 125mg Susp. 60 ml" }
  ]
};

