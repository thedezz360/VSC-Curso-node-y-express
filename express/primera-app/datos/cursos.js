let infoCursos = {
  programacion: [
    {
      id: 1,
      titulo: "Aprende python",
      lenguaje: "python",
      vistas: 123,
      nivel: "basico",
    },
    {
      id: 2,
      titulo: "Python intermedio",
      lenguaje: "python",
      vistas: 456,
      nivel: "intermedio",
    },
    {
      id: 3,
      titulo: "Aprende JavaScript",
      lenguaje: "javascript",
      vistas: 789,
      nivel: "basico",
    },
  ],
  matematicas: [
    {
      id: 1,
      titulo: "aprende calculo",
      tema: "calculo",
      vistas: 147,
      nivel: "basico",
    },
    {
      id: 2,
      titulo: "aprende algebra",
      tema: "algebra",
      vistas: 258,
      nivel: "intermedio",
    },
  ],
};

//exportamos el objeto
module.exports.infoCursos = infoCursos;
