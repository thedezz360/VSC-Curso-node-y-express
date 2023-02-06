const estatusPedido = () => {
  return Math.random() < 0.8;
};

const miPedidoDePizza = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (estatusPedido()) {
      resolve("Pedido exitoso, la pizza esta en camino");
    } else {
      reject("Ha ocurrido un error");
    }
  }, 3000);
});

//alternativa 1

// const manejarPedido = (mensajeDeConfirmacion)=>{
// 	console.log(mensajeDeConfirmacion);
// }

// const rechazarPedido = (mensajeDeError)=>{
// 	console.log(mensajeDeError);
// }

//miPedidoDePizza.then(manejarPedido, rechazarPedido)

//alternativa 2

// miPedidoDePizza
//   .then((mensajeConfirmacion) => {
//     console.log(mensajeConfirmacion);
//   })
//   .catch((mensajeError) => {
//     console.log(mensajeError);
//   });


//alternativa 3

const manejarPedido = (mensajeDeConfirmacion) => {
  console.log(mensajeDeConfirmacion);
};

const rechazarPedido = (mensajeDeError) => {
  console.log(mensajeDeError);
};

miPedidoDePizza
	.then(manejarPedido)
	.catch(rechazarPedido);
