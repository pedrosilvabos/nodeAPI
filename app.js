const express = require('express');
const app = express();

//creating routs
app.get('/', (req, res) =>{
    res.send('we are home');
})
app.get('/route1', (req, res) =>{
    res.send('we are home');
})
app.listen(process.env.PORT || 3000)
