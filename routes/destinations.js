var express = require('express');
var destination = require("../database/travelDestination");
var h = require("../database/hotels");
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//     res.render('destinationInfo', { title: '' });
// });

router.post('/', function(req, res, next) {
    var name = req.body.name.toLowerCase();
    console.log(name);



    destination.findOne( {"name":name} , function(err,destinations){
        if(err)
            console.log("No such destination")
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

        console.log(name);
        console.log(district);

        h.find( {"district":district} , function(err,hotels){
            console.log(district);
            if(err)
                console.log(err);
            console.log("Hotels are : "+hotels)
            res.render('destinationInfo', { name: name, district:district ,category:category ,description:description,imageURL:imageURL, rating:rating, lat:lat, long:long, hotels:hotels });

        });



        //res.render('destinationInfo', { name: name, district:district ,category:category ,description:description,imageURL:imageURL, rating:rating, destinations:hotels });
    });


});

module.exports = router;
//name.toString()