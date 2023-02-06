const http = require("http");

const servidor = http.createServer((req, res) => {
  //req => peticion
	// console.log('==> req (solicitud)');

  // console.log(req.url);
  // console.log(req.method);
  // console.log(req.headers);

  //res => respuesta
  console.log("==> res (respuesta)");

  console.log(res.statusCode); //200 ok
  // res.statusCode = 404;
  // console.log(res.statusCode);

	//establecer cabecera
	res.setHeader('content-type', 'application/json');
	console.log(res.getHeaders());
	
	//enviamos respuesta
  res.end("hola mundo");
});

const puerto = 3000;

servidor.listen(puerto, () => {
  console.log("El servidor esta escuchando en el puerto: " + puerto);
});
