// es un dato primitivo, por lo tanto modificar su valor en la funcion lo modifica, pero el original se mantiene igual 
let number = 4;

function edit(num, value) {
    num = value;
    console.log(`El valor interno es: ${num}`)
}

edit(number, 10);
console.log(`el valor externo es: ${number}`)

// el siguiente ejemplo es con un objeto que pasa por referencia
// primero se creaa clase que cuando se llama y se le pasa un valor creara un objeto que tenga el nombre del objeto.value = valor pasado como argumento
// una vez se llama una funcion que implica modificar el objeto pasado, se modificara tanto el externo como el interno
class A {
    constructor(value){
        this.value = value;
    }
}

let num1 = new A(4);
console.log(num1)

function editObject(obj, value){
    obj.value = value;
    console.log(`El valor interno es: ${obj.value}`)
}

editObject(num1, 10);
console.log(`el valor externo es: ${num1.value}`)