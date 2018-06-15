/**
 * Created by Sandaru on 5/19/2017.
 */
var express = require('express');
var feedback = require("../database/feedback");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

    // var sample=new Array();

    feedback.find( {"checked":"no"} , function(err,feedback){

        if(err)
            console.log(err);
        console.log(feedback)
        res.render('travelContent',{feedback: feedback});

    });


});
module.exports = router;
