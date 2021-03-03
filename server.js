const express = require('express')
const { nerdvision } = require('@nerdvision/agent');
const app = express()
const port = 3000;

nerdvision.init('aa899dcebf837cf83f6c0e8bb5f65a3cc20cff73cd51f90c2a14beb7e19ecde66f2b92717f60b455177549c7045876bf1f6586d338c029029ddaf2bdfdca730a');


app.get('/sum/:num1/:num2', (req, res) => {
    const { num1, num2 } = req.params;

    res.send(`Sum is: ${num2 - num1}`);
});


app.get('/', (req, res) => {
    throw Error('asdasdas');
    res.send('Hello World!')
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});