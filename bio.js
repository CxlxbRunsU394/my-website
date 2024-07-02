document.addEventListener('DOMContentLoaded', (event) => {
    const overlay = document.getElementById('overlay');
    const video = document.getElementById('bgv');
    const videoOverlay = document.getElementById('video-lol');
    const profilePic = document.getElementById('pfp');
    let toggle = false;
    let switchm = true;

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
        if (switchm) {
            toggle = !toggle;
            if (toggle) {
                video.src = "https://cdn.xoa.me/uploads/8ace57a7-6cb1-4b6e-bf55-ab5f0679b2fc.mp4";
                document.documentElement.style.setProperty('--main-color', '#ffffff');
                document.querySelector('.bio-card').style.backgroundColor = 'rgba(255,255,255,0.15)';
                setTimeout(() => {
                    document.documentElement.style.setProperty('--main-color', '#0f0');
                    document.querySelector('.bio-card').style.color = '#0f0';
                    document.querySelector('.bio-card').style.backgroundColor = 'rgba(255,255,255,0.15)';
                    document.querySelector('.bio-card').style.animation = 'perc 3s linear infinite'; 
                }, 11400);
            } else {
                video.src = "https://cdn.xoa.me/uploads/e241ad16-72a0-41f1-9568-d63a4ca3045c.mp4";
                document.documentElement.style.setProperty('--main-color', '#7c269c');
                document.querySelector('.bio-card').style.color = '#000';
                document.querySelector('.bio-card').style.animation = 'none';
            }
            video.play();
    
            switchm = false;
            setTimeout(() => {
                switchm = true;
            }, 2500);
        }
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
let title = base;

function changeT() {
    let direction = 1;
    let index = 0;

    setInterval(() => {
        if (direction === 1) {
            index++;

            if (index > base.length - 1) { 
                direction = -1;
                index = base.length - 1;
            }
        } else {
            index--;

            if (index === 0) {
                direction = 1;
            }
        }

        title = base.slice(0, index + 1); 
        document.title = title;
    }, 350);
}

changeT();
