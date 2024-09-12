function tab() 
{
    var n = window.document.getElementById('num')
    var table = window.document.getElementById('res')
    var i = 1
    var numero = n.value
    if(numero.length <= 0)
    {
        alert('Digite um número')
    } else {
        table.innerHTML = 'Tabuada: <br>'
        while(i <= 10)
        {   
            var multi = (numero) * (i)
            table.innerHTML += `${numero} x ${i} = ${multi}<br>`
            i++
        }
    }
}