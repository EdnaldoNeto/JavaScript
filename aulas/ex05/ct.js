var ini = document.getElementById('ini')
var fi = document.getElementById('fim')
var resultado = document.getElementById('res')



function contar()
{
    var inicio = Number(ini.value)
    var fim = Number(fi.value)
    var emoji =  String.fromCodePoint(0x1F974)

    if(inicio > fim){
        alert('digite números válidos')
    } else {
        while (inicio <= fim)
            {
                resultado.innerHTML = `${inicio}${emoji}<br>`
                inicio++
            }
    }
}