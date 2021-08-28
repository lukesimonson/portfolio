
var jptypesinglecode = '<div class="jp-gui jp-interface"><div class="jp-progress"><div class="jp-seek-bar"><div class="jp-play-bar"></div></div><div class="jp-toggles"><button class="jp-repeat" role="button" tabindex="0">repeat</button></div></div><div class="jp-controls"><button class="jp-play" role="button" tabindex="0">play</button></div><div class="jp-volume-controls"><button class="jp-mute" role="button" tabindex="0">mute</button><button class="jp-volume-max" role="button" tabindex="0">max volume</button><div class="jp-volume-bar"><div class="jp-volume-bar-value"></div></div></div><div class="jp-time-holder"><div class="jp-current-time" role="timer" aria-label="time">&nbsp;</div><div class="jp-duration" role="timer" aria-label="duration">&nbsp;</div></div></div><div class="jp-details"><div class="jp-title" aria-label="title">&nbsp;</div></div><div class="jp-no-solution"><span>Update Required</span>To play the media you will need to either update your browser to a recent version or update your <a href="http://get.adobe.com/flashplayer/" target="_blank">Flash plugin</a>.</div>';

var findsingles = document.getElementsByClassName("jp-type-single")

for(let i = 0; i < findsingles.length; i++) {
findsingles[i].innerHTML = jptypesinglecode;
}

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
  $('#credits .film a').nivoLightbox({
    effect: 'fadeScale',
  });
  $('#reed a').nivoLightbox({
    effect: 'fadeScale',
  });

});

