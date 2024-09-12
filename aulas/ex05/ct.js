function contar()
{
    var ini = document.getElementById('ini')
    var fi = document.getElementById('fim')
    var pss = document.getElementById('pss')
    var resultado = document.getElementById('res')

    if(ini.value.length == 0 || fi.value.length == 0 || pss.value.lenght == 0) {
        alert('Faltam dados')
    } else {
        resultado.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fi.value)
        let p = Number(pss.value)
        if (p == 0)
        {
            alert('Passo inválido! Considerando passo 1')
            p = 1
        }
        if (i < f)
        {
            for (let c = i; c <= f; c += p) {
                resultado.innerHTML += ` ${c} \u{1f449}`
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                resultado.innerHTML += ` ${c} \u{1f449}`
            }
        }
        resultado.innerHTML += `\u{1f3c1}`
    }
}