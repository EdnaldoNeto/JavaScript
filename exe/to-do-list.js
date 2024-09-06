var button = document.getElementById('butt')
var novaTarefa = document.getElementById('res')
var verificar1 = document.getElementById('tarefa')
var paragrafo = document.createElement('p')
var quebra_linha = document.createElement('br')

function add()
{
    if(verificar1.value.length == 0)
    {
        alert("Digite a sua nova tarefa")
    } else {
        while (verificar1.value.length != 0)
        {
            paragrafo.append(verificar1.value)
            
            novaTarefa.appendChild(paragrafo)
            novaTarefa.appendChild(quebra_linha)

            verificar1.value = ''
        }
    }
}