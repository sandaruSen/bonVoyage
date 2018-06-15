/**
 * Created by Sandaru on 5/19/2017.
 */
var express = require('express');
//var destination = require("../database/travelDestination");
var h = require("../database/hotels");
var router = express.Router();

router.post('/', function(req, res, next) {
    // var name = req.body.hotelname.toLowerCase();

    console.log("inside hotel post")
    console.log(req.body);
    // var name = req.body.hotelname;


    h.findById(req.body._id , function (err, p) {
        console.log(p)
        // Handle any possible database errors
        if (err) {
            res.status(500).send(err);
        } else {
            p.name = req.body.name || p.name;
            p.district = req.body.district || p.district;
            p.category = req.body.category || p.category;
            p.description = req.body.description || p.description;
            p.imageURL = req.body.imageURL || p.imageURL ;
            p.rating = req.body.rating || p.rating;
            p.lat = req.body.lat|| p.lat;
            p.long = req.body.long|| p.long;

            // Save the updated document back to the database
            // p.save(function (err, todo) {
            //     if (err) {
            //         res.status(500).send(err)
            //     }
            //     // res.send(p);
            // });
            p.save();
            res.render('adminHome', { title: 'Successfully Updated' });
        }

    });


});

module.exports = router;
