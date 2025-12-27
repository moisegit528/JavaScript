function carregar() {
var texto = document.querySelector('#texto')
var img = document.querySelector('#img')
var data = new Date()
var hora = data.getHours()
texto.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12){
    img.style.backgroundImage = "url('imagens/manhã.jpg')"
    document.body.style.background = '#e2cd9f'
}else if(hora >= 12 && hora <18){
    img.style.backgroundImage = "url('imagens/tarde.jpg')"
    document.body.style.background = '#b9846f'
}else{
    img.style.backgroundImage = "url('imagens/noite.jpg')"
    document.body.style.background = '#515154'
}
}