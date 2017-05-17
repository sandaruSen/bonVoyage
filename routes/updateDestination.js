var express = require('express');
var destination = require("../database/travelDestination");
var h = require("../database/hotels");
var router = express.Router();

router.post('/', function(req, res, next) {
    var name = req.body.name.toLowerCase();
    console.log(name);

    destination.findOne( {"name":name} , function(err,destinations){
        if(err){
            console.log("No such destination")
        }
        else{
            if(destinations){
                console.log(err);
                console.log(destinations)
                console.log("Destination is : "+destinations.name); // if no error occurs return the results
                destinations.district =req.body.district.toLowerCase();
                destinations.category=req.body.category.toLowerCase();
                destinations.description=req.body.description;
                destinations.imageURL=req.body.imageURL;
                destinations.rating=req.body.rating;
                destinations.lat=req.body.lat;
                destinations.long=req.body.long;
                destinations.save();
                res.render('adminHome');
            }
        }
    });


});

module.exports = router;