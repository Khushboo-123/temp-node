const path = require('path');
console.log(path.sep);

const filepath = path.join('/content/./', '/subfolder', 'test.txt');
console.log(filepath);

const base = path.basename(filepath);
console.log(base);

console.log(path.win32);

const absolute = path.resolve(__dirname, 'app.js' );
console.log(absolute);