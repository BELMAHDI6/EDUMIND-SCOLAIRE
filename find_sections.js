const fs = require('fs');
const content = fs.readFileSync('public/index.html', 'utf8');
const lines = content.split('\n');

lines.forEach((l, idx) => {
  if (l.includes('<section class="view-container"')) {
    console.log(`Line ${idx + 1}: ${l.trim()}`);
  }
});
