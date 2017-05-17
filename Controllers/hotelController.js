

var express = require('express');
var h = require("../database/hotels");


module.exports.getHotelByName = function (name, next) {
    h.findOne( {"name":name} , function(err,hotels){
        if(err)
            console.log(err);
        console.log(hotels);
        next(hotels);

    });
};

this.getHotelByName(function (val) {
    console.log(val);
});
