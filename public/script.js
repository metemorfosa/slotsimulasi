let playerName = '';
function joinGame() {
    playerName = document.getElementById('playerName').value;
    fetch('/join', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: playerName })
})
.then(response => {
    if (!response.ok) throw new Error('Failed to join game');
    return response.json();
})
.then(data => console.log('Joined successfully:', data))
.catch(error => console.error('Error:', error));
    });
}
function spin() {
    document.getElementById('spinSound').play();
    fetch('/get-winner')
.then(response => {
    if (!response.ok) throw new Error('Failed to get winner');
    return response.json();
})
.then(data => {
    console.log('Winner data:', data);
})
.catch(error => console.error('Error:', error));
        });
}
