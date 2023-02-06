const express = require("express");

const routerMatematicas = express.Router();
const {matematicas} = require('../datos/cursos.js').infoCursos;
//>>>>>>>>Cursos matematicas

routerMatematicas.get("/", (req, res) => {
  res.send(JSON.stringify(matematicas));
});

routerMatematicas.get("/:tema", (req, res) => {
  const tema = req.params.tema;
  const resultados = matematicas.filter(
    (curso) => curso.tema === tema
  );

  if (resultados.length === 0)
    return res.status(404).send("no se encontraron cursos de: " + tema);

  res.send(JSON.stringify(resultados));
});

//exportamos 
module.exports = routerMatematicas;
