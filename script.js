//Question 1
const jobTitle = "Programmer"
const geoLocation = "Australia"
const favSport = "football"
const sideProj = "running a theatre"
console.log(`You will be a ${jobTitle} in ${geoLocation}, playing ${favSport} while ${sideProj}.`)

//Question 2

function CtoF(temp) {
    return (temp*9/5+32)
}
let celsius = 25
console.log(`${celsius}°C is ${CtoF(celsius)}°F.`)

function FtoC(temp) {
    return ((temp-32)*5/9)
}
let fahrenheit = 32
console.log(`${fahrenheit}°F is ${FtoC(fahrenheit)}°C.`)

//Question 3
function yearDiff(x,y) {
    return y-x
}
let birthYear = 2010
let futureYear = 3000
console.log(`I will be either ${yearDiff(birthYear,futureYear)-1} or ${yearDiff(birthYear,futureYear)} in ${futureYear}`)

//Question 4
console.log(typeof 15)
// Prediction: number
// Actual: number

console.log(typeof 5.5)
// Prediction: number
// Actual: number

console.log(typeof NaN)
// Prediction: 
// Actual: number

console.log(typeof "hello")
// Prediction: string
// Actual: string

console.log(typeof true)
// Prediction:
// Actual: boolean

console.log(typeof 1 != 2)
// Prediction:
// Actual: true

console.log("hamburger" + "s")
// Prediction: hamburgers
// Actual: hamburgers

console.log("hamburgers" - "s")
// Prediction: hamburgerss
// Actual: NaN

console.log("1" + "3")
// Prediction: 13
// Actual: 13

console.log("1" - "3")
// Prediction: NaN
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
// Prediction: 6
// Actual: 6

console.log(5 + false)
// Prediction: 5
// Actual: 5