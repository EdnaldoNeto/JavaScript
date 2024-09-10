var n = window.document.getElementById('num')
var table = window.document.getElementById('res')
var but1 = document.getElementById('bt1')
var but2 = document.getElementById('bt2')
but2.disabled = true

function tab() 
{
    var i = 1
    var numero = n.value
    var but1 = document.getElementById('bt1')
    if(numero.length <= 0)
    {
        alert('Digite um número')
    } else {
        while(i <= 10)
        {
            var multi = (numero) * (i)
            table.innerHTML += `${numero} x ${i} = ${multi}<br>`
            i++
        }
        but1.disabled = true
        but2.disabled = false
    }
}

function clean()
{
    table.innerHTML = ''
    but1.disabled = false
    but2.disabled = true
}

