//Las arrow Fuctions pueden tener muchas formas de declararse, pero la mas comun es la siguiente:
const sum = (a,b) => a + b; 
// Si solo tiene un parametro, no necesitamos los parentesis
const square = a => a * a;   
// Si no tiene parametros, se ponen los parentesis vacios
const hello = () => "Hello World";
// Si queremos hacer un return de un objeto, lo ponemos entre parentesis
const createPerson = (name, age) => ({name, age});

console.log(sum(2,3));
console.log(square(4));
console.log(hello());
console.log(createPerson("Oscar", 22));
//Si queremos hacer un return de un objeto, pero no lo ponemos entre parentesis, nos dara un error
const createPerson1 = (name, age) => {name, age};
console.log(createPerson("Oscar", 22));


