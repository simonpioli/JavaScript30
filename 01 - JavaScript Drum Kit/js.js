const playingClass = 'playing';

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    // Don't run if no key->sound set up
    if (!audio) {
        return;
    }
    audio.currentTime = 0; // Rewind to start
    audio.play();
    key.classList.add(playingClass);
}

function removeTransition(e) {
    // Skip if it's not a transform
    if (e.propertyName !== 'transform') {
        return;
    }

    this.classList.remove(playingClass);
}

window.addEventListener('keydown', playSound);

const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition)
});
