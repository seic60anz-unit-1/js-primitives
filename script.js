const profName = 'Programer'
const geoLocation = 'Portugal'
const favSport = 'Tenis'
const sidProject = 'Flying Car'

console.log(`you will be ${profName} in ${geoLocation} playing ${favSport} while building a ${sidProject} `)

// temperature converter
const tpCelsius = 35
console.log(` ${tpCelsius} °C is ${tpCelsius} °F .                          `)

//age calculator
const BirthYear = 1987
const FutureYear = 2027
const Age = (FutureYear - BirthYear)
console.log(` I will be either ${Age} or ${Age -1} in 2027`)


//datatype

typeof 15
// Prediction: number
// Actual: string

typeof 5.5
// Prediction: number
// Actual: null

typeof NaN
// Prediction: null
// Actual: number

typeof "hello"
// Prediction: string
// Actual: null

typeof true
// Prediction: boolean
// Actual: boolean

console.log (typeof 1 != 2)
// Prediction: boolean
// Actual: boolean

console.log("hamburger" + "s")
// Prediction:  string
// Actual: string

console.log("hamburgers" - "s")
// Prediction: string
// Actual:  Nan

console.log("1" + "3")
// Prediction: string
// Actual: string

console.log("1" - "3")
// Prediction: string
// Actual: NaN

console.log("johnny" + 5)
// Prediction: undefined
// Actual: string

console.log("johnny" - 5)
// Prediction: undefined
// Actual: NaN

console.log(99 * "luftbaloons")
// Prediction: undefined
// Actual: NaN

console.log(5 + true)
// Prediction: number
// Actual: string

console.log(5 + false)
// Prediction: string
// Actual: string
