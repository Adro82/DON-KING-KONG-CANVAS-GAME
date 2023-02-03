
window.onload = () => {
    document.getElementById('easy-button').onclick = () => {
    const backgroundMusic = new Audio('./audio/musicSound.wav')
    appBarrels.init();
    backgroundMusic.play();
    backgroundMusic.loop = true;
    startGame();
};
    document.getElementById('hard-button').onclick = () => {
        const backgroundMusic = new Audio('./audio/musicSound.wav')
        appBarrels2.init();
        backgroundMusic.play();
        backgroundMusic.loop = true;
    };
};
