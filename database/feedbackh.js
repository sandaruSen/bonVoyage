/**
 * Created by Sandaru on 5/18/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var feedbackhSchema = new Schema({

    name   : String,
    description     : String,
    imageURL : String,
    checked : String

});
module.exports = mongoose.model('Feedbackh', feedbackhSchema);
