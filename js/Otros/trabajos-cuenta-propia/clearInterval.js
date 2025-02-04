// ClearInterval() -> Detiene la ejecución de un intervalo de tiempo establecido con setInterval(). - es asincrono
// Sintaxis -> clearInterval(idIntervalo);

let contador = 0;
const intervalo = 1000; // 1 segundo

const intervalId = setInterval(() => {
    contador++;
    console.log(`Ejecución número: ${contador}`);

    if (contador === 5) {
        clearInterval(intervalId); // Detiene el intervalo después de 5 ejecuciones
        console.log("Intervalo detenido.");
    }
}, intervalo);