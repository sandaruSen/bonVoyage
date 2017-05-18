/**
 * Created by Sandaru on 5/18/2017.
 */

var destCntrl = require('../Controllers/destinationController');
var mongoose = require('mongoose');
var expect = require('chai').expect;


describe('destinationController',function(){

    it('answer should be an array', function () {
        destCntrl.getDestinationByName(function(val) {
            expect(val).to.be.a('array');

        })
    });
})