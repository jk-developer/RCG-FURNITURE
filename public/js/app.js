
$(".ui.dropdown").hover(function()
{
   $(this).toggleClass("hower");
    
});


$(".ui.dropdown .menu>.item").hover(function()
{
  $(this).find('a').toggleClass('hower');
    
});
                              
                        
$('.ui.dropdown .menu').on('click',function()        //Bug fix 
                                                     //*Page was not redirecting when div 'item' is selectedinstead of '                           
{   var url = $(this).find('a').attr('href');       // getting the href value of div>a
    
    $(location).attr('href',url);  // redirecting to href value
    
});



 //make image height equal

function resizeImage()
{
     var imgmaxht = 0;  // maximum image height
    $('.thumbnail-product img').each(function()                               
    {
            if($(this).height()>imgmaxht)
            {
                imgmaxht= $(this).height();
            }
    });

    $('.thumbnail-product img').height(imgmaxht);
       
}

   

//make same  height of caption

function resizeCaption()
{
    
    var capmaxht = 0;  // maximum image height
    $('.thumbnail-product .caption').each(function()
                                    
    {
    
        if($(this).height()>capmaxht)
            {
                capmaxht= $(this).height();
            }
    });
   $('.thumbnail-product .caption').height(capmaxht);
    
}
    


//getFromStrorage function to get and set value in localstorage


function getFromStorage()  // required to save the current radio button checked which will be extracted after reload of page
{
    
    return {
        
        set : function(key ,value)
        {
            localStorage.setItem(key, value);
        },
        
        get : function(key)
        
         {
             return localStorage.getItem(key);
         }
    };
    
}

$.when($('[name="optionsRadios"]').on('change', function()
{
    
    getFromStorage().set("Cur_radio", $(this)[0].value);   //gettting value and storing the selected option to 
                                                        //localStorage
    
    
    var radioValue= $('.radio-form').serializeArray()[0].value;
    
    $.post('/products/variety',{
        optionsRadios:radioValue
        
    },function()
          {
           console.log('successfully posted');
        
           $('.product-grid').animate({opacity:'0'},1000,function()
            {
               
               var htmlData;
        
                    $.ajax({
                   method:'GET',
                   url : '/products/beds',
                   
                   success: function(data)
                   {
                       
                       htmlData=$($.parseHTML(data)).find('.product-grid')[0].innerHTML;

                   }   
                   
               });
               
               
                setTimeout(function()     //cant use this because it will be out of scope as setTimeout is used
               {
                
               
                 $('.product-grid').html(htmlData);

                    
                     $(window).ready(function()       // window.load function not wokring
                    
                    {
                        
                        console.log('done');
                         
                          resizeImage(); //resizing the image again
                          resizeCaption();   //resizing the caption
                         
                         $('.product-grid').animate({opacity:'1.0'},1000);
                    }
                        );       
                    
          

                         
                                           
                
                }, 2000);
               
            }
                                           
                                           
            );
           
    
    });
    

}

                              
                              
)).then(function()
      
      {
     
    var value=getFromStorage().get('Cur_radio'); //value extracted from localStorage
   
    
  $('[value="'+value+'"]').prop('checked','true');  //set the current radio button checked
});


//Animate window

$(window).on('load', function()
{   
    resizeImage();
    resizeCaption();
    $('body').animate({
        
        opacity:'1.0'
    },500);
    
});


$(window).on('unload', function()
{
    
    setTimeout(function(){localStorage.clear();}, 240000);


});



