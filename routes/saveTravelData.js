/**
 * Created by Sandaru on 5/19/2017.
 */
var express = require('express');
var feedback = require('../database/feedback');
var router = express.Router();

router.post('/', function(req, res, next) {
    console.log("inside post")
    console.log(req.body._id);

    feedback.findById(req.body._id , function (err, p) {
        console.log(p)
        // Handle any possible database errors
        if (err) {
            res.status(500).send(err);
        } else {
            // Update each attribute with any possible attribute that may have been submitted in the body of the request
            // If that attribute isn't in the request body, default back to whatever it was before.
            p.name = req.body.name || p.name;
            p.description = req.body.district || p.district;
            p.imageURL = req.body.category || p.category;
            p.checked = "yes"

            // p.save();
            // res.render('travelContent', {  });


            p.save(function (err) {
                if(err)
                    console.log(err);
                feedback.find( {"checked":"no"} , function(err,feedback){

                    if(err)
                        console.log(err);
                    console.log(feedback);
                    res.render('travelContent',{feedback: feedback});

                });
            });

        }

    });


});

module.exports = router;