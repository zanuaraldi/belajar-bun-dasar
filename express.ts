import express from "express";

const app = express();

app.get('/', (req, res) => {
    const name = req.query['name'] || "World"
    res.send(`Hello ${name}!`);
})

app.get('/doc', (req, res) => {
    res.send('Masuk bro');
})

app.listen(3000, () => {
    console.info('Server is running on https://localhost:3000')
});