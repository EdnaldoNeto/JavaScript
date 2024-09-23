function randomN(num){
    let max = 100
    let min = 1
    number = Math.floor(Math.random() * (max - min + 1) + min)

    if(number === num){
        console.log('VOCÊ ACERTOU.... PARABÈNS')
    } else {
        console.log('VOCÊ ERROU')
    }

    console.log(`O número aleatório foi ${number} e você escolheu o número ${num}`)
}

console.log(randomN(17))