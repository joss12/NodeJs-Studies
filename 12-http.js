const http = require('http');



const server = http.createServer((req, res, next)=>{
    if(req.url === '/'){
        res.write('Hey there!');
    }
    if(req.url ==='/about'){
        res.end('here is our short history')
    }

    res.end(`<h1>Oops!</h1>
    <p>We can't access the page</p>
    <a href="/">Back home</a>
    `)
});



server.listen(5000)
