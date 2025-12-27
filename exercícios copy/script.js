function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#ano')
    var res = document.querySelector('#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var sexo = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(sexo[0].checked){
            genero = 'Homem'
            if(idade < 10){
                 window.alert('[ERRO] Verifique os dados e tente novamente!')
            }else if(idade > 10 && idade < 21){
                img.setAttribute('src', 'jovem.jpg')
            }else if (idade < 50){
                img.setAttribute('src', 'senhor.jpg')
            }
        }else if(sexo[1].checked){
            genero = 'Mulher'
            if(idade >= 10 && idade < 21){
                img.setAttribute('src', 'jovem-mulher.jpg')
            }else if(idade < 50){
                img.setAttribute('src', 'adulta.jpg')
            }else{
                img.setAttribute('src', 'senhora.jpg')
            }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
    }
}