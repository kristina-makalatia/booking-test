jQuery(document).ready(function() {
    jQuery('.post2').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated  bounceInUp',
        offset: 100
       });
});

$(function(){

  $.fn.isInViewport = function(){
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight() - 50;

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height() -50;

    return elementBottom > viewportTop && elementTop < viewportBottom;
  }

  var lastScrollTop = 0;
  $(document).scroll(function(){
    var st = $(this).scrollTop();
    console.log($(document).scrollTop()+' ' + $(window).outerHeight()*0.9)
    if($('.second-line').isInViewport()){
      $('.copyright').css({opacity:"1"});
    }
    if(st < lastScrollTop){
      $('.copyright').css({opacity:"0"}); 
    }
    lastScrollTop = st;
  })
})

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

