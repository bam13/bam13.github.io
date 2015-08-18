$(document).ready(function() {

  $('.page-one').on('click',function(){
       $("#portfoliopage").load("portfolio.html");
    });

  $('.page-two').on('click',function(){
       $("#webworkspage").load("webworks.html"); 
    });

   $('.page-three').on('click',function(){
       $("#artworkpage").load("artwork.html"); 
    });

    $('.page-four').on('click',function(){
       $("#contactpage").load("contactme.html"); 
    });

   $('.fa-times').click(function(){
     $('.page').removeClass("content", "content-negative");
  });

});


