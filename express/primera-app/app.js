const express = require('express');
const {infoCursos} = require('./datos/cursos.js');
const routerMatematicas =require('./routers/matematicas.js');
const routerProgramacion = require('./routers/programacion.js');
//se crea aplicacion express
const app = express();


app.use('/api/cursos/programacion', routerProgramacion);

app.use('/api/cursos/matematicas', routerMatematicas);


//Routing
//establece metodo y path
app.get('/', (req,res)=>{
	res.send('Mi primer servidor. Cursos web')
})

app.get('/api/cursos',(req,res)=>{
	res.send(infoCursos);
})





//establece puerto 
const PUERTO= process.env.PORT || 3000;

app.listen(PUERTO,()=>{
	console.log('el servidor esta escuchando en el puerto: ' + PUERTO);
	
})
