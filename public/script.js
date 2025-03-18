let playerName = '';
function joinGame() {
    playerName = document.getElementById('playerName').value;
    fetch('/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: playerName })
    });
}
function spin() {
    document.getElementById('spinSound').play();
    fetch('/get-winner')
        .then(response => response.json())
        .then(data => {
            let resultText = 'You lost!';
            if (data.winner === playerName) {
                document.getElementById('winSound').play();
                resultText = 'You won!';
            }
            document.getElementById('result').innerText = resultText;
        });
}
