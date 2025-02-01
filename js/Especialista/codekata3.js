let myFruit = "apple";

switch (myFruit) {
    case "orange":
    case "lemon":
        console.log("Citric");
        break;
    case "banana":
        console.log("Tropical");
        break;
    case "apple":
        console.log("Mi fruta");
        break;
}


//TERNARIO
let fruit = "lemon";
//SET > array donde los datos deben ser unicos
//MAp -> se bassa en clave- valor
let avalaibleFruits = new Set(["lemon", "banana", "watermelon"]);

//HAS -> pregunta si tiene
let isAvailable = (avalaibleFruits.has(fruit)) ? "available" :  "no es valido papa";

console.log(isAvailable);

//OPERADOR RELACIONAL IN

let myFavoriteFruit = "orange";

let myAvailableFruits = {lemon: "Citric", watermelon: "Big fruit", banana: "Tropical"};
// let myAvailableFruits = ["orange", "apple", "watermelon"];
//Se puden usar con arrays, pero solo buscando el indice

// IN -> si nuestra variable (orange) esta dentro del objeto
console.log(myFavoriteFruit in myAvailableFruits);

//Buscamos el indice 0, y como existe, dará true
console.log(0 in myAvailableFruits);