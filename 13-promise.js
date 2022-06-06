const {readFile} = require('fs');


const getData = (path)=>{
    return new Promise((resolve, reject)=>{
        readFile(path, 'utf8', (err, data)=>{
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}

getData('./data.json')
.then((result)=>{console.log(result)})
.catch((err)=>{console.log(err)});

````````````````````````````````````````````````````

// const getText = (path) =>{
//     return new Promise((resolve, reject)=>{
// readFile(path, 'utf8', (err, data)=>{
//     if(err){
//         reject(err)
//     }else{
//         resolve(data)
//     }
// });
//     })
// }
// getText('./data.json')
// .then((result)=> console.log(result))
// .catch((err)=> console.log(err));

````````````````````````````````````````````````
// let done = true;

// const isItDoneYet = new Promise((resole, reject)=>{
//     if(done){
//         const workDone = 'This job is done';
//         resole(workDone);
//     }else{
//         const why = 'Still working one it';
//         reject(why);
//     }
// });

// const checkIfItsDone = () =>{
//     isItDoneYet.then(ok =>{console.log(ok)})
//     .catch(err=>{
//         console.log(err)
//     })
// }

// checkIfItsDone()

````````````````````````````````````````````````


// const {readFile} = require('fs');

// const getText = (path) =>{
//     return new Promise((resolve, reject)=>{
// readFile(path, 'utf8', (err, data)=>{
//     if(err){
//         reject(err)
//     }else{
//         resolve(data)
//     }
// });
//     })
// }

// const start = async()=>{
//    try {
//     const first = await getText('./content/first.txt');
//     const second = await getText('./content/second.txt');
//     console.log(first, second);
//    } catch (error) {
//        console.log(err)
//    }
// }
// start();

``````````````````````````````````````````````````````````


// const {readFile, writeFile} = require('fs').promises
// const util = require('util');

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

````````````````````````````````````````````````````

// const start = async()=>{
//    try {
//     const first = await readFile('./content/first.txt', 'utf8');
//     const second = await writeFile('./content/second.txt', 'utf8');
//     await writeFile('./content/result-mind-generate.txt', `This is Awesone: ${first} ${second}`)
//     console.log(first, second);
//    } catch (err) {
//        console.log(err)
//    }
// }
// start();

````````````````````````````````````````````````

// const getText = (path) =>{
//     return new Promise((resolve, reject)=>{
// readFile(path, 'utf8', (err, data)=>{
//     if(err){
//         reject(err)
//     }else{
//         resolve(data)
//     }
// });
//     })
// }


// getText('./first')
// .then((result)=> console.log(result))
// .catch((err)=> console.log(err));



