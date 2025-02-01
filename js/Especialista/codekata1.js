//Array
let namedCollection = ["Oscar", "Josep", "Susi", "Candela", "Javi"];
console.log(namedCollection);
console.log(namedCollection[3]); 


//Set
let enumu = new Set([1,7, true, "Holas"]);
console.log(enumu.has(1));//con has preguntamos si existe en nuestro SET

enumu.add("Bye");//añadimos al SET elementos

console.log(enumu); 


//Map
let mapeo = new Map([
    ["1", "Oscar"],
    [2, "Alumno"]
]);

mapeo.set("1", "OpenWebinars");

console.log(mapeo.get(1));//devuelve el valor 


//Object
let objeto = {
    name: "Oscar",
    surname: "Pillaca",
    edad: 22
};

console.log(objeto);//para llamar a algun valor, punto y el valor que queramos llamar 


//Date
let currentDate = new Date();
console.log(currentDate);