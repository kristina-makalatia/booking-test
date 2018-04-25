// Scroll on Skyra page//
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

