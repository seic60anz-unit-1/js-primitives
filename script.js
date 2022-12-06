// Fortune Teller
const jobTitle = 'Data Engineer';
const geographicLocation= 'Sydney';
const favouriteSport = 'Football';
const sideProject = 'writing a novel';

//"You will be a Programmer in Portugal, playing Tennis while building a Flying Car."
console.log(`You will be a ${jobTitle} in ${geographicLocation}, playing ${favouriteSport} while ${sideProject}.`)
//Done

// Temperature Converter
let Celsius1 = 24;
let Fahrenheit1 = 46;
let Celsius2 = Fahrenheit1-32;
let Fahrenheit2 = Celsius1+32;
//"__°C is __°F". and "__°F is __°C".

console.log(`${Celsius1}°C is ${Fahrenheit2}°F".`)
console.log(`${Fahrenheit1}°F is ${Celsius2}°C".`)

// Age Calculator
//"I will be either __ or __ in YYYY".
let birthYear = 1992;
let futureYear = 2022;

console.log(`I will be either ${futureYear-birthYear-1} or ${futureYear-birthYear} in ${futureYear}`)

// Data Types
console.log(typeof 15)
// Prediction: number
// Actual: number

console.log(typeof 5.5)
// Prediction: number
// Actual: number

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
// Prediction: undefined
// Actual: NaN

console.log("1" + "3")
// Prediction: 13
// Actual: 13

console.log("1" - "3")
// Prediction: undefined
// Actual: -2

console.log("johnny" + 5)
// Prediction: johnny5
// Actual: johnny5

console.log("johnny" - 5)
// Prediction: undefined
// Actual: NaN

console.log(99 * "luftbaloons")
// Prediction: undefined
// Actual: NaN

console.log(5 + true)
// Prediction: undefined
// Actual: 6

console.log(5 + false)
// Prediction: undefined
// Actual: 5