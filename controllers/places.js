const router = require('express').Router()

router.get('/', function(req, res){
    res.send('GET /places')
});

module.exports = router