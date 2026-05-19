const fs = require('fs');
const path = require('path');

const PAGES_DIR = 'c:/Users/palla/Downloads/anthro-pharmaceuticals/src/pages';

// Helper function to generate clean standard animated SVG markup
const makeRobustSvg = (size, opacity, duration, pos = '-bottom-12 -right-12') => {
  return `
              {/* Rotating SVG Molecule Graphic in background */}
              <div className="absolute ${pos} ${size} ${opacity} text-brand-orange animate-spin pointer-events-none z-0" style={{ animationDuration: '${duration}' }}>
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="50" cy="50" r="10" />
                  <line x1="50" y1="40" x2="50" y2="20" />
                  <line x1="50" y1="60" x2="50" y2="80" />
                  <line x1="40" y1="50" x2="20" y2="50" />
                  <line x1="60" y1="50" x2="80" y2="50" />
                  <circle cx="50" cy="15" r="5" fill="currentColor" />
                  <circle cx="50" cy="85" r="5" fill="currentColor" />
                  <circle cx="15" cy="50" r="5" fill="currentColor" />
                  <circle cx="85" cy="50" r="5" fill="currentColor" />
                  <circle cx="28" cy="28" r="6" />
                  <circle cx="72" cy="72" r="6" />
                  <line x1="33" y1="33" x2="43" y2="43" />
                  <line x1="67" y1="67" x2="57" y2="57" />
                </svg>
              </div>`;
};

// 1. UPDATE Home.tsx (showcase display panel)
const homePath = path.join(PAGES_DIR, 'Home.tsx');
if (fs.existsSync(homePath)) {
  let content = fs.readFileSync(homePath, 'utf8');

  // Find showcase display panel container and inject the rotating molecule
  const targetStr = '<div className="bg-white border border-orange-tint/20 shadow-[0_20px_50px_rgba(0,0,0,0.03)] rounded-sm w-full relative overflow-hidden flex flex-col justify-between min-h-[640px]">';
  if (content.includes(targetStr) && !content.includes('min-h-[640px]"] animate-spin')) {
    const replacement = targetStr + makeRobustSvg('w-64 h-64', 'opacity-[0.045]', '85s', '-bottom-16 -right-16');
    content = content.replace(targetStr, replacement);
    console.log('Home.tsx showcase display panel successfully updated!');
    fs.writeFileSync(homePath, content, 'utf8');
  }
}

// 2. UPDATE Therapeutics.tsx (top grid cards)
const thPath = path.join(PAGES_DIR, 'Therapeutics.tsx');
if (fs.existsSync(thPath)) {
  let content = fs.readFileSync(thPath, 'utf8');

  const targetStr = 'className="bg-white/80 backdrop-blur-md p-8 rounded-sm text-center shadow-md hover:shadow-xl transition-all duration-350 group border border-gray-150/50 hover:-translate-y-1.5"';
  const replacement = 'className="bg-white/80 backdrop-blur-md p-8 rounded-sm text-center shadow-md hover:shadow-xl transition-all duration-350 group border border-gray-150/50 hover:-translate-y-1.5 relative overflow-hidden"';
  
  if (content.includes(targetStr)) {
    // Replace with overflow-hidden and prepend the SVG inside the card body!
    let parts = content.split(targetStr);
    let newContent = parts[0];
    for (let i = 1; i < parts.length; i++) {
      newContent += replacement + '>\n               ' + makeRobustSvg('w-28 h-28', 'opacity-[0.04]', '60s', '-bottom-8 -right-8') + parts[i].substring(parts[i].indexOf('>') + 1);
    }
    console.log('Therapeutics.tsx top cards successfully updated!');
    fs.writeFileSync(thPath, newContent, 'utf8');
  }
}

