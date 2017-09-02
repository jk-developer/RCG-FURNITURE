var router = require('express').Router();



//=========
// Root Route
//==========
router.get("/" , function(req, res)
       
{
   res.render("index");
  

}      
);


module.exports = router;