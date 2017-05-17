var express = require('express');
var Hotel = require('../database/hotels');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('addHotel', { title: 'BonVoyage-Add Hotel' });
});

router.post('/', function(req, res, next) {
    console.log(req.body);
    var h = new Hotel();
    h.name=req.body.hotelName.toLowerCase();
    h.district=req.body.district.toLowerCase();
    h.sDescription=req.body.sDescription;
    h.description=req.body.description;
    h.rate=req.body.rating.toLowerCase();
    h.imageURL=req.body.imageURL;
    h.lat=req.body.lat;
    h.long=req.body.long;
    h.save();
    res.render('adminHome', { title: 'Hotel Added' });
});
module.exports = router;

