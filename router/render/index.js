const router = require('express').Router()
/* GET home page. */
require('./user')(router)
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router