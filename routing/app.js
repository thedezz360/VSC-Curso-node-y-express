const http = require("http");
const {infoCursos} = require("./cursos.js");

//creamos servidor

const servidor = http.createServer((req, res) => {
  //obtenemos el metodo
  const metodo = req.method;

  switch (metodo) {
    case "GET":
      return manejarSolicitudGET(req, res);
    case "POST":
      return manejarSolicitudPOST(req, res);
    default:
			res.statusCode = 501;
      res.end('el metodo no puede ser manejado por el servidor: ' + metodo);
			break;
  }
});

function manejarSolicitudGET(req, res) {
  const path = req.url;

  if (path === "/") {
		res.writeHead(200,{'Content-Type' : 'application/json'});
    return res.end("Bienvenidos, server creado con node.js y routing");
  } else if (path === "/cursos") {
    return res.end(JSON.stringify(infoCursos));
  } else if (path === "/cursos/programacion") {
    return res.end(JSON.stringify(infoCursos.programacion));
  }

  res.statusCode = 404;
  res.end("El recurso solicitado no existe");
}

function manejarSolicitudPOST(req, res) {
  const path = req.url;
  if (path === "/cursos/programacion") {

    let cuerpo = '';
    req.on('data', contenido =>{
      cuerpo += contenido.toString();
    });

    req.on('end', ()=>{
      console.log(cuerpo);
      console.log(typeof cuerpo);

      // convertir a un objeto de JavaScript
      cuerpo= JSON.parse(cuerpo);

      console.log(typeof cuerpo);
      console.log(cuerpo.titulo);
      
      

      return res.end("El servidor recibio una solicitud post");
      
    })

    //return res.end("El servidor recibio una solicitud post");
  }

	res.statusCode = 404;
  res.end("El recurso solicitado no existe");
}

const puerto = 3000;

servidor.listen(puerto, () => {
  console.log("El servidor esta escuchando en el puerto: " + puerto);
});
