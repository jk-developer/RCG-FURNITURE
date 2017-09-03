var mongoose = require('mongoose');


var productSchema = new mongoose.Schema({
    
    type : String,
  
    title: String,
   
    image: String,       // image url
    
    sh_desc:String,   //short description
    
    variety : String     // strore the variety of furniture
       
});


module.exports = mongoose.model("Product", productSchema);
