var express = require('express');
var router = express.Router();
var passport = require('passport');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'BonVoyage' });
});



router.route('/signUp')
    .get(function(req, res ,next){
        res.render('addAdmin',{ message: req.flash('signupMessage')});

    })

    .post(passport.authenticate('local-signup', {
        successRedirect : '/adminHome',
        failureRedirect : '/addAdmin',
        failureFlash : true
    }));


router.route('/SignIn')

    .get(function(req, res, next) {
        //console.log(req.flash('loginMessage'));
        res.render('SignIn', { message: req.flash('loginMessage')});


    })


    .post(passport.authenticate('local-login', {
        successRedirect : '/adminHome',
        failureRedirect : '/SignIn',
        failureFlash : true
    }));
    router.route('/adminHome')

    .get(function(req, res, next){
        res.render('adminHome',{ user : req.user});
    });


router.get('/travelBlog', function(req, res, next) {
    res.render('travelBlog', { title: 'BonVoyage' });
});


router.get('/addData', function(req, res, next) {
    res.render('addData', { title: 'BonVoyage' });
});

router.get('/addDatah', function(req, res, next) {
    res.render('addDatah', { title: 'BonVoyage' });
});







module.exports = router;
