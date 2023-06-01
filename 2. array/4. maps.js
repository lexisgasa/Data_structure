const numbers = [1, 2, 3, 4, 5, 6];

// forma estructurada
function sumNumbers(array, num){
    const newCollection = [];

    for (const item of array) {
        newCollection.push(item + num)
    }
    return newCollection;
}

console.log(numbers)
console.log(sumNumbers(numbers, 5))

console.log("==================")

// funciones de js -- inmutable
function mapNumbers(array, num){
    return array.map( item => item + num)
}

console.log(numbers)
console.log(mapNumbers(numbers, 5))