$(document).ready(function(){
//karuzela



$(".panie").css("margin-right","50px");


$(".panie").mouseenter(function(){
$(".panie").css("margin-right","-162px");
$(".panie > .d-kolo").show();


});

$(".panie").mouseleave(function(){
$(".panie > .d-kolo").hide();
$(".panie").css("margin-right","50px");
});


//$(".owl-carousel").owlCarousel();
var owl = $(".owl-carousel");
owl.owlCarousel({
    items:7,
    loop:true,
    margin:250,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:false
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000]);
    
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay');
})


});


