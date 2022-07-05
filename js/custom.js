
// preloader
$(window).load(function(){
  $('.preloader').fadeOut(1000); // set duration in brackets    
});

//var jptypesinglecode = '<div class="jp-gui jp-interface"><div class="jp-progress"><div class="jp-seek-bar"><div class="jp-play-bar"></div></div><div class="jp-toggles"><button class="jp-repeat" role="button" tabindex="0">repeat</button></div></div><div class="jp-controls"><button class="jp-play" role="button" tabindex="0">play</button></div><div class="jp-volume-controls"><button class="jp-mute" role="button" tabindex="0">mute</button><button class="jp-volume-max" role="button" tabindex="0">max volume</button><div class="jp-volume-bar"><div class="jp-volume-bar-value"></div></div></div><div class="jp-time-holder"><div class="jp-current-time" role="timer" aria-label="time">&nbsp;</div><div class="jp-duration" role="timer" aria-label="duration">&nbsp;</div></div></div><div class="jp-details"><div class="jp-title" aria-label="title">&nbsp;</div></div><div class="jp-no-solution"><span>Update Required</span>To play the media you will need to either update your browser to a recent version or update your <a href="http://get.adobe.com/flashplayer/" target="_blank">Flash plugin</a>.</div>';

var createplayercode = '<div class="triangle"></div><div class="bottomaudio"> <div class="jp-jplayer"></div><div class="jp-audio" role="application" aria-label="media player"> <div class="jp-type-single"> <div class="jp-gui jp-interface"> <div class="jp-progress"> <div class="jp-seek-bar"><div class="jp-play-bar"></div></div><div class="jp-toggles"><button class="jp-repeat" role="button" tabindex="0">repeat</button></div></div><div class="jp-controls"><button class="jp-play" role="button" tabindex="0">play</button></div><div class="jp-volume-controls"> <button class="jp-mute" role="button" tabindex="0">mute</button><button class="jp-volume-max" role="button" tabindex="0">max volume</button> <div class="jp-volume-bar"><div class="jp-volume-bar-value"></div></div></div><div class="jp-time-holder"> <div class="jp-current-time" role="timer" aria-label="time">&nbsp;</div><div class="jp-duration" role="timer" aria-label="duration">&nbsp;</div></div></div><div class="jp-details"><div class="jp-title" aria-label="title">&nbsp;</div></div><div class="jp-no-solution"> <span>Update Required</span>To play the media you will need to either update your browser to a recent version or update your <a href="http://get.adobe.com/flashplayer/" target="_blank">Flash plugin</a>. </div></div></div><div class="xout"></div></div><div class="headphone"> <div class="fa fa-headphones wow bounceIn" data-wow-delay="0.3s"></div></div>'

//var findsingles = document.getElementsByClassName("jp-type-single");

var findcreateplayer = document.getElementsByClassName("createplayer");

var findheadphone = document.getElementsByClassName("headphone");
var findtriangle = document.getElementsByClassName("triangle");
var findbottom = document.getElementsByClassName("bottomaudio");
var findxout = document.getElementsByClassName("xout");
var findjpplayer = document.getElementsByClassName("jp-jplayer");
var findjpaudio = document.getElementsByClassName("jp-audio");
/*
for(let i = 0; i < findsingles.length; i++) {
  findsingles[i].innerHTML = jptypesinglecode;
};
*/
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.previousElementSibling;
    var fade = panel.lastElementChild;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      fade.style.opacity = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      fade.style.opacity = 0;
    }
  });
}

for(let i = 0; i < findcreateplayer.length; i++) {
  findcreateplayer[i].innerHTML = createplayercode;
};

function openPlayer(p) { 
    const headphone = document.getElementById("head" + p);
    headphone.style.bottom = '80%';
    headphone.style.left = '80%';
    headphone.style.opacity = '0';
    const triangle = document.getElementById("tri" + p);
    triangle.style.borderRight = '1000px solid transparent';
    triangle.style.borderBottom = '1000px solid rgba(0, 0, 0, 0.8)';
    const bottomaudio = document.getElementById("audio" + p);
    bottomaudio.style.top = '0';
    bottomaudio.style.left = '0';
    bottomaudio.style.opacity = "1";
};

function closePlayer(p) { 
  const headphone = document.getElementById("head" + p);
  headphone.style.bottom = '22px';
  headphone.style.left = '6px';
  headphone.style.opacity = '1';
  const triangle = document.getElementById("tri" + p);
  triangle.style.borderRight = '50px solid transparent';
  triangle.style.borderBottom = '50px solid rgba(0, 0, 0, 0.8)';
  const bottomaudio = document.getElementById("audio" + p);
  bottomaudio.style.top = '100%';
  bottomaudio.style.left = '-100%';
  bottomaudio.style.opacity = "0";
};

for(let k = 0; k < findcreateplayer.length; k++) {
  var dig = k;
  findheadphone[k].setAttribute("id", "head" + dig);
  findtriangle[k].setAttribute("id", "tri" + dig);
  findbottom[k].setAttribute("id", "audio" + dig);
  findxout[k].setAttribute("id", "xout" + dig);
  findjpplayer[k].setAttribute("id", "jquery_jplayer_"+ dig);
  findjpaudio[k].setAttribute("id", "jp_container_" + dig);
};


for (let j = 0; j < findcreateplayer.length; j++) {
  (function () {
    var digit = j;
    var clickhead = document.getElementById("head"+ digit)
    var clickx = document.getElementById("xout" + digit)
      clickhead.addEventListener("click", function() { openPlayer(digit); }, false);
      clickx.addEventListener("click", function() { closePlayer(digit); }, false)
  }()); // immediate invocation
};

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




