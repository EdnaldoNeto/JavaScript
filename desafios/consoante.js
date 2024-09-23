function consoante(str){
    let contadorConso = 0
    let str2 = str.toLowerCase()
    let vogal = ['a', 'e', 'i', 'o', 'u']

    for(let conso of str2){
        if(!vogal.includes(conso)){
            contadorConso++
        }
    }
    console.log(contadorConso)
}
consoante('ednaldo')