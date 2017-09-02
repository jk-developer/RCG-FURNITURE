var router = require('express').Router(),
    Product=require('../models/product');




var productVariety='All';

router.post('/products/variety', function(req, res)  //Getting the value of Cateogries from Radios buttons
{

     
    productVariety= req.body.optionsRadios;
    
    console.log('variety',productVariety);
    
    
    res.redirect('/products/beds');

}
           
           
);


router.get("/products/beds", function(req, res)
{  
  
  if(productVariety==='All')
      {
    Product.find({},function(err, product)   //getting all products
    {
    
     if(err)
    {
        console.log("not responding");
        return console.log(err);
    }
    
   res.render("../views/product/beds",{Product:product});
    
    }
    );
          
          
      }
    else{
       
        Product.find({variety:productVariety},function(err, product)    //getting a specific product depending on variety
    {
    
     if(err)
    {
        console.log("not responding");
        return console.log(err);
    }
    
   res.render("../views/product/beds",{Product:product});
    
    }
    );
        
        
    }
    
   

    
}
          
);


router.get("/products/new", function(req, res)
{

   res.render("../views/product/new");

}
);


router.post("/products/beds", function(req, res)
  {
  
    
    var newProduct = req.body.product;
    
      
    Product.create(newProduct, function(err, product)
    {
        if(err)
            {
                return console.log(err);
            }
        console.log("Ne Product added : ", product);
        
        res.redirect("/products/beds");
        
        
    });
    
    
    
    
}
           
 );




module.exports  = router;