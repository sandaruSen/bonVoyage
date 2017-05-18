/**
 * Created by Sandaru on 5/18/2017.
 */

var express = require('express');
var destination = require("../database/travelDestination");
var h = require("../database/hotels");
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {

    var district=req.body.district.toLowerCase();
    console.log(req.body);

    destination.find( {"district":district} , function(err,destinations){

        if(err)
            console.log(err);
        console.log(destinations)
        //res.render('allDestination',{destinations: destinations});

        h.find( {"district":district} , function(err,hotels){
            console.log(district);
            if(err)
                console.log(err);
            console.log("Hotels are : "+hotels)
            res.render('allDestination', {destinations: destinations , hotels:hotels });

        });

    });


});


module.exports = router;
