const numbers = [1, 2, 3, 4, 5, 6];

// forma estructurada
function sumNumbers(array){
    let sum = 0;

    for (const item of array) {
        sum += item;
    }

    return sum;
}

console.log(numbers);
console.log(sumNumbers(numbers));

console.log("===================")

// funciones js
// el argumento suma es la variable donde se almacena el number, el let sum = 0, item es cada iteracion
function reduceNumbers(array){
    return array.reduce((suma, item) => suma + item, 0)
    // el 0 es opcional, es el valor en el que empezara a acumular así que default sera 0
}

console.log(reduceNumbers(numbers))