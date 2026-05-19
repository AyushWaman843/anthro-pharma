const fs = require('fs');
const path = require('path');
const directory = 'c:/Users/palla/Downloads/anthro-pharmaceuticals/src/pages';
const files = fs.readdirSync(directory).filter(f => f.endsWith('.tsx'));

for (let file of files) {
  let content = fs.readFileSync(path.join(directory, file), 'utf8');
  let matches = content.match(/\/src\/assets\/images\/[a-zA-Z0-9_.-]+/g);
  
  if (matches && matches.length > 0) {
    let importsToInsert = [];
    let uniqueImages = [...new Set(matches)];
    
    uniqueImages.forEach((match, index) => {
      let fileName = match.split('/').pop();
      let varName = 'img_' + fileName.replace(/[^a-zA-Z0-9]/g, '_').replace(/_+/g, '_').replace(/^_|_$/g, '');
      
      importsToInsert.push(`import ${varName} from '../assets/images/${fileName}';`);
      
      // Replace JSX src="/src/assets/..." -> src={varName}
      let jsxRegex = new RegExp(`src=["']${match}["']`, 'g');
      content = content.replace(jsxRegex, `src={${varName}}`);
      
      // Replace literal '/src/assets/...' -> varName (for dictionaries and arrays)
      let literalRegex = new RegExp(`["']${match}["']`, 'g');
      content = content.replace(literalRegex, varName);
    });
    
    const lastImportIndex = content.lastIndexOf('import ');
    if (lastImportIndex !== -1) {
      const endOfLastImport = content.indexOf('\n', lastImportIndex);
      content = content.slice(0, endOfLastImport + 1) + importsToInsert.join('\n') + '\n' + content.slice(endOfLastImport + 1);
    } else {
      content = importsToInsert.join('\n') + '\n\n' + content;
    }
    
    fs.writeFileSync(path.join(directory, file), content);
    console.log('Fixed ' + file);
  }
}
