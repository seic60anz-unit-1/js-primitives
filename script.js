// Define variables for Fortune Teller
const job_title = 'Earl of the North'
const geographic_location = 'The North'
const favourite_sport = 'Football'
const side_project = 'Building a wall'
// Output Fortunate based on variables 
console.log(` You will be a ${job_title} in ${geographic_location}, playing ${favourite_sport} while building ${side_project}.`)

// Tempreture Demo
// Formula Celsius  => Fahrenheit
// (36°C × 9/5) + 32 = 96.8°F

const roomTempReading_celsius = 36
let roomTempReading_Fahrenheit = null

roomTempReading_Fahrenheit = 32 + (roomTempReading_celsius * 9/5)

console.log(`${roomTempReading_celsius} \u00B0 C is ${roomTempReading_Fahrenheit} \u00B0 F`)

// Fahrenheit to Celsius e.g. 
// 0°C = (32°F − 32) × 5/9 

const newtemp_Fahrenheit = 120
let newtemp_celsius = null

newtemp_celsius = (newtemp_Fahrenheit - 32) * 5/9

console.log(`${newtemp_Fahrenheit } \u00B0 F is ${newtemp_celsius} \u00B0 C`)

// Age Calculator

const jeffdob = 1991
const randyear = 2070
let a1 = null
let a2 = null

a1 = randyear - jeffdob
a2 = a1 - 1

console.log(`I will be either ${a1} or ${a2} in ${randyear}`)

// Data Type Exercise
console.log(typeof 15)
// Prediction: Number
// Actual:  correct

console.log(typeof 5.5) 
// Prediction: Number
// Actual: correct

console.log(typeof NaN)
// Prediction: Number
// Actual: correct

console.log(typeof "hello")
// Prediction: String
// Actual: correct

console.log(typeof true)
// Prediction: Boolean
// Actual: correct

console.log(typeof 1 != 2)
// Prediction: true
// Actual:

console.log("hamburger" + "s")
// Prediction: string
// Actual: correct

console.log("hamburgers" - "s")
// Prediction: ? error
// Actual: 1/2 correct

console.log("1" + "3")
// Prediction: 12
// Actual: typo

console.log("1" - "3")
// Prediction: ? error
// Actual: I suck at maths

console.log("johnny" + 5)
// Prediction: johny5
// Actual: correct

console.log("johnny" - 5)
// Prediction: ? error
// Actual: 1/2 correct

console.log(99 * "luftbaloons")
// Prediction: NaN
// Actual: correct

console.log(5 + true)
// Prediction: ? error
// Actual: 6

console.log(5 + false)
// Prediction: ? error
// Actual: 5