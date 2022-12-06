const jobTitle = 'Programmer'
const geoLocate = 'Portugal'
const favouriteSport = 'Tennis'
const sideProject = 'Flying Car'
console.log(`You will be a ${jobTitle} in ${geoLocate}, playing ${favouriteSport} while building a ${sideProject}.`)

const celciusTemp = 10
const fTemp = ((celciusTemp * 9/5) + 32)
console.log(`${celciusTemp}°C is ${fTemp}°F`)

const f2Temp = 100
const c1Temp = (5/9 * (f2Temp - 32))
console.log(`${f2Temp}°F is ${c1Temp}°C`)


const birthYear = 1985
let futureYear = 2025
console.log(`I will be either ${futureYear-birthYear} or ${(futureYear-birthYear) -1} in ${futureYear}.`)

console.log(typeof 15)
// Prediction: number
// Actual: number

console.log(typeof 5.5)
// Prediction: number
// Actual:number

console.log(typeof NaN)
// Prediction: number
// Actual: number

console.log(typeof "hello")
// Prediction: string
// Actual: string

console.log(typeof true)
// Prediction: string
// Actual:boolean

console.log(typeof 1 != 2)
// Prediction: string
// Actual:true

console.log("hamburger" + "s")
// // Prediction:hamburgers
// // Actual:hamburgers

console.log("hamburgers" - "s")
// // Prediction:hamburger
// // Actual:NaN

console.log("1" + "3")
// // Prediction: 13
// // Actual:13

console.log("1" - "3")
// // Prediction: 1-3
// // Actual:-2

console.log("johnny" + 5)
// // Prediction: johnny5
// // Actual: johnny5

// console.log("johnny" - 5)
// // Prediction:johnny-5
// // Actual:NaN

console.log(99 * "luftbaloons")
// // Prediction:99*luftbaloons
// // Actual:NaN

console.log(5 + true)
// // Prediction:5
// // Actual:6

console.log(5 + false)
// // Prediction:5
// // Actual:5
