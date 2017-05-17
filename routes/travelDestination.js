var express = require('express');
var Destination=require('../database/travelDestination');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('addTravelDestination', { title: 'Add Destination' });
});

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
    res.render('adminHome', { title: 'Travel Destination Added' });
});




module.exports = router;


// t.travelDestination.district=req.body.district;
// t.travelDestination.province=req.body.province;
// t.travelDestination.description=req.body.description;
// t.travelDestination.rate=req.body.rating;