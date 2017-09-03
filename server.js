var express     =require("express"),
    app         =express(),
    bodyParser  =require('body-parser'),
    mongoose    =require("mongoose"),
    passport    =require("passport"),
    localStrategy = require('passport-local').Strategy;
    session  = require('express-session'),
    
    
    
    //Routes
    
    indexRoute = require("./routes/index.js"),
    productRoute = require('./routes/product.js'),
    contactRoute  = require('./routes/contact.js'),
    loginRoute   =  require("./routes/login.js"),
    aboutRoute   =  require("./routes/about.js"),
    signupRoute   =  require("./routes/signup.js");

    
 // Handle express Sessions
app.use(session({
    secret:'secret',
    saveUninitialized: true,
    resave: true
}));

// Passport
app.use(passport.initialize());
app.use(passport.session());


app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

app.use(express.static(__dirname+"/public"));


// connect to mongodb database 

var DBURL = process.env.url;
if(!DBURL)
    {  DBURL = "mongodb://localhost/RCG_furniture"}

mongoose.connect(DBURL);

//================================
//    Routes Configuration
//=================================

app.use(indexRoute);
app.use(productRoute);
app.use(contactRoute);
app.use(loginRoute);
app.use(aboutRoute);
app.use(signupRoute);
//*********************************



//=====================
// Listening Port
//=====================
app.listen(process.env.PORT||2000, function()           
{
    
   console.log("Server is started on port : 2000"); 
    
});

//**********************