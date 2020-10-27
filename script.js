function load() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('image')
    var data = new Date();
    var hour = data.getHours();
    //var hour = 

    if (hour == 1) {

    }

    if (hour >= 0 && hour < 12) {
        // bom dia ! 
        img.src = 'dia.png'
        document.body.style.background = '#ffa300'
        msg.innerHTML = `Bom dia! Agora são ${hour} horas.`
    }
    else if (hour >= 12 && hour <= 18) {
        // boa tarde !
        img.src = 'tarde.png'
        document.body.style.background = '#bcd4ee'
        msg.innerHTML = `Boa tarde! Agora são ${hour} horas.`
    }
    else {
        //boa noite
        msg.innerHTML = `Boa noite! Agora são ${hour} horas.`
        img.src = 'noite.png'
        document.body.style.background = '#48385c'
    }
}
