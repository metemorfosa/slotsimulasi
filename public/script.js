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
   .then(response => response.text())  // Cek dulu teksnya
   .then(text => {
       console.log('Raw Response:', text);
       return JSON.parse(text);  // Ubah ke JSON kalau valid
   })
   .then(data => console.log('Parsed JSON:', data))
   .catch(error => console.error('Error:', error));
})
.then(data => {
    console.log('Winner data:', data);
})
.catch(error => console.error('Error:', error));
        });
}
