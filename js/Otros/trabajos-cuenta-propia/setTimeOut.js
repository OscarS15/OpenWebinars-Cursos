/*
setTimeout() -> Ejecuta una función o un fragmento de código después de que haya transcurrido un tiempo determinado. - es asincrono
Sintaxis -> setTimeout(funcion, tiempo);

*/

setTimeout(() => {
    //aqui va el codigo que se ejecutará
    console.log("Pasaran dos segundos y mostrará esto");
}, 2000); //este es el tiempo en milisegundos

let contador = 5;

function iniciarTemporizador() {
    console.log(contador);

    if (contador > 0) {
        contador--;
        setTimeout(iniciarTemporizador, 1000); // Llama a la función cada segundo
    } else {
        console.log("¡Tiempo agotado!");
    }
}

iniciarTemporizador(); // Inicia el temporizador