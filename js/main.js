$(document).ready(function(){
    
 $('.header-carousel ').owlCarousel({
    loop:false,
    margin:0,
    items:1,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    nav:false,
    dots:true,
    autoplaySpeed: 1000,
    animateOut: 'fadeOut',
})

$('.comment-carousel').owlCarousel({
    items:1,
    loop:true,
    nav:false,
})

$('.tours-carousel').owlCarousel({
    items:3,
    loop:true,
    nav:false,
     dots:false,
})



    
})