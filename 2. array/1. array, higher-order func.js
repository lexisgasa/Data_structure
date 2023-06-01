let array = [1, 2, "pato", true];


// for clasico para recorrer arrays
function showArray1(array){
    for ( let i = 0; i < array.length; i++ ){
        console.log(array[i])
    }
}

// for of, más rapido y sencillo
function showArray2(array){
    for ( let item of array){
        console.log(item)
    }
}

showArray1(array);
console.log("==============================");
showArray2(array);
console.log("==============================");

// funncion de primera clase -> funciones que se guardan en variables

function hi(){
    console.log("hola")
};
const h = hi;

h();
h();

// funcion de primera clase con parametros
function sum(a,b) {
    console.log(a+b);
}
const s = sum;
s(2,2);

// funcion de orden superior son funciones que tienen de parametros otras funciones - funciones anidadas

function some(fnctn){
    console.log("corriendo la primera linea de codigo");

    fnctn();

    console.log("ultima linea de codigo");
}
some(h);

// funciones de orden superior que reciba funciones con parametros

function some2(fn, num1, num2){
    console.log("se hace algo primero")

    fn(num1, num2);

    console.log("final")
}

some2(s, 40,5)

