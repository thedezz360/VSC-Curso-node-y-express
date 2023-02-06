const http = require('http');

const server = http.createServer((req,res)=>{
    res.end('Hola mundo, soy daniel');
})

const puerto = 3000;

server.listen(puerto, ()=>{
    console.log('El servidor esta escuchando en el puerto: ' + puerto);
    
})