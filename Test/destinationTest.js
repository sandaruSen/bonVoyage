/**
 * Created by Sandaru on 5/01/2017.
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



describe('destinationController',function(){

    it('answer should be a string', function () {
        destCntrl.getDestinationNameById(function(val) {
            expect(val).to.be.a('String');

        })
    });
})


describe('destinationController',function(){

    it('answer should be a string', function () {
        destCntrl.getDestinationDistrictById(function(val) {
            expect(val).to.be.a('String');

        })
    });
})


describe('destinationController',function(){

    it('answer should be a string', function () {
        destCntrl.getDestinationCategoryById(function(val) {
            expect(val).to.be.a('String');

        })
    });
})