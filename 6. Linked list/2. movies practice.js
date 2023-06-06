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

const title = document.getElementById("title");
const image = document.getElementById("image")
const divNext = document.getElementById("next")

const moviesLinkedList = new LinkedList();
moviesLinkedList.add({
    name: "Spiderman",
    picture: "https://m.media-amazon.com/images/I/51u+B9-6r5L._AC_UF1000,1000_QL80_.jpg"
});
moviesLinkedList.add({
    name: "Batman",
    picture: "https://cdn.shopify.com/s/files/1/1416/8662/products/batman_begins_2005_advance_original_film_art_9922c5af-d6bb-4f81-8487-19a4428f8600.jpg?v=1654194335"
    // https://static.posters.cz/image/1300/posters/the-batman-2022-i122125.jpg
});
moviesLinkedList.add({
    name: "Lord of the rings",
    picture: "https://pictures.abebooks.com/isbn/9781608873821-es.jpg"
});

function showMovie(){
    const movie = moviesLinkedList.head.value;

    title.innerHTML = movie.name;
    image.src = movie.picture;

    if(moviesLinkedList.head.next !== null) {
        const movieNext = moviesLinkedList.head.next.value;
        divNext.innerHTML = "Siguiente " + movieNext.name;
    } else {
        divNext.innerHTML = "No hay más películas"
    }
}

function nextMovie(){
    if(moviesLinkedList.head !== null) {
        moviesLinkedList.delete(moviesLinkedList.head.value);
        showMovie();
    }
}

showMovie();