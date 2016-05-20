var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/test', function(req, res, next) {
    res.send('it worked!');
});


router.post('/nir', function(req, res, next) {
    res.send(req.body.name);
});

module.exports = router;
