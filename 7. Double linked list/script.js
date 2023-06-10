// lista doble enlazada

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.lenght = 0;
    }


    add(value){
        this.lenght++;
        const node = new Node(value);

        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else{
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
    }

    show(){
        let current = this.head;

        console.log(`Cabeza ${this.head?.value}`);
        console.log(`Cabeza ${this.tail?.value}`);
        
        console.log("=====================");
        while(current !== null){
            console.log(`valor actual: ${current.value} // valor siguiente: ${current.next?.value} // valor anterior: ${current.prev?.value}`);
            current = current.next;
        }
    }

    delete(value){
        if (this.lenght === 0) return;

        if (this.head.value === value) {
            if (this.length === 1) {
                    this.head = null;
                    this.tail = null;
            } else {
                    this.head = this.head.next;
                    this.head.prev = null;
                }
            this.lenght--;
        } else if(this.tail.value === value){
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.lenght--;
        } else {
            let current = this.head;
            while (current.next !== null){
                if(current.next.value === value){
                    current.next = current.next.next;
                    current.next.prev = current;
                    this.length--;

                    break;
                }
                current = current.next;
            }
        }
    }

    clear(){
        this.head = null;
        this.prev = null;
        this.lenght = 0;
    }
}

const list = new DoubleLinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
list.show();


console.log("=============")
list.delete(3);
list.show();

