//Fortune Teller Exercise
const jobTitle = "Programmer"
const geographicLocation = "Sydney"
const favouriteSport = "Volleyball"
const sideProject = "Running App."
console.log ("You will be a " + jobTitle + " in " + geographicLocation + " , playing " + favouriteSport + " while building a " + sideProject )
//Temperature Converter
const celsiusTemperature = 100
const fahrenheitTemperature = ((celsiusTemperature * 9/5) + 32)
console.log(`${celsiusTemperature}°C is ${fahrenheitTemperature}°F .`)
const fahrenheit2Temperature = 77
const celsius2Temperature = ((fahrenheit2Temperature - 32) *5/9)
console.log(`${fahrenheit2Temperature}°F is ${celsius2Temperature}°C .`)
//Age Calculator
const birthYear = 2001
const futureYear = 2010
const age1 = (futureYear - birthYear)
const age2 = ((futureYear - birthYear) - 1)
console.log("I will be either "+ age1 + " or " + age2 + " in " + futureYear)
//Data types

typeof 15
// Prediction: number
// Actual: number

typeof 5.5
// Prediction: number
// Actual: number

typeof NaN
// Prediction: number
// Actual: number

typeof "hello"
// Prediction: string
// Actual: string

typeof true
// Prediction: boolean
// Actual: boolean

typeof 1 != 2
// Prediction: false
// Actual: true

console.log("hamburger" + "s")
// Prediction: hamgburgers
// Actual: hamburgers

console.log("hamburgers" - "s")
// Prediction: hamburger
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
// Prediction: 99luftbaloons
// Actual: NaN

console.log(5 + true)
// Prediction: 5 true
// Actual: 6

console.log(5 + false)
// Prediction: 5 false
// Actual: 5