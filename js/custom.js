$(document).ready(function() {

  $('.page-one').on('click',function(){
       $("#portfoliopage").load("portfolio.html");
    });

  $('.page-two').on('click',function(){
      $("#webworkspage").load("webworks.html", function(){ 
        setTimeout(function(){
           $("#two").load('webworks-inner.html');
         }, 400);  
      }); 
    });

   $('.page-three').on('click',function(){
       $("#artworkpage").load("artwork.html",function(){
         $('.page-art').click(function(){
        $("#art-gallery").load("artgallery.html"); 
        });

        $('.page-photo').click(function(){
            $("#photo-gallery").load("photogallery.html"); 
        });
   

        $('.fa-times').click(function(){
         $('#art-gal', '#photo-gal').removeClass("content-top");
        });
       }); 

    });

    $('.page-four').on('click',function(){
       $("#contactpage").load("contactme.html"); 
    });

   $('.fa-times').click(function(){
     $('.page').removeClass("content", "content-negative");
  });

});


