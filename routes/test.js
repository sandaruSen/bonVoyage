/**
 * Created by Sandaru on 5/16/2017.
 */
var express = require('express');
var router = express.Router();

router.get('/test', function (req, res) {
   res.send('test');
});

module.exports = router;