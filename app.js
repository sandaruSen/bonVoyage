var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var bodyParser = require('body-parser');
var handlebars = require ('express-handlebars');
var passport=require('passport');
var mongoose = require('mongoose');
var flash=require('connect-flash');
var expressValidator= require('express-validator');
var session=require('express-session');
var LocalStrategy = require('passport-local');

require('./Controllers/passport')(passport);

//import routes
var index = require('./routes/index');
var users = require('./routes/users');
var admin=require('./routes/admin');
var addHotels = require('./routes/hotel');
var travelDestination = require('./routes/travelDestination');
var sign=require('./routes/singIn');
var destinations=require('./routes/destinations');
var hotels =require('./routes/hotels');
var blogs=require('./routes/blogs');
var beaches=require('./routes/beaches');
var heritage=require('./routes/heritage');
var wildlife=require('./routes/wildlife');
var rainforests=require('./routes/rainforests');
var hillcountry=require('./routes/hills');
var signUp=require('./routes/users');
//var adminHome=require('./routes/adminHome')
var addBlog=require('./routes/addBlog')
var app = express();


mongoose.connect('mongodb://root:123@ds143131.mlab.com:43131/bonvoyagedatabase');
// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.engine('hbs',handlebars({
  defaultLayout:"layout",
    extname:"hbs",
    layoutsDir: __dirname +'/views/layouts'
}));

app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(validator());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//express session
app.use(session({
    secret:'secret',
    saveUninitialized : true,
    resave :true
}))

//passport init
app.use(passport.initialize());
app.use(passport.session());

//express validator
app.use(expressValidator({
    errorFormatter: function(param, msg, value) {
        var namespace = param.split('.')
            , root    = namespace.shift()
            , formParam = root;

        while(namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param : formParam,
            msg   : msg,
            value : value
        };
    }
}));

//connect flash
app.use(flash());

app.use('/', index);
app.use('/users', users);
app.use('/addHotel', addHotels);
app.use('/addDestination', travelDestination);
app.use('/signIn',sign);
app.use('/getDestination',destinations);
app.use('/getHotel',hotels);
app.use('/addAdmin',admin);
app.use('/travelBlog',index);
app.use('/blogs',blogs);
app.use('/beaches',beaches);
app.use('/heritage',heritage);
app.use('/wildlife',wildlife);
app.use('/rainforests',rainforests);
app.use('/hillcountry',hillcountry);
app.use('/addBlog',addBlog)



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//Global vars
app.use(function (req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // res.locals.success_msg=req.flash('success_msg');
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
