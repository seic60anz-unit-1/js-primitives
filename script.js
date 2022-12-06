console.log('Hello World')

// Fortune Teller 
const jobTitle = "Programmer"
const geographicLocation = "Sydney"
const faveSport = "Soccer" 
const sideProject = "NFP Business"
console.log(`I am a ${jobTitle} based in ${geographicLocation} and I like ${faveSport} as well as building my ${sideProject}.`)

// Temprature Converter
// const sydneyWeather = 20
// console.log("20°C is 68°F")
// console.log(`${sydneyWeather} degrees Celcius is 68 degrees Fahrenheit.`)

const cTemp = 20
const cToFahr = cTemp * 9 / 5 + 32 
console.log(`${cTemp}°C is ${cToFahr}°F.`)
// const message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
// console.log(message) - alternative way

const fTemp = 68
const fToCel = (fTemp - 32) * 5 / 9 
console.log(`${fTemp}°F is ${fToCel}°C.`)
// const message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
// console.log(message) - alternative way
 
// Age Calculator 
const birthYear = 2000
const futureYear = 2034
const age1 = (futureYear - birthYear)
const age2 = ((futureYear - birthYear) - 1)
const calcAge = futureYear - birthYear
console.log("I will be either "+ age1 + " or " + age2 + " in " + futureYear)

// Data Types 

typeof 15
// Prediction: Number
// Actual: number

typeof 5.5
// Prediction: Number
// Actual: number

typeof NaN
// Prediction: 
// Actual: number

typeof "hello"
// Prediction: string 
// Actual: string 

typeof true
// Prediction: boolean
// Actual: boolean 

typeof 1 != 2
// Prediction:
// Actual: true

console.log("hamburger" + "s")
// Prediction: hambruger s 
// Actual: hamburgers

console.log("hamburgers" - "s")
// Prediction: hamburger 
// Actual: NaN

console.log("1" + "3")
// Prediction: 1 3 
// Actual: 13

console.log("1" - "3")
// Prediction: 1 3
// Actual: -2

console.log("johnny" + 5)
// Prediction: johnny 5
// Actual: johnny5

console.log("johnny" - 5)
// Prediction: johnny 
// Actual:NaN

console.log(99 * "luftbaloons")
// Prediction: luftbaloons 
// Actual: NaN

console.log(5 + true)
// Prediction: 5 true
// Actual: 6

console.log(5 + false)
// Prediction: 5 false
// Actual: 5
