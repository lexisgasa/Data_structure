const textCode = document.getElementById("code"); 
const textCustomer = document.getElementById("customer"); 
const divContent = document.getElementById("content"); 


// primero crear el map con su variable
const customers = new Map ();

function add(){
    // crea o edita, la key y su value
    customers.set(textCode.value, textCustomer.value)
    // despues de reemplazar, vacía los campos
    textCode.value = "";
    textCustomer.value = "";
    // metodo focus pondra el cursor auomaticamente en ese input
    textCode.focus();


    show();
}

function show(){
    // parte vacio
    divContent.innerHTML = "";

    // al hacer un loop todo se añade
    for(let item of customers){
        divContent.innerHTML += `<div>
        <b>${item[0]}</b> ${item[1]}
        </div>`
    }
}