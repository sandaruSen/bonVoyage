var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var destinationSchema = new Schema({

        name   : String,
        district    : String,
        category      : String,
        description     : String,
        imageURL : String,
        rating: String,
    lat: String,
    long:String

});
module.exports = mongoose.model('Destination', destinationSchema);

