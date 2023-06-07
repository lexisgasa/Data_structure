const functions = new Set();

function addAction(fn){
    functions.add(fn);
    console.log(functions)
}

function action1(){
    console.log("Action 1")
}
function action2(){
    console.log("Action 2")
}
function action3(){
    console.log("Action 3")
}
function action4(){
    console.log("Action 4")
}

function run(){

    for (const fn of functions) {
        fn();
    }
}