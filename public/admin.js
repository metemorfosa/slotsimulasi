function setWinner() {
    const playerName = prompt('Enter the winner name:');
    fetch('/set-winner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: playerName })
    });
}
