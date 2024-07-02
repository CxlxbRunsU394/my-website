document.addEventListener('DOMContentLoaded', (event) => {
    const overlay = document.getElementById('overlay');
    const video = document.getElementById('bgv');
    const videoOverlay = document.getElementById('video-lol');

    overlay.addEventListener('click', () => {
        overlay.classList.add('hide');
        video.classList.remove('hidden-video');
        videoOverlay.classList.remove('hidden-overlay');
        video.play();

        setTimeout(() => {
            overlay.remove();
        }, 500);
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
    notification.style.boxShadow = '0 0 50px #7c269c';
    notification.style.color = '#fff';
    notification.style.padding = '10px';
    notification.style.borderRadius = '5px';
    notification.style.zIndex = '1000';
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.remove();
    }, 3000);
}