// 3. UPDATE Products.tsx (header, sidebars, grids, ledger, empty states)
const prodPath = path.join(PAGES_DIR, 'Products.tsx');
if (fs.existsSync(prodPath)) {
  let content = fs.readFileSync(prodPath, 'utf8');

  // a. Header Card
  const headerStr = 'className="bg-white/95 backdrop-blur-md border border-white/60 p-8 sm:p-10 md:p-12 rounded-sm shadow-xl max-w-3xl w-full text-center relative overflow-hidden"';
  if (content.includes(headerStr) && !content.includes('Certified Formulations\n            </span>')) {
    let parts = content.split(headerStr);
    content = parts[0] + headerStr + '>\n             ' + makeRobustSvg('w-64 h-64', 'opacity-[0.045]', '80s', '-bottom-16 -right-16') + parts[1].substring(parts[1].indexOf('>') + 1);
    console.log('Products.tsx header card successfully updated!');
  }

  // b. Search Panel
  const searchStr = 'className="bg-white p-6 rounded-sm shadow-sm border border-gray-100 space-y-4"';
  const searchRepl = 'className="bg-white p-6 rounded-sm shadow-sm border border-gray-100 space-y-4 relative overflow-hidden"';
  if (content.includes(searchStr)) {
    let parts = content.split(searchStr);
    let newContent = parts[0];
    for (let i = 1; i < parts.length; i++) {
      newContent += searchRepl + '>\n               ' + makeRobustSvg('w-24 h-24', 'opacity-[0.04]', '65s', '-bottom-6 -right-6') + parts[i].substring(parts[i].indexOf('>') + 1);
    }
    content = newContent;
    console.log('Products.tsx side panels successfully updated!');
  }

  // c. Active Category Header Panel
  const actCatStr = 'className="flex items-center justify-between bg-white p-4 rounded-sm border border-gray-100 shadow-sm"';
  const actCatRepl = 'className="flex items-center justify-between bg-white p-4 rounded-sm border border-gray-100 shadow-sm relative overflow-hidden"';
  if (content.includes(actCatStr)) {
    content = content.replace(actCatStr, actCatRepl + '>\n               ' + makeRobustSvg('w-20 h-20', 'opacity-[0.035]', '70s', '-bottom-4 -right-4'));
    console.log('Products.tsx active category panel successfully updated!');
  }

  // d. Product Grid Card
  const gridStr = 'className="bg-white rounded-sm border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-350 overflow-hidden flex flex-col group hover:border-brand-green/20"';
  const gridRepl = 'className="bg-white rounded-sm border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-350 overflow-hidden flex flex-col group hover:border-brand-green/20 relative"';
  if (content.includes(gridStr)) {
    let parts = content.split(gridStr);
    let newContent = parts[0];
    for (let i = 1; i < parts.length; i++) {
      newContent += gridRepl + '>\n                             ' + makeRobustSvg('w-32 h-32', 'opacity-[0.04]', '60s', '-bottom-8 -right-8') + parts[i].substring(parts[i].indexOf('>') + 1);
    }
    content = newContent;
    console.log('Products.tsx grid cards successfully updated!');
  }

  // e. Product Ledger Table Card
  const ledgerStr = 'className="bg-white rounded-sm border border-gray-100 shadow-sm overflow-hidden"';
  const ledgerRepl = 'className="bg-white rounded-sm border border-gray-100 shadow-sm overflow-hidden relative"';
  if (content.includes(ledgerStr)) {
    content = content.replace(ledgerStr, ledgerRepl + '>\n                       ' + makeRobustSvg('w-64 h-64', 'opacity-[0.04]', '75s', '-bottom-16 -right-16'));
    console.log('Products.tsx ledger table container successfully updated!');
  }

  // f. Product Empty State Card
  const emptyStr = 'className="bg-white rounded-sm p-20 text-center border border-gray-100"';
  const emptyRepl = 'className="bg-white rounded-sm p-20 text-center border border-gray-100 relative overflow-hidden"';
  if (content.includes(emptyStr)) {
    content = content.replace(emptyStr, emptyRepl + '>\n                     ' + makeRobustSvg('w-48 h-48', 'opacity-[0.045]', '65s', '-bottom-10 -right-10'));
    console.log('Products.tsx empty state card successfully updated!');
  }

  fs.writeFileSync(prodPath, content, 'utf8');
}

// 4. UPDATE Operations.tsx (add to remaining 12 white cards!)
const operPath = path.join(PAGES_DIR, 'Operations.tsx');
if (fs.existsSync(operPath)) {
  let content = fs.readFileSync(operPath, 'utf8');

  // a. Handle standard p-6 cards
  const standardCardStr = 'className="bg-white p-6 rounded-sm border border-gray-150 shadow-sm space-y-4"';
  const standardCardRepl = 'className="bg-white p-6 rounded-sm border border-gray-150 shadow-sm space-y-4 relative overflow-hidden"';
  if (content.includes(standardCardStr)) {
    let parts = content.split(standardCardStr);
    let newContent = parts[0];
    for (let i = 1; i < parts.length; i++) {
      newContent += standardCardRepl + '>\n                 ' + makeRobustSvg('w-32 h-32', 'opacity-[0.04]', '55s', '-bottom-10 -right-10') + parts[i].substring(parts[i].indexOf('>') + 1);
    }
    content = newContent;
    console.log('Operations.tsx standard p-6 cards successfully updated!');
  }

  // b. Handle left-border quote banners
  const leftBorderCardStr = 'className="bg-white border border-gray-150 border-l-4 border-brand-orange p-6 rounded-sm shadow-sm"';
  const leftBorderCardRepl = 'className="bg-white border border-gray-150 border-l-4 border-brand-orange p-6 rounded-sm shadow-sm relative overflow-hidden"';
  if (content.includes(leftBorderCardStr)) {
    let parts = content.split(leftBorderCardStr);
    let newContent = parts[0];
    for (let i = 1; i < parts.length; i++) {
      newContent += leftBorderCardRepl + '>\n               ' + makeRobustSvg('w-36 h-36', 'opacity-[0.04]', '65s', '-bottom-10 -right-10') + parts[i].substring(parts[i].indexOf('>') + 1);
    }
    content = newContent;
    console.log('Operations.tsx orange left-border quote cards successfully updated!');
  }

  const leftBorderGreenCardStr = 'className="bg-white border border-gray-150 border-l-4 border-brand-green p-6 rounded-sm shadow-sm"';
  const leftBorderGreenCardRepl = 'className="bg-white border border-gray-150 border-l-4 border-brand-green p-6 rounded-sm shadow-sm relative overflow-hidden"';
  if (content.includes(leftBorderGreenCardStr)) {
    let parts = content.split(leftBorderGreenCardStr);
    let newContent = parts[0];
    for (let i = 1; i < parts.length; i++) {
      // Avoid replacing if it already has rotating SVG inside
      if (!parts[i].includes('Rotating SVG Molecule')) {
        newContent += leftBorderGreenCardRepl + '>\n               ' + makeRobustSvg('w-36 h-36', 'opacity-[0.04]', '65s', '-bottom-10 -right-10') + parts[i].substring(parts[i].indexOf('>') + 1);
      } else {
        newContent += leftBorderGreenCardStr + parts[i];
      }
    }
    content = newContent;
    console.log('Operations.tsx green left-border quote cards successfully updated!');
  }

  fs.writeFileSync(operPath, content, 'utf8');
}

console.log('COMPREHENSIVE ROBUST OVERHAUL COMPLETED SUCCESSFULLY');
