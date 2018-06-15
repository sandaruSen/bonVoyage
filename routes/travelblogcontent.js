/**
 * Created by Sandaru on 5/19/2017.
 */
var express = require('express');
var blogs = require("../database/blog");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

    // var sample=new Array();

    blogs.find( {"checked":"no"} , function(err,blogs){

        if(err)
            console.log(err);
        console.log(blogs)
        res.render('travelBlogContent',{blogs: blogs});

    });


});
module.exports = router;
