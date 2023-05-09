const os = require('os');
os.version();
console.log(os.userInfo());

console.log(`the system uptime is ${os.uptime()} seconds`);

const currentOs = {
    name : os.type(),
    relase : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem(),

}
console.log(currentOs);

const si = require('systeminformation');

si.system(function(data) {
  console.log('Laptop model:', data.model);
});
