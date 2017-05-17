var express = require('express');
var Blog = require('../database/blog');
var router = express.Router();

router.post('/', function(req, res, next) {
    console.log(req.body);
    var t = new Blog();
    t.name=req.body.hotelName.toLowerCase();
    t.email=req.body.email.toLowerCase();
    t.description=req.body.description;
    t.approved="no";
    t.save();
    res.render('index', { title: '' });
});



module.exports = router;