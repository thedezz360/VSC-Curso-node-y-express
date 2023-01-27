//fs -> file system
//todos sus metodos son asincronos por defecto

const fs = require('fs');


// //>>>>>leer archivo
// fs.readFile('./index.html', 'utf-8', (err, contenido)=>{
//   if (err) {
// 		//detiene la ejecucion
// 		throw err; 
// 		//no detiene la ejecucion
// 		//console.log(err);
// 	}
// 	console.log(contenido);
// })
// //>>>>>>renombrar archivo
// fs.rename('index.html' ,'main.html' , (err)=>{
// 	if(err)throw err;
// 	console.log('nombre cambiado');
// })

// //>>>>>>>>agregar contenido al final de un archivo
// fs.appendFile('index.html' , '<p>hola daniel</p>', (err)=>{
// 	if(err)throw err;
// 	console.log('Archivo actualizado');
// })

// //>>>>>Reemplazar todo el contenido del archivo
// fs.writeFile('index.html', 'Contenido nuevo', (err)=>{
// 	if(err) throw err;
// 	console.log('Contenido Reemplazado');
// })

// //>>Eliminar archivos
// fs.unlink('main.html', (err)=>{
// 	if(err) throw err;
// 	console.log('Archivo eliminado');
// })


///>>>>>>>>>>>>>>Versiones sincronas <<<<<<<<<<<<<

//>>>>>leer archivo
const archivo = fs.readFileSync('./index.html', 'utf-8');
console.log(archivo);

//>>>>>>renombrar archivo
fs.renameSync('index.html' ,'main.html');

//>>>>>>>>agregar contenido al final de un archivo
fs.appendFileSync('index.html' , '<p>hola daniel</p>');

//>>>>>Reemplazar todo el contenido del archivo
fs.writeFileSync('index.html', 'Contenido nuevo');

//>>Eliminar archivos
fs.unlinkSync('main.html');
  

