
window.onload = () => {document.getElementById('start-button').onclick = () => {
    const backgroundMusic = new Audio('./audio/musicSound.wav')
    appBarrels.init();
    backgroundMusic.play();
    backgroundMusic.loop = true;
    startGame();
};
    // function startGame() {
    //     appBarrels.init()
    // }
};
