var numeros = []
let resultado = document.getElementById('res2')
function adicionar (){
    let item = document.createElement('option')
    let select = document.getElementById('tab')
    let n = document.getElementById('txtn')
    let num = Number(n.value)
    resultado.innerHTML = ''
    if (num == 0){
        alert('Digite um número')
    }
    if(num > 100){
        alert('Digite um número válido')
    }
    if(numeros.includes(num) == true){
        alert('Esse número ja foi cadastrado, tente outro')
    }
    if(num > 0 && num <= 100 && numeros.includes(num) == false){
        numeros.push(num) // Adicionando elemento no array
        item.text = `Número adicionado ${num}`
        select.append(item)
        numeros.sort(function (a, b) { return a - b}) // Faz com que o array seja ordenado de forma crescente
    }
}
function analisar(){
    //let ultimoElemento = numeros[-1]
    resultado.innerHTML += `A o todo temos ${numeros.length} numeros cadastrados<br>`
    resultado.innerHTML += `O maior valor informado foi ${numeros[numeros.length - 1]}<br>` // obtendo o valor do ultimo elemento do array
    resultado.innerHTML += `O menor valor informado foi ${numeros[0]}<br>`
}