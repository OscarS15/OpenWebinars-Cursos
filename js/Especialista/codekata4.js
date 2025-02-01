/**
 * Bucle FOR
 */
let enumeration = [];

for(let i= 0; i < 10; i++){
    enumeration[i] = i + 1;
}

console.log(enumeration);

/**
 * Bucle DO WHILE
 */
let limit = 3;

do {
    console.log(limit--); 
} while (limit>0);

/**
 * Bucle FOR IN
 */

let fruits = {a: "orange", b: "lemon", c:"grape"};
for (let elem in fruits) {
    //con esto obtenemos la clave
    console.log(elem);
    //con esto obtenemos el valor
    console.log(fruits[elem]);
}

/**
 * Bucle FOR OF
 */

let frutas = new Set(["naranja", "limon", "manzana"]);
for (let elem of frutas) {
    console.log(elem);
}


let frutas2 = ["pera", "mandarina", "sandia", "banana"];
//Condicion de saber si algun elemento esta en nuestro array con un bucle FOR
for (let i = 0; i < frutas2.length; i++) {
    if (frutas2[i] == "mandarina") {
        console.log(frutas2[i]);
        break;
    }
    console.log(frutas2[i])
}

let myOptions =  new Set (["naranja", "banana", "manzana"]);
for (let elem of frutas2) {
    if(myOptions.has(elem)){
        console.log(elem);
        break;
    }else{
        console.log(elem);
        continue;
    }
}