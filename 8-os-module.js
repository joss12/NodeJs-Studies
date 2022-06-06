const os = require('os');

//info about current user;
const user= os.userInfo();

console.log(user)
//mothod return the system uptimme in seconde

console.log(`The system Uptime ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)