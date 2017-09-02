var router = require('express').Router();

router.get("/hfinishing", function(req, res){
   res.render("hfinishing"); 
});



module.exports  = router;