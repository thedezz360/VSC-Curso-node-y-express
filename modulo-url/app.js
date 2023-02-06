const miURL = new URL('https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1');

console.log(miURL.hostname); // wwww.ejemplo.org
console.log(miURL.pathname); // /cursos/programacion
console.log(miURL.searchParams); //objeto
console.log(miURL.searchParams.get('ordenar'));// vistas
console.log(miURL.searchParams.get('nivel'));// 1




