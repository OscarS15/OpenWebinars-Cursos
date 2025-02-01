function* extractNumber(attemps){
    for(let i = 0; i < attemps; i++){
        //numero de opciones entre el uno y el 90
        yield Math.floor(Math.random() * 91);
    }
}

let cpu = 0;
let player = 0;

//Tiradas de la CPU
let cpuGenerator = extractNumber(2);
cpu += cpuGenerator.next().value;
cpu += cpuGenerator.next().value;

//Tiradas del jugador
let playerGenerator = extractNumber(2);
player += playerGenerator.next().value;
player += playerGenerator.next().value;

console.log("Cpu: " + cpu);
console.log("Jugador: " + player);
console.log((cpu>player) ? "Cpu ha ganao": "player winnn");