const express = require('express');
const app = express();

//creating routs
app.get('/', (req, res) =>{
    res.send('we are home');
})
app.listen(3000)
