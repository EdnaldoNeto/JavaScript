var n = window.document.getElementById('num')
var table = window.document.getElementById('res')


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
    }
}

