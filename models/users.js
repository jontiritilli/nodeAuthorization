const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    password: String,
    givenName: String,
    familyName: String
})

//callback function definition using the pre method
userSchema.pre('save', function(next){
    const user = this;

    bcrypt.genSalt(10, (err, salt) => {
        if(err) return next(err);
        bcrypt.hash(user.password, salt, null, (err, hash)=>{
            if(err) return next(err);

            user.password = hash;

            next();
        })
    })
})

userSchema.methods.comparePasswords = function(candidate, callback){
    brypt.compare(candidate, this.password, (err, isMatch)=>{
        if(err) return callback(err);

        callback(null, isMatch)
    })
}

//create model for 'user' collection
const ModelClass = mongoose.model('user', userSchema)

module.exports = ModelClass