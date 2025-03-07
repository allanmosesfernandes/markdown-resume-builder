import nodePandoc from 'node-pandoc';

// Input Markdown file
const src = './resume.md';

// Pandoc Arguments
const args = '-f markdown -t html5 -s -c style.css -o resume.html';

// Callback function to handle conversion result
const callback = (err, result) => {
  if (err) {
    console.error('❌ Error:', err);
    return;
  }
  console.log('✅ Resume successfully converted to HTML!');
};

// Call Pandoc to convert Markdown to HTML
nodePandoc(src, args, callback);
