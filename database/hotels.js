var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var hotelSchema = new Schema({

        name   : String,
        district    : String,
        sDescription      : String,
        description     : String,
       rate     : String,
    imageURL :String,
    lat: String,
    long:String

});
module.exports = mongoose.model('Hotel', hotelSchema);