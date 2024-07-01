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

        const name = document.createElement('h1');
        name.textContent = '! VIBEZ';
        name.classList.add('bio-name');
        document.body.appendChild(name);

        const sparkle = document.createElement('img');
        sparkle.src = 'sparkle.gif';
        sparkle.classList.add('sparkle');
        document.body.appendChild(sparkle);

        setTimeout(() => {
            overlay.remove();
        }, 500);
    });
});
