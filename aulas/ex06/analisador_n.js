var numeros = []

function adicionar (){
    let item = document.createElement('option')
    let select = document.getElementById('tab')
    let n = document.getElementById('txtn')

    if (n.value.length == 0){
        alert('Digite um número')
    }
    if(n.value < 0 || n.value > 100){
        alert('Digite um número válido')
    }
    if(n.value.length > 0 && n.value <= 100){
        numeros.push(n.value)
        item.text = `Número adicionado ${numeros[0]}`
        select.append(item)
    }
}

function analisar(){
    let resultado = document.getElementById('res2')
    resultado.innerHTML = `A o todo temos ${numeros.length} numeros cadastrados`
}