var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var feedbackSchema = new Schema({

    name   : String,
    description     : String,
    imageURL : String,
    checked : String

});
module.exports = mongoose.model('Feedback', feedbackSchema);