var date = new Date
var minute = date.getMinutes()

console.log(`${minute}`)

if (minute % 2 == 0){
    console.log('O minuto é par')
} else {
    console.log('O minuto é impar')
}