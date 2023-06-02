// setTimeout(()=>console.log("aaahora"), 1000);

//* la promesa se crea haciendo new Promise y acepta 2 argumentos, se suelen llamar resolve y reject y son los que se encargan de si la promesa se cumple o no
//* una vez se cumple o no, esa promesa devuelve la informacion que se pide
//* con la informacion devuelta, la promesa tiene un metodo llamado .then que es una funcion de orden superior que recibe una funcion de primera clase, esta funcion de primera clase ya tiene los datos obtenidos con la promesa, por eso en la funcion se espefica que hacer con esos datos, ahora bien los datos son inmateriales, por eso el primer argumento es el que le da un nombre para linkarlos y poder utilizarlos

const myPromise = new Promise((resolve, reject) => {
    setTimeout( () => {
        console.log("se ejecuta la promesa")
        
        resolve("pato");
        reject("algo ha pasado, fallo")

    }, 1000)
})


myPromise
    .then(data => console.log(data))
    .catch(data => console.log(data))


//* api fetch - es una promesa ya hecha, el json() es otra promesa, por lo que hay otro then
fetch("https://jsonplaceholder.typicode.com/users")
    .then(data => data.json())
    .then(json => {
        for (const item of json) {
            console.log(item.name)
        }
    });


//* async y await para ejecutar mas facil las promesas
(async function(){
    const data = await fetch("https://jsonplaceholder.typicode.com/users")
    const json = await data.json();
    console.log(json)
})();