const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {

    let response = {data: []};

    for (let i = 1; i <= 10; i++) {
        response.data.push({
            id: i,
            name: `Post ${i}`
        })
    }

    return res.status(200).json(response);
});

app.post('/', (req, res) => {
    return res.status(200).json({
        data: req.body
    });
});

app.listen(9000, () => console.log('Started listen on port 9000'));