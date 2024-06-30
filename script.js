const menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

document.querySelector('#contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const fullName = document.querySelector('#full-name').value;
    const discordUsername = document.querySelector('#discord-username').value;
    const email = document.querySelector('#email').value;
    const subject = document.querySelector('#subject').value;
    const message = document.querySelector('#message').value;
    const web = 'https://discord.com/api/webhooks/1256811882619080734/BJDdphdibVHPmCSMvSLQOZZlcSy0FrU6BEQ47W12QzAoPhJ8OLKuHkfKrJb7GlOLJBx6';

    const last = localStorage.getItem('lastSubmission');
    const now = new Date();
    if (last) {
        const lastD = new Date(last);
        const check = (now - lastD) / (1000 * 60 * 60 * 24);
        if (check < 2) {
            alert('Wait 2 Days To Send.');
            return;
        }
    }

    sendlol(fullName, discordUsername, email, subject, message, web);

    localStorage.setItem('lastSubmission', now.toISOString());
});

function sendlol(fullName, discordUsername, email, subject, message, web) {
    const payload = {
        content: null,
        embeds: [
            {
                title: subject,
                description: message,
                fields: [
                    {
                        name: 'Full Name',
                        value: fullName
                    },
                    {
                        name: 'Discord Username',
                        value: discordUsername
                    },
                    {
                        name: 'Email',
                        value: email
                    }
                ],
                color: 7506394,
            }
        ]
    };

    fetch(web, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => {
        if (response.ok) {
            alert('Message Has Been Sent.');
        } else {
            alert('Error Sending Message.');
        }
    }).catch(error => {
        console.error('Error:', error);
        alert('Error Sending Message.');
    });
}
