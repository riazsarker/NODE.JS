const http=require('http');
const server=http.createServer((req,res)=>{
     if(req.url=='/'){
        res.write('Hello programmer!');
        res.write('How are you doing');
        
        res.end();
     }
});

server.listen(3000);

console.log('listening on port 3000');