
const fs = require('fs');
 const f1 = fs.readFileSync('./content/first.txt' , 'utf8');
 console.log(f1);
const f2 = fs.readFileSync('./content/second.txt' , 'utf8');
console.log(f1 , f2);
    

fs.writeFileSync(
    './content/result-sync.txt' , `Hey this is the result`
    );


