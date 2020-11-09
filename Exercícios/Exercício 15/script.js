function verificar() {
    var data = new Date() 
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number (fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        if (fsex[0].checked){
            gênero = "Homem"
            if (idade >=0 && idade <= 1){
                img.src = 'feto.jpg'
            }
            else if (idade >= 2 && idade <= 10){
                //Criança
                img.src = 'foto-bebe-m.png'
            }else if (idade <= 21){
                //Jovem
                img.src = 'foto-jovem-m.png'
            }else if (idade <= 50){
                //Adulto
                img.src = 'foto-adulto-m.png'
            }else if (idade <= 99){ 
                //Idoso
                img.src = 'foto-idoso-m.png'
            }else if(idade <= 200){
                //Caveira
                img.src = 'foto-caveira-u.png'
            }else{
                //cinzas
                img.src = "cinzas.png"
            }
        
        }else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade <= 1){
                img.src = 'feto.jpg'
            }
            else if (idade >= 2 && idade <= 10){
                //Criança
                img.src = 'foto-bebe-f.png'
            }else if (idade <= 21){
                //Jovem
                img.src = 'foto-jovem-f.png'
            }else if (idade <= 50){
                //Adulto
                img.src = 'foto-adulto-f.png'
            }else if (idade <= 99){ 
                //Idoso
                img.src = 'foto-idoso-f.png'
            }else if(idade <= 200){
                //Caveira
                img.src = 'foto-caveira-u.png'
            }else{
                //cinzas
                img.src = "cinzas.png"
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é ${gênero} e tem ${idade} anos.`
        res.appendChild(img)
    }
}