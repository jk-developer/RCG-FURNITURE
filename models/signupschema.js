var mongoose = require('mongoose');


var signupSchema = new mongoose.Schema({
    
    username : String,
    
     email : String,
    
    password : String
});

module.exports = mongoose.model("Signup", signupSchema);
