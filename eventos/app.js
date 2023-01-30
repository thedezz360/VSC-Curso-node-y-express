const EventEmitter = require("events");
console.log(EventEmitter);

const emisorProductos = new EventEmitter();

//asignamos el evento compra
emisorProductos.on("compra", (total, numProductos) => {
  console.log("Se realizo una compra por: $"+total);
	console.log('Numero de productos: '+ numProductos);
	
});

//emitimos el evento compra
emisorProductos.emit("compra",10,2);
