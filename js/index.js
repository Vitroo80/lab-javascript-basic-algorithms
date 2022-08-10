// Iteration 1: Names and Input

let driver
driver = "hacker1"
let navigator 
navigator = "ahacker2"
console.log (`The driver's name is ${driver}`)

// Iteration 2: Conditionals

if (driver.length > navigator.length){
    console.log (`The driver has the longest name, it has ${driver.length } characters`)
} else if (navigator.length > driver.length){
    console.log(`It seems that the navigator has the longest name, it has ${navigator.length }  characters.`)
} else if (driver.length === navigator.length){
    console.log(`Wow, you both have equally long names, ${driver.length } characters!`)
}

// Iteration 3: Loops
let separado = driver.split("").join(" ")
console.log(separado.toUpperCase())

let inverso = driver.split("").reverse().join("")
console.log(inverso)
 
let names = [driver, navigator]

names.sort()
console.log(names)

