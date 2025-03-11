function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('ano')
    let res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let sexo = document.getElementsByName('sexo')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'img')

        //Início.
        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/bebe-m.jpg')
            } else if (idade < 21) {
                //Jovem.
                img.setAttribute('src', 'imagens/jovem-m.jpg')
            } else if (idade < 50) {
                //Adulto.
                img.setAttribute('src', 'imagens/adulto-m.jpg')
            } else {
                //Idoso.
                img.setAttribute('src', 'imagens/idoso-m.jpg')
            }

        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/bebe-f.jpg')
            } else if (idade < 21) {
                //Jovem.
                img.setAttribute('src', 'imagens/jovem-f.jpg')
            } else if (idade < 50) {
                //Adulto.
                img.setAttribute('src', 'imagens/adulto-f.jpg')
            } else {
                //Idoso.
                img.setAttribute('src', 'imagens/idoso-f.jpg')
            }
        }
        //Fim.

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}