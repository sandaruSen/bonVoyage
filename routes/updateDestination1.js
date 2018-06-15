var express = require('express');
var destination = require("../database/travelDestination");
//var h = require("../database/hotels");
var router = express.Router();

router.post('/', function(req, res, next) {
    console.log("inside destination post")
    console.log(req.body._id);
    var name = req.body.hotelname;

    //console.log(name);

    // destination.findByIdAndUpdate( req.body._id , function(err,destinations){
    //     if(err){
    //         console.log("No such destination")
    //     }
    //     else{
    //         if(destinations){
    //             console.log(err);
    //             console.log(destinations)
    //             console.log("Destination is : "+destinations.name); // if no error occurs return the results
    //             destinations.name=req.body.hotelname;
    //             destinations.district =req.body.district;
    //             destinations.category=req.body.category;
    //             destinations.description=req.body.description;
    //             destinations.imageURL=req.body.imageURL;
    //             destinations.rating=req.body.rating;
    //             destinations.lat=req.body.lat;
    //             destinations.long=req.body.long;
    //             destinations.save();
    //             res.render('adminHome', { title: 'Successfully Updated' });
    //         }
    //     }
    // });



    destination.findById(req.body._id , function (err, p) {
        console.log(p)
        // Handle any possible database errors
        if (err) {
            res.status(500).send(err);
        } else {
            // Update each attribute with any possible attribute that may have been submitted in the body of the request
            // If that attribute isn't in the request body, default back to whatever it was before.
            p.name = req.body.name || p.name;
            p.district = req.body.district || p.district;
            p.category = req.body.category || p.category;
            p.description = req.body.description || p.description;
            p.imageURL = req.body.imageURL || p.imageURL ;
            p.rating = req.body.rating || p.rating;
            p.lat = req.body.lat|| p.lat;
            p.long = req.body.long|| p.long;

            p.save();
            res.render('adminHome', { title: 'Successfully Updated' });
        }

    });


});

module.exports = router;