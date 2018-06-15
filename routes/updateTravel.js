var express = require('express');
var destination = require("../database/travelDestination");
var router = express.Router();


router.post('/', function(req, res, next) {
    var name = req.body.name.toLowerCase();
    console.log(name);

    destination.findOne( {"name":name} , function(err,destinations){
        if(err)
            console.log(err);
        console.log(destinations)
        console.log("Destination is : "+destinations.name); // if no error occurs return the results
        var name = destinations.name;
        var district = destinations.district;
        var category = destinations.category;
        var description = destinations.description;
        var imageURL=destinations.imageURL;
        var rating=destinations.rating;
        var lat=destinations.lat;
        var long=destinations.long;
        var _id=destinations._id;
        console.log(_id);

        console.log(name);
        console.log(district);


        res.render('updateTravel', { name: name, district:district ,category:category ,description:description,imageURL:imageURL, rating:rating, lat:lat, long:long,_id:_id });
    });


});

module.exports = router;