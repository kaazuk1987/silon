$(document).ready(function(){
//karuzela



$(".panie").css("margin-right","52px");


$(".panie").mouseenter(function(){
$(".panie").css("margin-right","-160px");
$(".panie > .d-kolo").show();


});

$(".panie").mouseleave(function(){
$(".panie > .d-kolo").hide();
$(".panie").css("margin-right","50px");
});


//$(".owl-carousel").owlCarousel();
var owl = $(".owl-carousel");
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    pagination : true,
    
    
});
/*$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000]);
    
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay');
})*/


});


