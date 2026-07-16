const fs = require('fs');
const p = 'src/pages/AdminContent.tsx';
const data = fs.readFileSync(p, 'utf8');
const marker = ' key={field.path.join(\'.\')}\n';
const markerIndex = data.indexOf(marker);
if (markerIndex === -1) {
  console.log('MARKER_NOT_FOUND');
  process.exit(1);
}
const next = data.slice(0, markerIndex) + data.slice(markerIndex + marker.length);
fs.writeFileSync(p, next);
console.log('REMOVED');
