//import module
//const saludos = require("./saludos.js")

// console.log(saludos.saludar("daniel"));
// console.log(saludos.saludarHolaMundo());

//only import specific elements
const { saludar, saludarHolaMundo } = require('./saludos.js')
console.log(saludarHolaMundo());
console.log(saludar("daniel"));



