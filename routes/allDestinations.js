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



router.get('/matara', function(req, res, next) {

    destination.find( {"district":"matara"} , function(err,destinations){

        if(err)
            console.log(err);
        console.log(destinations)

        h.find( {"district":"matara"} , function(err,hotels){
            //console.log(district);
            if(err)
                console.log(err);
            console.log("Hotels are : "+hotels)
            res.render('allDestination', {destinations: destinations , hotels:hotels, number:true });

        });

    });


});




router.get('/batticaloa', function(req, res, next) {

    destination.find( {"district":"batticaloa"} , function(err,destinations){

        if(err)
            console.log(err);
        console.log(destinations)

        h.find( {"district":"batticaloa"} , function(err,hotels){
            //console.log(district);
            if(err)
                console.log(err);
            console.log("Hotels are : "+hotels)
            res.render('allDestination', {destinations: destinations , hotels:hotels, number:true });

        });

    });


});

router.get('/nuwara eliya', function(req, res, next) {

    destination.find( {"district":"nuwara eliya"} , function(err,destinations){

        if(err)
            console.log(err);
        console.log(destinations)

        h.find( {"district":"nuwara eliya"} , function(err,hotels){
            //console.log(district);
            if(err)
                console.log(err);
            console.log("Hotels are : "+hotels)
            res.render('allDestination', {destinations: destinations , hotels:hotels, number:true });

        });

    });


});

module.exports = router;
