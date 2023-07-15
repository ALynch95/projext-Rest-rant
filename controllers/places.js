const router = require('express').Router()
const db = require('../models')
const { rawListeners } = require('../models/places')

// GET /places
router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
        res.render('places/index', { places })
    })
    .catch(err => {
        console.log(err)
        res.render('error404')
    })
})

// POST /places
router.post('/', (req, res) => {
  db.Place.create(req.body)
    .then(() => {
        res.redirect('/places')
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})

// GET /places/new
router.get('/new', (req, res) => {
  res.render('places/new')
})

// GET /places/:id
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .populate('comments')
  .then(place => {
    console.log(place.comments)
    res.render('places/show', { place })
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

router.post('/:id/comment', (req, res) => {
  console.log(req.body)
  db.Place.findById(req.params.id)
  .then(place => {
      db.Comment.create(req.body)
      .then(comment => {
          place.comments.push(comment.id)
          place.save()
          .then(() => {
              res.redirect(`/places/${req.params.id}`)
          })
      })
      .catch(err => {
          res.render('error404')
      })
  })
  .catch(err => {
      res.render('error404')
  })
})



// PUT /places/:id
router.put('/:id', (req, res) => {
    db.Place.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
        res.redirect(`/places/${req.params.id}`)
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})


// DELETE /places/:id
router.delete('/:id', (req, res) => {
    db.Place.findByIdAndDelete(req.params.id)
    .then(place => {
        res.redirect('/places')
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
})


// GET /places/:id/edit
router.get('/:id/edit', (req, res) => {
    db.Place.findById(req.params.id)
    .then(place => {
        res.render('places/edit', { place })
    })
    .catch(err => {
        res.render('error404')
    })
})



// POST /places/:id/rant
router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

// DELETE /places/:id/rant/:rantId
router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router




// const router = require('express').Router();
// const places = require('../models/places.js');

// //GET /places
// router.get('/', function(req, res) {
//     res.render('places/index', { places })
// })

// //GET /places/new
// router.get('/new', function(req, res) {
//     res.render('places/new')
// })

// //GET /places/:id
// router.get('/:id', function(req, res) {
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//         res.render('error404')
//     }
//     else if (!places[id]) {
//         res.render('error404')
//     }
//     else {
//         res.render('places/show', { place: places[id], id }
//         )
//     }
// })

// //POST /places
// router.post('/', function(req, res) {

//     if (!req.body.pic) {
//         req.body.pic = 'https://placekitten.com/400/400'
//     }
//     if (!req.body.city) {
//         req.body.city = 'Any town'
//     }
//     if (!req.body.state) {
//         req.body.state = 'USA'
//     }

//     places.push(req.body)
//     res.redirect('/places')
// })

// //GET /places/:id/edit
// router.get('/:id/edit', function(req, res) {
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//         res.render('error404')
//     }
//     else if (!places[id]) {
//         res.render('error404')
//     }
//     else {
//         res.render('places/edit', { place: places[id], id })
//     }
// })

// //PUT /places/:id
// router.put('/:id', function(req, res) {
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//         res.render('error404')
//     }
//     else if (!places[id]) {
//         res.render('error404')
//     }
//     else {
//         if (!req.body.pic) {
//             req.body.pic = 'http://placekitten.com/400/400'
//         }
//         if (!req.body.city) {
//             req.body.city = 'Any town'
//         }
//         if (!req.body.state) {
//             req.body.state = 'USA'
//         }

//         places[id] = req.body
//         res.redirect(`/places/${id}`)
//     }
// })

// //Delete /places/:id
// router.delete('/:id', function(req, res) {
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//         res.render('error404')
//     }
//     else if (!places[id]) {
//         res.render('error404')
//     }
//     else {
//         places.splice(id, 1)
//         res.redirect('/places')
//     }
// })

// module.exports = router;