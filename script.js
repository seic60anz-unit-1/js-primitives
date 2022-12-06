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
