var express = require('express');
var Blog = require('../database/blog');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//     res.render('blogs', { title: 'Travel Blogs' });
// });

router.get('/', function(req, res, next) {

    Blog.find( {} , function(err,blogs){

        if(err)
            console.log(err);
        console.log(blogs)
        res.render('blogs',{blogs: blogs});

    });


});

module.exports = router;