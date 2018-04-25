
$(document).ready(function(){
  $(".burger-icon").click(function(){
    $(this).toggleClass('open');
  });
});

$(function(){
        $(".burger-icon").click(function() {
          var clicks = $(this).data('clicks');
          if (clicks) {
            closeNav()
          } else {
             openNav()
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

