function carregar() {
    let msg = document.getElementById('msg');
    let img = document.getElementById('img');
    let data = new Date();
    let hora = data.getHours();

    msg.innerHTML = `<p>Agora são ${hora} horas.</p>`;
    if (hora >= 0 && hora < 12) {
        // Bom dia!
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde!
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        // Boa noite!
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#515154'
    }
}