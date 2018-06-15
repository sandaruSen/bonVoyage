var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


var Schema = mongoose.Schema;

var userSchema =  new Schema({
    email: String,
    password: String,
    name: String,
    number:String
});
//
//
// userSchema.methods.generateHash = function(password){
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(8),null);
// };
//
// userSchema.methods.validPassword = function(password) {
//     return bcrypt.compareSync(password, this.password);
// };

module.exports = mongoose.model('User', userSchema);

module.exports.createUser = function(newUser, cb) {
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(newUser.password, salt, function (err, hash) {
            console.log('create user');
            newUser.password = hash;
            newUser.save(cb);
        })
    })
};

module.exports.getUserByEmail=function(email,cb){
    var query={email:email};
    User.findOne(query,cb);
};


module.exports.comparePassword = function (candidatePassword, hash, cb) {
    bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
        if(err){
            console.log(err);
        }else{
            cb(null, isMatch);
        }
    });
};

