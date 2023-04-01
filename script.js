document.body.addEventListener('keyup', (event) => {
    playSound(event.code.toLowerCase())
});

function playSound(sound) {
    let audioElement = document.getElementById(`s_${sound}`);

    let keyElement = document.querySelector(`div[data-key="${sound}"]`)

    if (audioElement) {
        audioElement.currentTime = 0;
        audioElement.play()
            ;
    }

    if (keyElement) {
        keyElement.classList.add('active');


        setTimeout(() => {
            keyElement.classList.remove('active');
        }, 300);

    }
}

document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.getElementById('input').value;
    if (song !== '') {
        let songArray = song.split('');
        playComposition(songArray);
    }
});


function playComposition(songArray) {
    let wait = 0

    for (let songItem of songArray) {
        setTimeout(() => {
            playSound(`key${songItem}`);
        }, wait);
        wait += 250;

    }
}

// Adicionar evento de clique para cada div de tecla
document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', () => {
        const sound = key.getAttribute('data-key');
        playSound(sound);
    });
});

// Adicionar evento de toque para dispositivos móveis
document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('touchstart', () => {
        const sound = key.getAttribute('data-key');
        playSound(sound);
    });
});

