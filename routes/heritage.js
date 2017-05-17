var express = require('express');
var destination = require("../database/travelDestination");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {


    destination.find( {"category":"heritage"} , function(err,destinations){
        if(err)
            console.log(err);
        console.log(destinations)
        // console.log("Destination is : "+destinations.name); // if no error occurs return the results
        // var name = destinations.name;
        // var district = destinations.district;
        // var category = destinations.category;
        // var description = destinations.description;
        // var imageURL=destinations.imageURL;
        // var rating=destinations.rating;
        //
        // console.log(name);
        // console.log(name);
        // console.log(district);
        // res.render('heritage', { name: name, district:district ,category:category ,description:description,imageURL:imageURL, rating:rating });

        res.render('heritage',{destinations: destinations});
    });



    // res.render('beaches', { title: 'beaches' });
});
module.exports = router;