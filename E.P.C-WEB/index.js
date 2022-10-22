
if( $(window).width()<= "1028") {
    $(".social-icons").addClass("fa-2xl");
    $(".left5").removeClass("col-md-6");
    $(".left5").addClass("col-md-5");
    $(".About-p").removeClass("para");
       }

if( $(window).width()>"1028") {
    $(".toggler-icon").hide();

      }

$("#Contact").click(function(){

$("#fade").addClass("pressed");
setTimeout(function(){$("#fade").removeClass("pressed")},1500);
});
