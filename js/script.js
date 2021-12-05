$(function() {
  
  if (window.matchMedia('(max-width: 767px)').matches) {
    $(window).scroll(function() {
      if($(this).scrollTop() > 35) {
        $(".header-link-inner").addClass("header-scroll");
        $(".header-link-lists").removeClass("header-link-lists-");
      } else {
        $(".header-link-inner").removeClass("header-scroll");
        $(".header-link-lists").addClass("header-link-lists-");
      }
    });
	} else if (window.matchMedia('(min-width:768px) and (max-width: 979px)').matches) {
		$(window).scroll(function() {
      if($(this).scrollTop() > 70) {
        $(".header-link-inner").addClass("header-scroll");
        $(".header-link-lists").removeClass("header-link-lists-");
      } else {
        $(".header-link-inner").removeClass("header-scroll");
        $(".header-link-lists").addClass("header-link-lists-");
      }
    });
	} else if (window.matchMedia('(min-width:980px)').matches) {
    $(window).scroll(function() {
      if($(this).scrollTop() > 111) {
        $(".header-link-inner").addClass("header-scroll");
        $(".header-link-lists").removeClass("header-link-lists-");
      } else {
        $(".header-link-inner").removeClass("header-scroll");
        $(".header-link-lists").addClass("header-link-lists-");
      }
    });
}

$(function(){
  $('a[href^="#"]').click(function(){
    let speed = 1000;
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});
})

