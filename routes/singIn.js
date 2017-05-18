var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("inside signIN")
    res.render('SignIn', { title: '' });
    // res.render('successful', { title: 'Signed' });
});
//
// router.post('/', function(req, res, next) {
//     console.log(req.body);
//     res.render('adminHome', { title: '' });
// });
module.exports = router;
