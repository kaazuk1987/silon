$(document).ready(function(){
$(".panie").css("margin-right","50px");


$(".panie").mouseenter(function(){
$(".panie").css("margin-right","-162px");
$(".panie > .d-kolo").show();


});

$(".panie").mouseleave(function(){
$(".panie > .d-kolo").hide();
$(".panie").css("margin-right","50px");
});

//karuzela
$(".owl-carousel").owlCarousel();
var owl = $(".owl-carousel");
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
    owl.trigger('play.owl.loop')
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

});


