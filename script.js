// implementando una pila - stack

class Stack {

    // el # hace el elemento privado, la unica forma de acceder es mediante sus metodos
    #items = [];
    push(item){
        this.#items.push(item);
    }
    pop(item){
        return this.#items.pop();
    }
    peek(item){
        return this.#items[this.#items.length-1];
    }
    size(){
        return this.#items.length
    }
    isEmpty(){
        return this.#items.length === 0;
    }
    getItems(){
        return [...this.#items]
    }
}

const stack = new Stack();

console.log(stack.isEmpty());
stack.push("Pedro");
stack.push("Ana");
stack.push("Juan");

console.log(stack);
console.log(stack.peek());
console.log(stack.size());
console.log(stack.isEmpty());






//? recuerda que console.dir da toda la informacion del elemento
const inputName = document.querySelector("input")
const content = document.querySelector("#content")
const btn = document.querySelector("button")

const stackNames = new Stack();

const addToStack = () => {
    let inpValue = inputName.value;
    let element = document.createElement("p");
    element.innerHTML = inpValue;
    content.append(element)
    inputName.value = null;
}


