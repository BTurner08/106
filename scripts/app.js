function sayHello(){
    console.log("Hello there")
}
function sayGoodBye(name,lastName){
    console.log("Adios! "+name+" "+lastName)
    var color = "Blue"
}
function init() {
    console.log("hello world")
    // if the users pays they can visit
    // {
    sayHello();
    let name = "Blake"
    sayGoodBye(name, "Turner")
    // }
}
window.onload = init; //avoid the init()
//hello