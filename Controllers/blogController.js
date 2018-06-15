
var express = require('express');
var Blog = require('../database/blog');

module.exports.getAllBlogs = function (next) {
    Blog.find( {"checked":"yes"} , function(err,blogs){
        if(err)
            console.log(err);
        console.log(blogs);
        next(blogs);

    });
};


this.getAllBlogs(function (val) {
    console.log(val);
});
