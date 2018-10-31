/**
 * Created by Sandaru on 5/18/2017.
 */

var feedback;
var express = require('express');
var Feedback=require('../database/feedback');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//     res.render('addTravelDestination', { title: 'Add Destination' });
// });

// to save the destination information added

router.post('/', function(req, res, next) {
    console.log(req.body);
    var t = new Feedback();
    t.name=req.body.hotelName.toLowerCase();
    t.description=req.body.description;
    t.imageURL=req.body.imageURL;
    t.checked="no"
    //console.log("after feed back")

    t.save();

    //direct to the index page with the message
    res.render('', { title: '' });
});



module.exports = router;

