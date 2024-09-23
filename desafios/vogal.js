function vogal(str){
    let contadorDeVogais = 0
    let str2 = str.toLowerCase()
    let vogais = ['a', 'e', 'i', 'o', 'u']

    for(let char of str2){
        if(vogais.includes(char))
            contadorDeVogais++
    }
    console.log(contadorDeVogais)
}

vogal("bEbE")
