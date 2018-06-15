var express = require('express');
var h = require("../database/hotels");
var router = express.Router();

router.post('/', function(req, res, next) {
    var name = req.body.name.toLowerCase();
    console.log(name);

    h.findOne( {"name":name} , function(err,hotels){
        if(err)
            console.log(err);
        console.log(hotels);
        console.log("after hotels")
        // console.log("Donor is : "+destinations[0].name); // if no error occurs return the results
        //var name = hotels.name;
        var district = hotels.district;
        var sDescription = hotels.sDescription;
        var description = hotels.description;
        var imageURL=hotels.imageURL;
        var lat=hotels.lat;
        var long=hotels.long;
        var rate=hotels.rate;
        var _id=hotels._id;

        console.log(name);
        res.render('updateHotels', { name: name, district:district ,sDescription:sDescription ,description:description, imageURL:imageURL, rate:rate, lat:lat, long:long, _id:_id });


    });


});

module.exports = router;