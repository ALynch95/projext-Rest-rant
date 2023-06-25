const router = require('express').Router()

router.get('/', function(req, res) {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/curry.jpg'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/pancake-stack.jpg' 
    }]
    res.render('places/index', {places})
});

router.get('/new', function(req, res) {
    res.render('places/new')
});

router.post('/', function (req, res) {
    console.log(req.body)
    res.send('POST /places')
})

module.exports = router