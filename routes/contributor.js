/**
 * Created by Sandaru on 5/19/2017.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('addContributor', { title: '' });
});
module.exports = router;
