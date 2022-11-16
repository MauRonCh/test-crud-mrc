const express = require('express');

const port = 9000;
const app = express();

app.get('/profile', (request, response) => {
    response.json({
        name: 'Mauricio',
        age: 21,
        country: 'Peru'
    })
})

app.post('/ejemplo', (request, response) => {
    response.json([
        'Turing',
        'Buk',
        'RPA Latam'
    ])
})

app.patch('/ejemplo', (request, response) => {
    response.json([
        'Edición de videos',
        'Jugar videojuegos',
        'Youtuber'
    ])
})


app.listen(port, (request, response) => {
    console.log(`Server initialized in port ${port}`)
})