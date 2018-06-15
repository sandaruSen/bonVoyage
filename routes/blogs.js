var express = require('express');
var Blog = require('../database/blog');
var router = express.Router();

var blgCtrl = require('../Controllers/blogController');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//     res.render('blogs', { title: 'Travel Blogs' });
// });

router.get('/', function(req, res, next) {

    blgCtrl.getAllBlogs(function (val) {
        console.log("blogs are blog js :" + val);
        res.render('blogs',{blogs: val});
    });



});

module.exports = router;