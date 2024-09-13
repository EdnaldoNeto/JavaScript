var vet = [1, 2, 4, 5, 8, 9]

/*for(let pos = 0; pos < vet.length; pos++){
    console.log(vet[pos])
}*/

//Forma simplificada 
for(let pos in vet) { // Para cada posição de em vet 
    console.log(vet[pos])
}