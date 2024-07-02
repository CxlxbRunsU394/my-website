document.addEventListener('DOMContentLoaded', (event) => {
    const overlay = document.getElementById('overlay');
    const video = document.getElementById('bgv');
    const videoOverlay = document.getElementById('video-lol');
    const profilePic = document.getElementById('pfp');
    let toggle = false;

    overlay.addEventListener('click', () => {
        overlay.classList.add('hide');
        video.classList.remove('hidden');
        videoOverlay.classList.remove('hidden-o');
        video.play();

        setTimeout(() => {
            overlay.remove();
            snowlol();
        }, 500);
    });

    profilePic.addEventListener('click', () => {
        toggle = !toggle;
        if (toggle) {
            video.src = "https://cdn.xoa.me/uploads/8ace57a7-6cb1-4b6e-bf55-ab5f0679b2fc.mp4";
            document.documentElement.style.setProperty('--main-color', 'rgba(255, 255, 255, 1)');
            document.querySelector('.bio-card').style.backgroundColor = 'rgb(143 143 143 / 20%)';
        } else {
            video.src = "https://cdn.xoa.me/uploads/e241ad16-72a0-41f1-9568-d63a4ca3045c.mp4";
            document.documentElement.style.setProperty('--main-color', '#7c269c');
            document.querySelector('.bio-card').style.backgroundColor = 'rgba(110, 55, 138, 0.2)';
        }
        video.play();
    });    
});

function clipB(text) {
    navigator.clipboard.writeText(text).then(function() {
        showNotification("Cashapp copied to clipboard");
    }, function() {
        showNotification("Failed to copy");
    });
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.position = 'fixed';
    notification.style.top = '25px';
    notification.style.right = '25px';
    notification.style.backgroundColor = '#000';
    notification.style.boxShadow = '0 0 50px var(--main-color)';
    notification.style.color = '#fff';
    notification.style.padding = '10px';
    notification.style.borderRadius = '5px';
    notification.style.zIndex = '1000';
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function snowlol() {
    const snowContainer = document.createElement('div');
    snowContainer.classList.add('snow-c');
    document.body.appendChild(snowContainer);

    function createS() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('star');
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${5 + Math.random() * 5}s`;
        snowflake.style.opacity = Math.random();
        snowflake.style.animationDelay = `${Math.random() * 5}s`;
        snowContainer.appendChild(snowflake);

        setTimeout(() => {
            snowflake.remove();
        }, parseFloat(snowflake.style.animationDuration) * 2000);
    }

    for (let i = 0; i < 50; i++) {
        createS();
    }

    setInterval(createS, 300);
}

let base = "@Cxlxb";
let title = "@";


function changeT() {
    let direction = 1; 
    let index = 0;

    setInterval(() => {
        if (direction === 1) {
            title = base.slice(0, index);
            index++;

            if (index > base.length) {
                direction = -1;
                index = base.length - 1;
            }
        } else {
            title = base.slice(0, index);
            index--;

            if (index === 0) {
                direction = 1;
            }
        }

        document.title = title;
    }, 350);
}

changeT();
