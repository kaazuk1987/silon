$(document).ready(function(){
$(".panie").css("margin-right","50px");


$(".panie").mouseenter(function(){
$(".panie").css("margin-right","-160px");
$(".panie > .d-kolo").show();


});

$(".panie").mouseleave(function(){
$(".panie > .d-kolo").hide();
$(".panie").css("margin-right","50px");
});



});


