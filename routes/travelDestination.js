var express = require('express');
var Destination=require('../database/travelDestination');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('addTravelDestination', { title: 'Add Destination' });
});

// to save the destination information added

router.post('/', function(req, res, next) {
    console.log(req.body);
    var t = new Destination();
    t.name=req.body.hotelName.toLowerCase();
    t.district=req.body.district.toLowerCase();
    t.category=req.body.category.toLowerCase();
    t.description=req.body.description;
    t.rating=req.body.rating.toLowerCase();
    t.imageURL=req.body.imageURL;
    t.lat=req.body.lat;
    t.long=req.body.long;
    t.save();

    //direct to the the adminHome with the message
    res.render('adminHome', { title: 'Travel Destination Added' });
});



module.exports = router;

