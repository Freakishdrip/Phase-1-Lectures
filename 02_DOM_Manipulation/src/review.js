//Review variables 
//global
const globalVar = "hello world"
let letVar = "1"

//Functions & Scope
function test1(parameter1,parameter2){
    const globalVar = "in the function"
    
}

function test2(){
    const globalVar = "in test 2"
    console.log(globalVar);
    if(true){
        const globalVar = "In the if statement"
        console.log(globalVar)
    }
    console.log("in test 2")
    console.log(globalVar)

}

//Anoymous Functions 
function callCallBack(innerFunction){
    console.log(innerFunction)
    innerFunction()
}

callCallBack(function(){
    console.log("Calling the anon function")
})

callCallBack(test2)

const fruits = ["Apple", "Orange", "Banana", "Pineapple"]
fruits.push("mango")
fruits.push("strawberry")
console.log(fruits)

for(i=0,i<fruits.length, i++){
    console.log(fruits[i]) //old way
}

function loopFruits(fruits){
    fruits.forEach((f)=> {
        console.log(f + " To eat") //new way
    })
    //console.log(fruit)
    //return fruit + " To Eat"
}

const mapFruit = fruit.map(loopFruit)
console.log(mapFruit)

const user = {
    name: "Nick",
    school: "FlatIron",
    location: "Denver"
}

for(const key in user){
    console.log(`${key}: ${user[key]}`)
}
//Arrow Functions


//Array iterationss


//create a list of fruits


//test pushing to a list


//create a variable that pops an element from the list


//loop through the list with a regular for loop


// loop using a .forEach

//loop using .map




