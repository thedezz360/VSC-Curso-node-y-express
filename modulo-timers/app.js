function mostrarTema(tema){
    console.log(`Estoy aprendiendo ${tema}`);
}

function sumar (a,b){
    console.log(a+b);
}

//setTimeout (function, retraso, argumento1, argumento2)
setTimeout(mostrarTema, 5000, 'node.js');
setTimeout(sumar, 3000, 5, 6);

//setImmediate(function, argumento1, argumento2)
//se ejecuta despues de que se haya ejecutado todo el codigo sincrono

console.log('antes de setImmediate');

setImmediate(mostrarTema, 'Express');

console.log('despues de setImmediate');

//set inTerval (function, intervalo, arg1, arg2);
//ejecuta código un número infinito de veces con un retraso 
//específico de milisegundos

setInterval(mostrarTema, 2000, 'PHP');