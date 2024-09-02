//window.onload = load //quando a janela carregar a função load sera executada
function load() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date //obtém a hora e data atual do sistema
    var hora = data.getHours() //Extraindo a hora atual 
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 4 && hora <= 12) {
        //Bom dia
        img.src = 'img/manha.png' //Definindo a imagem da div #imagem
        document.body.style.background = '#CF9879' //Definindo a cor de fundo do 'body'
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde
        img.src = 'img/tarde.png'
        document.body.style.background = '#7F9EBD'
    } else {
        //Boa noite
        img.src = 'img/noite.png'
        document.body.style.background = '#071B1A'
    }
}