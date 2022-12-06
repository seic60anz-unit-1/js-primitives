// Fortune teller
const jobTitle = 'software engineer';
const myLocation = 'Sydney, NSW';
const favoriteSport = 'football';
const sideProject = 'a tree house';
console.log(`You will be a ${jobTitle} in ${myLocation}, playing ${favoriteSport} while building ${sideProject}.`)

// Temperature converter
const temperatureInCelcius = 56;
const CelciusToFahrenheit = (temperatureInCelcius * 9/5) + 32;
console.log(`${temperatureInCelcius}C is ${CelciusToFahrenheit}F.`);


const temperatureInFahrenheit = 78;
const FahrenheitToCelcius = (temperatureInFahrenheit - 32) * 5 /9;
console.log(`${temperatureInFahrenheit}F is ${FahrenheitToCelcius}C.`)

// Age calculator
const myBirthYear = 1993;
const randomYear = 2090;
console.log(`I will be either ${randomYear - myBirthYear} or ${randomYear - myBirthYear - 1} in ${randomYear}`);

// Data types
typeof 15
// prediction: number
// actual: number

typeof 5.5
// prediction: number
// actual: number

typeof 'hello'
// prediction: string
// actual: string

typeof true
// prediction: boolean
// actual: boolean

typeof (1 != 2)
// prediction: boolean
// actual: boolean

console.log("hamburger" + "s")
// Prediction: "hamburgers"
// Actual:  "humburgers"

console.log("hamburgers" - "s")
// Prediction: undefined
// Actual: NaN

console.log("1" + "3")
// Prediction: "13"
// Actual: "13"

console.log("1" - "3")
// Prediction: undefined
// Actual: NaN

console.log("johnny" + 5)
// Prediction: "johnny5"
// Actual: "johnny5"

console.log("johnny" - 5)
// Prediction: undefined
// Actual: NaN

console.log(99 * "luftbaloons")
// Prediction: NaN
// Actual:NaN

console.log(5 + true)
// Prediction: NaN
// Actual: 6

console.log(5 + false)
// Prediction: NaN
// Actual: 5