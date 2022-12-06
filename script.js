const jobTitle = "Student"
const geographicLocation = "Sydney"
const favoriteSport = "Snowboarding"
const sideProject = "API integration"

console.log("You will be a " + jobTitle + "in " + geographicLocation + ", playing " + favoriteSport + " while building a " + sideProject + ".");

let celciusTemp = 35
let farTemp = 25

const celcius = (farTemp - 32) * 5/9
console.log(celcius)

const fahrenheit = (celciusTemp * 9/5) + 32
console.log(fahrenheit)

const birthYear = 1980
const futureYear = 2035

const ageOne = (futureYear - birthYear) -1
const ageTwo = (futureYear - birthYear)

console.log("I will be either " + ageOne + " or " + ageTwo + " in " + futureYear + ".")


typeof 15
// Prediction: number
// Actual:

typeof 5.5
// Prediction: number
// Actual:

typeof NaN
// Prediction: number
// Actual:

typeof "hello"
// Prediction: string
// Actual:

typeof true
// Prediction: boolean
// Actual:

typeof 1 != 2
// Prediction: number
// Actual:

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
// Actual:johnny5

console.log("johnny" - 5)
// Prediction: undefined
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
