function ordenarProducto(producto){
	return new Promise((resolve, reject)=>{
		console.log('Ordenando: ' + producto + ' de freeCodeCamp');
		setTimeout(()=>{
			if(producto === 'taza'){
				resolve('Ordenando una taza');
			}else{
				reject('Este producto no esta disponible');
			}
		},2000)
	});
}

function procesarPedido(respuesta){
	return new Promise((resolve)=>{
		console.log('procesando respuesta...');
		console.log('la respuesta fue: ' + respuesta);

		setTimeout(()=>{
			resolve('Gracias por su compra');
		}, 4000)
		
	})
}

//encadenar promesas

// ordenarProducto('lapiz')
// //promesa de ordenarProducto
// 	.then(respuesta =>{
// 		console.log('respuesta recibida');
// 		console.log(respuesta);
		
// 		//encadenamos una nueva promesa
// 		return procesarPedido(respuesta);
// 	})
// 	//promesa de procesar pedido
// 	.then(respuestaProcesada =>{
// 		console.log(respuestaProcesada);
// 	})
// 	.catch(err =>{
// 		console.log(err);
// 	})

async function realizarPedido(producto){
	try {
		const respuesta = await ordenarProducto(producto);
		console.log('Respuesta recibida');
		console.log(respuesta);
		const respuestaProcesada = await procesarPedido(respuesta);
		console.log(respuestaProcesada);
	} catch (error) {
		console.log(error);
		
	}
}

realizarPedido('taza');