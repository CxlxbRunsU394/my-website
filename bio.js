document.addEventListener('DOMContentLoaded', (event) => {
    const overlay = document.getElementById('overlay');
    const audio = document.getElementById('bga');
    
    overlay.addEventListener('click', () => {
        audio.play();
        overlay.classList.add('hide');

        const dark = document.createElement('div');
        dark.classList.add('dark-overlay');
        document.body.appendChild(dark);

        const pfpic = document.createElement('img');
        pfpic.src = 'pfp.png';
        pfpic.classList.add('profile-pic');
        document.body.appendChild(pfpic);
    });
});
