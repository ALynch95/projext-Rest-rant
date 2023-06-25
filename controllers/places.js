const router = require('express').Router()
const places = require('../models/places')

router.get('/', function(req, res) {
    // let places = [{
    //     name: 'H-Thai-ML',
    //     city: 'Seattle',
    //     state: 'WA',
    //     cuisines: 'Thai, Pan-Asian',
    //     pic: '/images/curry.jpg'
    // }, {
    //     name: 'Coding Cat Cafe',
    //     city: 'Phoenix',
    //     state: 'AZ',
    //     cuisines: 'Coffee, Bakery',
    //     pic: '/images/pancake-stack.jpg' 
    // }]
    res.render('places/index', {places})
});

router.get('/new', function(req, res) {
    res.render('places/new')
});

router.post('/', function (req, res) {
    if (!req.body.pic) {
        // Default image if one is not provided
        req.body.pic = "http://placekitten.com/400/400"
    }
    if (!req.body.city) {
        req.body.city = 'Any town'
    }
    if (!req.body.state) {
        req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
})

module.exports = router