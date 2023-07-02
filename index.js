// Dependencies
require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');
const app = express();


//Express Settings
app.set('views, __dirname + /views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

//Routes
app.get('/', function(req, res) {
    res.render('home')
})

//Controllers & Routes
app.use('/places', require('./controllers/places.js'))

//404 Error
app.get('*', function(req, res) {
    res.render('error404')
})

//Listen for connections
app.listen(process.env.PORT)