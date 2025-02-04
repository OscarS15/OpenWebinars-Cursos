//clearTimeout() -> Cancela un temporizador establecido con setTimeout(). - es asincrono
// Sintaxis -> clearTimeout(idTemporizador);

const timeoutIdE = setTimeout(() => {
    console.log("Esto no se ejecutará.");
}, 3000);

clearTimeout(timeoutIdE); // Cancela el timeout


let timeoutId;

function iniciarTemporizador() {
    timeoutId = setTimeout(() => {
        console.log("Acción retrasada ejecutada.");
    }, 5000); // Programa la acción para después de 5 segundos
}

function cancelarTemporizador() {
    clearTimeout(timeoutId); // Cancela la acción retrasada
    console.log("Acción retrasada cancelada.");
}

iniciarTemporizador();
cancelarTemporizador(); // Cancela el temporizador antes de que se ejecute