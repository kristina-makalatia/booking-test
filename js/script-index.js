
$(document).ready(function(){
  $(".burger-icon").click(function(){
    $(this).toggleClass('open');
  });
});

$(function(){
        $(".burger-icon").click(function() {
          var clicks = $(this).data('clicks');
          if (clicks) {
            closeNav();
            $('.box').css({height:"auto"});
          } else {
             openNav();
            $('.box').css({height:"80vh"});
          }
          $(this).data("clicks", !clicks);
        });

    function openNav() {
   document.getElementById("myNav").style.width = "100%";
           $(".burger-icon").show();
           $(".navigation").hide();
           $(".address").hide()
    }

    function closeNav() {
        document.getElementById("myNav").style.width = "0%";
          $(".burger-icon").show();
          $(".navigation").show();
          $(".address").show()
    }
      });

