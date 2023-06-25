require('dotenv').config()
const express = require('express');
const app = express();

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

// Home Page
app.get('/', function(req, res) {
    res.render(`home`)
});

app.get('*', function(req, res){
    res.status(404).render('error404')
});

app.listen(process.env.PORT)