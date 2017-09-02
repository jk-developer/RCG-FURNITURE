
var router = require('express').Router();

router.get("/contact", function(req, res){
   res.render("contact"); 
});

module.exports = router;