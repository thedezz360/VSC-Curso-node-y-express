const curso = require('./curso.json');

//console.log(curso.esPublico);


let infoCurso = {
    "titulo": "Aprende node.js",
      "numVistas" : 45642,
      "numLikes" : 2111,
      "temas" : [
          "JavaScript",
          "Node.js"
      ],
      "esPublico" : true
  };

// Object parse to JSON  
let infoCursoJson = JSON.stringify(infoCurso);

console.log(infoCursoJson);
console.log(typeof infoCursoJson);

//JSON parce to object
let infoCursoObjeto =  JSON.parse(infoCursoJson);

console.log(infoCursoObjeto.titulo);
console.log(typeof infoCursoObjeto);

