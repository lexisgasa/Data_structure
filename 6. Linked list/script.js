// implementar lista enlazada

class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
};

class LinkedList{
    constructor(){
        this.head = null;
    }

    add(value){
        const node = new Node(value);
        if(this.head === null) {
            this.head = node;
        } else {
            let current = this.head;
            while ( current.next !== null ){
                current = current.next;
            }

            current.next = node;
        }
    }

    show(){
        let current = this.head;

        while( current !== null ){
            console.log(current.value);
            current = current.next;
        }
    }

    size(){
        let count = 0;
        let current = this.head;

        while (current !== null) {
            count++;
            current = current.next;
        }
    

        return count;
    }

    clear(){
        this.head = null;
    }

    delete(value){
        if(this.head.value === value) {
            this.head = this.head.next;
        } else {
            let current = this.head;

            while(current.next !== null ){
                current.next = current.next.next;
                break;
            }
        }
    }
};

const linkedList = new LinkedList();
linkedList.add("A");
linkedList.add("B");
linkedList.add("C");
console.log(linkedList.size());
linkedList.show();
linkedList.delete("B")
console.log(linkedList.size());
linkedList.show();

