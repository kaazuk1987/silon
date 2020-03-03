$(document).ready(function(){
$(".panie").css("margin-right","50");


$(".panie").mouseenter(function(){
 $(".panie > .d-kolo").show();
$(".panie").css("margin-right","-160");

});
$(".panie").mouseleave(function(){
 $(".panie > .d-kolo").hide();
$(".panie").css("margin-right","50");
});
});


