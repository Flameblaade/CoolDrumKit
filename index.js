function playSound (e) {
    const letter = (e.key || e.target.innerText).toLowerCase();

    const audio = document.querySelector(`audio[data-key="${letter}"]`);
    const key = document.querySelector(`.key[data-key="${letter}"]`);

    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();

}

function removeTransition (e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}



window.addEventListener('keydown', playSound);

const keys = document.querySelectorAll('.key');
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));

keys.forEach ((key) =>
    key.addEventListener('click', () => {
        const letter = key.getAttribute('data-key');
        const audio = document.querySelector(`audio[data-key="${letter}"]`);
        
        if (!audio) return;
        
        key.classList.add('playing');
        audio.currentTime = 0;
        audio.play();
    })
);z

