//Horario atual do sistema
var agora = new Date() 
var hora = agora.getHours()

console.log(`São ${hora} horas`)

if (hora <= 5) {
    console.log('BOA MADRUGADA!')
} else if (hora < 12) {
    console.log('BOM DIA!')
} else if (hora <= 18) {
    console.log('BOA TARDE!')
} else if (hora <= 23) {
    console.log('BOA NOITE!')
}