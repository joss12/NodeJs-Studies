
//Creating a file, do not run this code in the file with the code below.
const { writeFileSync } = require('fs')
for (let i = 0; i < 10000; i++) {
  writeFileSync('./content/big.txt', `hello world ${i}\n`, { flag: 'a' })
}



///If you want to read the file that you created, copy and past this code into 
///another file and run the npm start
const {createReadStream} = require('fs');

const stream = createReadStream('./content/big.txt', {
    highWaterMark: 9000, encoding: 'utf8'});

stream.on('data', (result)=>{
    console.log(result);
});

stream.on('data', (err)=>{
    console.log(err)
})
