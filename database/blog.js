var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var blogSchema = new Schema({

    name   : String,
    description     : String,
    email : String,
    checked : String,
    imageURL :String

});
module.exports = mongoose.model('Blog', blogSchema);