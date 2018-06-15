var express = require('express');
var router = express.Router();

var User = require('../database/users');
var passport = require('passport');
var flash = require('connect-flash');
var LocalStrategy = require('passport-local');
require('../Controllers/passport');

// router.get('/singup', function (req, res) {
//    res.send('asdfasd');
// });


passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
    function (username, password, done) {
    console.log('inside passport');
    User.findOne({email : username}, function (err, user) {
        if(err){
            console.log(err);
        }else{
            if (!user){
                return done(null, false, {message: 'Unknown user'});
            }
            User.comparePassword(password, user.password, function (err, isMatch) {
                if (err){
                    console.log(err);
                } else{
                    if (isMatch){
                        return done(null, user);
                    }else{
                        return done(null, false, {message: 'Invalid Password'});
                    }
                }
            });
        }
    });
}));

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});

router.post('/login', passport.authenticate('local',{
    successRedirect: '/adminHome', failureRedirect:'/signIn', failureFlash : true
}), function (req, res) {
    // console.log(res)
    res.redirect('/');
});




router.post('/signup', function(req,res){
    console.log('here');
    var name=req.body.name;
    var email=req.body.email;
    var password=req.body.password1;
    var password2=req.body.password2;
    var number=req.body.number;

    req.checkBody('name','Name is required').notEmpty();
    var errors =req.validationErrors();
    if(errors){
        console.log('YES');
        // TODO render view with error msgs
    } else{
        console.log('NO');
        var user = new User({
            name : req.body['name'],
            email : req.body['email'],
            password : req.body['password1'],
            number :req.body['number']
        });

        User.createUser(user, function (err, user) {
            if(err) throw err;
            console.log(user);

            req.flash('success_msg', 'you are re');
            res.redirect('/signIn');
        });



    }
});







module.exports = router;

