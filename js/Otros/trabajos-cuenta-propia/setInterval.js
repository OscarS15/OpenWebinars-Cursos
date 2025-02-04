//setInterval() -> Ejecuta una función o un fragmento de código de forma repetida cada cierto tiempo. - es asincrono
// Sintaxis -> setInterval(funcion, intervalo);
//Podemos poner una funcion anonima o una funcion declarada, el intervalo es en milisegundos

setInterval(() => {
    console.log("Este mensaje se mostrará cada 2 segundos");
}, 2000); //este es el tiempo en milisegundos

//mostramos la hora actual cada segundo
setInterval(() => {
    const ahora = new Date();
    console.log(`Hora actual: ${ahora.toLocaleTimeString()}`);
}, 1000); // Actualiza cada segundo