const express = require('express');
const PORT = process.env.PORT || 9000;
const mongoose = require('mongoose');
const cors = require('cors');
const {db_connect} = require('./config');
const authRoutes = require('./routes/auth');

const app = express();

mongoose.connect(db_connect).then(()=> {
    console.log('database is connected');
}).catch(err=> {
    console.log('error connecting to the database', err.message);
})

app.use(cors());
app.use(express.json());

authRoutes(app);

app.get('/', (req, res) => {
    res.send('<h1>The end is nigh\'</h1>')
})


app.listen(PORT, ()=> {
    console.log('the system is running on port:', PORT);
})