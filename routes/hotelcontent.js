/**
 * Created by Sandaru on 5/19/2017.
 */
var express = require('express');
var feedbackh = require("../database/feedbackh");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

    // var sample=new Array();

    feedbackh.find( {"checked":"no"} , function(err,feedbackh){

        if(err)
            console.log(err);
        console.log(feedbackh)
        res.render('hotelContent',{feedbackh: feedbackh});

    });


});
module.exports = router;
