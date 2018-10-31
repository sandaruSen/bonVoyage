
var express = require('express');
var destination = require("../database/travelDestination");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

    // var sample=new Array();

    destination.find( {"category":"beaches"} , function(err,destinations){

        if(err)
            console.log(err);
        console.log(destinations)
         res.render('beaches',{destinations: destinations});

    });


});
module.exports = router;