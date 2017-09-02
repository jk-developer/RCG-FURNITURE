var express     =require("express"),
    app         =express(),
    bodyParser  =require('body-parser'),
    mongoose    =require("mongoose"),
    
    
    
    //Routes
    
    indexRoute = require("./routes/index.js"),
    productRoute = require('./routes/product.js');
    
    

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

app.use(express.static(__dirname+"/public"));
mongoose.connect

var DBURL = process.env.url;
if(!DBURL)
    {  DBURL = "mongodb://localhost/RCG_furniture"}

mongoose.connect(DBURL);

//================================
//    Routes Configuration
//=================================

app.use(indexRoute);
app.use(productRoute);

//*********************************



//=====================
// Listening Port
//=====================
app.listen(2000 || process.env.port, function()           
{
    
   console.log("Server is started on port : 2000"); 
    
});

//**********************