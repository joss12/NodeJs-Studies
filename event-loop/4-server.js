const http = require('http');

const server = http.createServer((req, res)=>{
    console.log('req event');
    res.send('HEllo EDdy');
})

server.listen(5000, ()=>{
    console.log('Server started:')
})