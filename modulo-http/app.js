const http = require('http');

//creamos servidor
const servidor = http.createServer((req, res) => {
  //enviamos la respuesta al cliente
	console.log('solicitud nueva');
	res.end("hola mundo");
});

//establecemos puerto de escucha
const puerto =2000;

servidor.listen(puerto, ()=>{
	console.log('El servidor esta escuchando en puerto: ' + puerto + '...');
	
})