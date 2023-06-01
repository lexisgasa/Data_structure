// metodo mutable modifica lo que recibe, immutable recibe una copia

const numbers = [1, 2, 3, 4, 5, 6]
const numbers2 = [...numbers]

console.log(numbers)
console.log(numbers2)

console.log("===========================")

//! metodo mutable
function multiplicacionMutable(collection, num){
    for(let i = 0; i < collection.length; i++){
        // con el *= hacemos que cada valor en su indice se actualice con el resultado obtenido de *2
        collection[i]*=num;
    }
    console.log(collection)
}

multiplicacionMutable(numbers, 3);
// el array ha sido alterado ya que pasa por referencia en la funcion
console.log(numbers)


//? aunque el spread opeartor hace una copia del array, la copia esta hecha antes de la mutacion
//? console.log(numbers2) -> (6) [1, 2, 3, 4, 5, 6]

console.log("===========================")


//! metodo inmutable
function multiplicacionInmutable(collection, num){
    const newNumbers = [];
    for (const item of collection) {
        newNumbers.push(item * num)
    }
    console.log(newNumbers)
}
multiplicacionInmutable(numbers2, 2)
console.log(numbers2)