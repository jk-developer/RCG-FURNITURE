var router = require('express').Router(),
    Signup=require('../models/signupschema');
    

router.get("/signup", function(req, res){
   
    res.render("signup"); 
    
});
    

router.post("/index", function(req, res)
  {
    
    var newUser = req.body.user;
    Signup.create(newUser, function(err, user)
    {
        if(err)
            {
                return console.log(err);
            }
        console.log("New user added : ", user);
        
        res.redirect("/");
        
        
    });    
    
});





module.exports  = router;
    
    
    
    
    
    
 