
// preloader
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
});

/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/
$(function(){

  // ------- WOW ANIMATED ------ //
  wow = new WOW(
  {
    mobile: false
  });
  wow.init();

  // ------- JQUERY PARALLAX ---- //
  function initParallax() {
    $('#home').parallax("100%", 0.1);
    $('#bio').parallax("100%", 0.3);
    $('#credits').parallax("100%", 0.2);
    $('#media').parallax("100%", 0.2);
    $('#reedheader').parallax("100%", 0.1);
    $('#reed').parallax("100%", 0.3);
    $('#contact').parallax("100%", 0.1);
  }
  initParallax();

  // HIDE MOBILE MENU AFTER CLIKING ON A LINK
  $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

  // NIVO LIGHTBOX
  $('#credits a').nivoLightbox({
    effect: 'fadeScale',
  });
  $('#reed a').nivoLightbox({
    effect: 'fadeScale',
  });


});

