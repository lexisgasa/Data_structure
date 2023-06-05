// implementación de cola

class Queue {
    #items = [];

    enqueue(item){
        this.#items.push(item);
    }

    dequeue(){
        return this.#items.shift();
    }

    isEmpty(){
        return this.#items.lenght === 0;
    }

    peek(){
        return this.#items[0];
    }
    
    size(){
        return this.#items.length;
    }

    getItems(){
        return [...this.#items];
    }
}

const queue = new Queue();

queue.enqueue("Pedro");
queue.enqueue("Ana");
queue.enqueue("Diana");

console.log(queue);

console.log(queue.peek()); // primero que entró -> pedro
const firstItem = queue.dequeue(); // saca al primero, pedro 
console.log(firstItem); // vuelve a ser pedro
console.log(queue); // pedro ya no esta
console.log(queue.peek()); // el primer match ahora es anna

// ha entrado en orden Pedro, ana y diana, y el primero en salir es Pedro -> FIFO