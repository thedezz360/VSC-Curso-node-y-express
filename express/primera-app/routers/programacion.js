const express = require("express");
const routerProgramacion = express.Router();
const {programacion} = require('../datos/cursos.js').infoCursos;

//middleware -> se ejecuta -despues de recibir una solicitud
 //                        -antes de enviar una respuesta
// para poder recibir objetos json 
routerProgramacion.use(express.json());

//>>>>>>Cursos programacion
// '/' camino base del router
routerProgramacion.get("/", (req, res) => {
  res.send(JSON.stringify(programacion));
});

//con parametro url 'lenguaje'
routerProgramacion.get("/:lenguaje", (req, res) => {
  const lenguaje = req.params.lenguaje;
  const resultados = programacion.filter(
    (cursos) => cursos.lenguaje === lenguaje
  );

  if (resultados.length === 0)
    return res.status(404).send("no se encontraron cursos de: " + lenguaje);

  //obtenemos parametros query de la url
  if (req.query.ordenar === "vistas") {
    return res.send(
      JSON.stringify(resultados.sort((a, b) => b.vistas - a.vistas))
    );
  }

  res.send(JSON.stringify(resultados));
});

routerProgramacion.get("/:lenguaje/:nivel", (req, res) => {
  const lenguaje = req.params.lenguaje;
  const nivel = req.params.nivel;
  const resultados = programacion.filter(
    (cursos) => cursos.lenguaje === lenguaje && cursos.nivel === nivel
  );

  if (resultados.length === 0)
    return res
      .status(404)
      .send(`no se encontraron cursos de ${lenguaje} de nivel ${nivel}`);

  res.send(JSON.stringify(resultados));
});

//post

routerProgramacion.post('/', (req,res)=>{
  let cursoNuevo = req.body;
  programacion.push(cursoNuevo);
  res.send(JSON.stringify(programacion));
})

//put

routerProgramacion.put('/:id',(req,res)=>{
  const cursoActualizado = req.body;
  const id = req.params.id;

  let indice = programacion.findIndex(curso=>curso.id == id);

  if (indice >=0){
    programacion[indice] = cursoActualizado;
  }else{
    res.status(404);
  }

  res.send(JSON.stringify(programacion));

})

routerProgramacion.patch('/:id', (req,res)=>{
  const infoActualizada= req.body;
  const id = req.params.id;

  const indice= programacion.findIndex(curso=>curso.id == id);
  if(indice >= 0 ){
    const cursoModificar = programacion[indice];
    Object.assign(cursoModificar, infoActualizada);
  }
  res.send(JSON.stringify(programacion));
})

routerProgramacion.delete('/:id',(req,res)=>{
  const id = req.params.id;
  const indice = programacion.findIndex(curso => curso.id == id);
  if(indice>=0){
    programacion.splice(indice,1);
  }
  res.send(JSON.stringify(programacion));
})

//exportamos 
module.exports = routerProgramacion;