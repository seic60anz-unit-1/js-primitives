// FORTUNE TELLER

const jobTitle = "Software Engineer"
const geoLocation = "Australia"
const favSport = "Pool"
const sideProject = "Multipler Game"

console.log(`You will be a ${jobTitle} in ${geoLocation}, playing ${favSport} while building a ${sideProject}.`)

// --------------------------------------------------------
// TEMPERATURE CONVERTER

// celcius to farenheit
let tempCelcius = 25
let tempFarenheit = (tempCelcius * 1.8) + 32
console.log(`${tempCelcius}°C is ${tempFarenheit}°F.`)

// farenheit to celcius
tempFarenheit = 90
tempCelcius = (tempFarenheit - 32) * (5 / 9)
console.log(`${tempFarenheit}°F is ${tempCelcius.toFixed(2)}°C.`)

// --------------------------------------------------------
// AGE CALCULATOR

const birthYear = 2001
const futureYear = 2045
const age = futureYear - birthYear

console.log(`I will be either ${age - 1} or ${age} in ${futureYear}.`)

// --------------------------------------------------------
// DATA TYPES

console.log(typeof 15)
// Prediction: number
// Actual: number

console.log(typeof 5.5)
// Prediction: number
// Actual: 

console.log(typeof NaN)
// Prediction: number
// Actual: number

console.log(typeof "hello")
// Prediction: string
// Actual: string

console.log(typeof true)
// Prediction: boolean
// Actual: boolean

console.log(typeof 1 != 2)
// Prediction: boolean
// Actual: true

console.log("hamburger" + "s")
// Prediction: hamburgers
// Actual: hamburgers

console.log("hamburgers" - "s")
// Prediction: NaN
// Actual: NaN

console.log("1" + "3")
// Prediction: 13
// Actual: 13

console.log("1" - "3")
// Prediction: -2
// Actual: -2

console.log("johnny" + 5)
// Prediction: johnny5
// Actual: johnny5

console.log("johnny" - 5)
// Prediction: NaN
// Actual: NaN

console.log(99 * "luftbaloons")
// Prediction: NaN
// Actual: NaN

console.log(5 + true)
// Prediction: NaN
// Actual: 6

console.log(5 + false)
// Prediction: NaN
// Actual: 5

// --------------------------------------------------------
// BONUS

const radius = 5
const circumference = 2 * Math.PI * radius
const area = Math.PI * (radius ** 2)

console.log(`A circle of radius 5 has a circumferemce of ${circumference.toFixed(2)} and an area of ${area.toFixed(2)}`)