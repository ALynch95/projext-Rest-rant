const router = require('express').Router();
const places = require('../models/places.js');

//GET /places
router.get('/', function(req, res) {
    res.render('places/index', { places })
})

//GET /places/new
router.get('/new', function(req, res) {
    res.render('places/new')
})

//GET /places/:id
router.get('/:id', function(req, res) {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        res.render('places/show', { place: places[id], id }
        )
    }
})

//POST /places
router.post('/', function(req, res) {

    if (!req.body.pic) {
        req.body.pic = 'https://placekitten.com/400/400'
    }
    if (!req.body.city) {
        req.body.city = 'Anytown'
    }
    if (!req.body.state) {
        req.body.state = 'USA'
    }

    places.push(req.body)
    res.redirect('/places')
})

//GET /places/:id/edit
router.get('/:id/edit', function(req, res) {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        res.render('places/edit', { place: places[id], id })
    }
})

//PUT /places/:id
router.put('/:id', function(req, res) {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        if (!req.body.pic) {
            req.body.pic = 'http://placekitten.com/400/400'
        }
        if (!req.body.city) {
            req.body.city = 'Anytown'
        }
        if (!req.body.state) {
            req.body.state = 'USA'
        }

        places[id] = req.body
        res.redirect(`/places/${id}`)
    }
})

//Delete /places/:id
router.delete('/:id', function(req, res) {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        places.splice(id, 1)
        res.redirect('/places')
    }
})

module.exports = router;