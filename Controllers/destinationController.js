var express = require('express');
var destination = require("../database/travelDestination");


module.exports.getDestinationByName = function (name, next) {
    destination.findOne( {"name":name} , function(err,destinations){
        if(err)
            console.log(err);
        console.log(destinations);
        next(destinations);

    });
};

this.getDestinationByName(function (val) {
    console.log(val);
});