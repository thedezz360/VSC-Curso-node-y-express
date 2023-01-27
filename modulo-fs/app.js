//fs -> file system
//todos sus metodos son asincronos por defecto

const fs = require('fs');

//leer archivo
fs.readFile('./index.html', 'utf-8', (err, contenido)=>{
  if (err) {
		//detiene la ejecucion
		throw err; 
		//no detiene la ejecucion
		//console.log(err);
	}
	console.log(contenido);
})

fs.rename('index.html' , 'main.html' , (err)=>{

})

