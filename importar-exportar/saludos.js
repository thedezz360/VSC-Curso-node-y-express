function saludar (nombre){
	return `Hola ${nombre}`;
}

function saludarHolaMundo(){
	return 'Hola Mundo';
}

//export module
//module exports,  es un objeto

// module.exports.saludar = saludar;
// module.exports.saludarHolaMundo = saludarHolaMundo;

module.exports = {
	saludar: saludar,
	saludarHolaMundo: saludarHolaMundo
};

console.log(module.exports);


