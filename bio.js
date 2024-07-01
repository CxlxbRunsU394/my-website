document.addEventListener('DOMContentLoaded', (event) => {
    const overlay = document.getElementById('overlay');
    const audio = document.getElementById('bga');
    
    overlay.addEventListener('click', () => {
        audio.play();
        overlay.classList.add('hide');
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 500); 
    });
});
