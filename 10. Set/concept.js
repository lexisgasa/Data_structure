const set = new Set();


// añadir valores con .add()
set.add(5);
set.add(8);
set.add(10);
console.log(set)

// no se duplican elementos, seguira teniendo los mismos elementos
set.add(5);
set.add(10);
console.log(set)

// se puede almacenar de todo - hay que recordar que los objetos se guardan por referencia, por eso añadir dos objetos manualmente los puede añadir ya que tienen referencias distintas en la memoria, pero si estuviera en una variable solo se añadaria una unica vez
set.add({
    name: "Manuel",
    age: 42
})
console.log(set)

// se borran con .delete(), pero el objeto que va por referencia no puede borrarlo con el metodo, habría que hacer un forEach donde x => x.name === "Manuel" ? set.delete(x) : x
set.delete(10)
console.log(set)

// comprobar si existe con .has()
set.has(5) && console.log("existe el 5")


console.log("=================")


// array en set para comprobar que no duplica valores
const array = [5, 4, 3, 2, 1, 2, 3, 4]
console.log(array)
const set2 = new Set(array);
console.log(set2)

// iterar el set con for of o for each
for (const item of set) {
    console.log(item)
}

// borrar todo el set con clear()
set.clear();
console.log(set)