const mapa = new Map ();

// insertar info con el metodo ya existente .set que recibe dos argumentos

mapa.set(2, "Alex")
mapa.set(5, "Ana")
mapa.set(9, "Adri")
mapa.set(21, "Aurora")

console.log(mapa)

// modifica un valor utilizando igual .set con el mismo argumento identificador y lo remplzado

mapa.set(2, "Manu")
console.log(mapa)

// obtener valor con .get, con la clave es suficiente

console.log(mapa.get(21))
console.log(mapa.get(100)) // no existe -> undefined


// saber si el elemento existe con true o false con el metodo .has

console.log(mapa.has(5)) // true
console.log(mapa.has(100)) // false

// para borrar un valor usa el metodo .delete
mapa.delete(9)
console.log(mapa)

// podemos tener keys que sean objetos
const keyObject1 = {id: 1, hash: "abc"}

mapa.set(keyObject1, "Carla"); // carla será el valor, el key sera el objeto creado
console.log(mapa)

// recorrido de la collection 
// por los valores usando el metodo .values
for (const value of mapa.values()) {
    console.log(value)   
}
// por las llaves usando el metodo .keys
for (const key of mapa.keys()) {
    console.log(key)   
}
// todo el item
for (const item of mapa) {
    console.log(mapa)   
}


// borrar todo el mapa con el metodo .clear
mapa.clear();
console.log(mapa)