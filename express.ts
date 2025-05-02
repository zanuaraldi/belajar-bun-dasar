import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/doc', (req, res) => {
    res.send('Masuk bro');
})

app.listen(3000, () => {
    console.info('Server is running on https://localhost:3000')
});