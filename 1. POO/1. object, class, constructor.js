const juan = new Object();
juan.name = "Juan";
juan.age = 21;
console.log(juan);

// con clases

class People{
    constructor(name, lastName){
        this.name = name;
        this.lastName = lastName;
    }
    hi(){
        return `Hola, soy ${this.name} ${this.lastName}`
    }
    fullName(){
        return `${this.name} ${this.lastName}`
    }
}

const hector = new People("Hector","Leon");
console.log(hector);
console.log(hector.hi());
console.log(hector.fullName());

// implementer herencia usando "extend"

class Student extends People{
    constructor(name, lastName, career){
        super(name, lastName);
        this.career = career;
    }
    // hereda todos los metodos de la clase, pero puede sobreescribirlos
    hi(){
        return `${super.hi()} estoy estudiando: ${this.career}`
    }
    // se pueden crear nuevos
    careerDetail(){
        return `Estudia ${this.career}`
    }

}

const maria = new Student("Maria", "Perez","Ingenieria")
console.log(maria);
console.log(maria.hi());
console.log(maria.fullName());
console.log(maria.careerDetail());
