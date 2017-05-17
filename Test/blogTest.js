/**
 * Created by Sandaru on 5/17/2017.
 */

var blgCntrl = require('../Controllers/blogController');
var mongoose = require('mongoose');
var expect = require('chai').expect;


describe('blogController',function(){

    it('should be an array the answer', function () {
        blgCntrl.getAllBlogs(function(val) {
            expect(val).to.be.a('array');

        })
    });
})