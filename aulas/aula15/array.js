var vet = [1, 2, 4, 5, 8, 9]

/*for(let pos = 0; pos < vet.length; pos++){
    console.log(vet[pos])
}*/

console.log(vet.indexOf(8)) //Vai retornar a posição do 8 no array - caso não tenha o 8 no array, vai retornar -1

//Forma simplificada 
for(let pos in vet) { // Para cada posição de em vet 
    console.log(vet[pos])
}