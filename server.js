const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

let winner = null;
let players = [];

app.post('/join', (req, res) => {
    const { name } = req.body;
    if (!players.includes(name)) {
        players.push(name);
    }
    res.json({ message: 'Player joined', players });
});

app.post('/set-winner', (req, res) => {
    winner = req.body.name;
    res.json({ message: `Winner set to ${winner}` });
});

app.get('/get-winner', (req, res) => {
    res.json({ winner });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
