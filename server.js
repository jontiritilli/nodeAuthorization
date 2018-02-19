const express = require('express');
const PORT = process.env.PORT || 9000;
const cors = require('cors');

const app = express()

app.get('/', (req, res) => {
    console.log('reached endpoint')
    res.send('<h1>Empty</h1>')
})

app.listen(PORT, ()=> {
    console.log('the system is running on port:', PORT);
})