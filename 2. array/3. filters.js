const names = ["Ana", "Alejandro", "Francisco", "Héctor", "Mateo", "Javier", "Cristina", "Aurora", "Sergio", "Maria", "Nerea"];

// modo estructurado 
function searchFirstLetter(collection, letter){
    const newCollection = [];

    for (const word of collection) {
        if(word[0].toUpperCase() === letter.toUpperCase()) 
            newCollection.push(word); 
    }
    return newCollection;
}

console.table(searchFirstLetter(names, "a"))


// funciones ya existentes de js
// el filter, cuando sea true sera parte de la collecion que retorna -- inmutable
function searchFirstLetter2(collection, letter){
   return collection.filter( word => word[0].toUpperCase() === letter.toUpperCase() );
    
}
console.table(searchFirstLetter2(names, "a"))


// prueba 1 - doble iteracion
// function busqueda(array) {
//     const newArray = [];

//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i])
//         for (let j = 0; j < array[i].length; j++) {
//             console.log(array[i][j]);  
//             if (array[i][j] === "A")
//                 newArray.push(array[i])
//         }
//     }

//     console.log(newArray)
// }

// prueba 2 - apuntar a la primera letra directo
// function busqueda(array){
//     const newArray = [];

//     for (let i = 0; i < array.length; i++) {
//         if (array[i][0] === "A")
//         newArray.push(array[i])
//     }
//     console.log(newArray)
// }

// busqueda(names)