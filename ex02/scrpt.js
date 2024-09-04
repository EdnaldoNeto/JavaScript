function verification(){
    var date = new Date()
    ano = date.getFullYear()//A variavel esta armazenando o ano atual com os quatros digitos
    fano = document.getElementById('txtano')
    res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano){
        alert('Coloque um ano de nascimento valido')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')//Criando um elemento img na pag html
        img.setAttribute('id', 'foto')//Criando um id para o elemento img com o nome foto
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                //Criança
                img.setAttribute('src', 'imgs/bebe_homem.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imgs/jovem_homem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imgs/adulto_homem.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imgs/idoso_homem.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10){
                //Criança
                img.setAttribute('src', 'imgs/bebe_mulher.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imgs/jovem_mulher.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imgs/adulta_mulher.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imgs/idosa_mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Voce é ${genero}, tem a idade de ${idade} <br><br>`
        res.append(img)
    }
}