
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



document.getElementById("mG61Hd").addEventListener("submit",function(evt)
  {
  
  var response = grecaptcha.getResponse();
  if(response == 0) 
  { 
    //reCaptcha not verified
    //alert("please verify you are human!"); 
    //evt.preventDefault();
    //return false;
  }
  //captcha verified
  //do the rest of your validations here
  
});

/*
$(document).ready(function(){
 
  
  var jpgui = document.createElement('div');
      jpgui.setAttribute('class', 'jp-gui jp-interface');
      //document.getElementById(jptypesingle).appendChild(jpgui);
  
  var jpcontrols = document.createElement('div');
      jpcontrols.setAttribute('class', 'jp-controls');
      //jpgui.appendChild(jpcontrols);

  var jpplay = document.createElement('button');
      jpplay.setAttribute('class', 'jp-play');
      jpplay.setAttribute('role', 'button');
      jpplay.setAttribute('tabindex', '0');
      jpplay.innerHTML = "play";
      //jpcontrols.appendChild(jpplay);
  
  var jpprogress = document.createElement('div');
      jpprogress.setAttribute('class', 'jp-progess');
      //jpgui.appendChild(jpprogress);

  var jpseekbar = document.createElement('div');
      jpseekbar.setAttribute('class', 'jp-seek-bar')
      //jpprogress.appendChild(jpseekbar);
  
  var jpplaybar = document.createElement('div');
      jpplaybar.setAttribute('class', 'jp-play-bar')
      //jpseekbar.appendChild(jpplaybar);

  var jpvolumecontrols = document.createElement('div');
      jpvolumecontrols.setAttribute('class', 'jp-volume-controls');
      //jpgui.appendChild(jpvolumecontrols);

  var jpmute = document.createElement('button');
      jpmute.setAttribute('class', 'jp-mute');
      jpmute.setAttribute('role', 'button');
      jpmute.setAttribute('tabindex', '0');
      jpmute.innerHTML = "mute";
      //jpvolumecontrols.appendChild(jpmute);

  var jpvolumemax = document.createElement('button');
      jpvolumemax.setAttribute('class', 'jp-volume-max');
      jpvolumemax.setAttribute('role', 'button');
      jpvolumemax.setAttribute('tabindex', '0');
      jpvolumemax.innerHTML = "max volume";
      //jpvolumecontrols.appendChild(jpvolumemax);

  var jpvolumebar = document.createElement('div');
      jpvolumebar.setAttribute('class', 'jp-volume-bar');
      //jpvolumecontrols.appendChild(jpvolumebar);

  var jpvolumebarvalue = document.createElement('div');
      jpvolumebarvalue.setAttribute('class', 'jp-volume-bar-value')
      //jpvolumebar.appendChild(jpvolumebarvalue);

  var jptimeholder = document.createElement('div')
      jptimeholder.setAttribute('class', 'jp-time-holder');
      //jpgui.appendChild(jptimeholder);

  var jpcurrenttime = document.createElement('div');
      jpcurrenttime.setAttribute('class', 'jp-current-time');
      jpcurrenttime.setAttribute('role', 'timer')
      jpcurrenttime.setAttribute('aria-label', 'time');
      jpcurrenttime.innerHTML = "&nbsp";
      //jptimeholder.appendChild(jpcurrenttime);

  var jpduration = document.createElement('div');
      jpduration.setAttribute('class', 'jp-duration');
      jpduration.setAttribute('role', 'timer')
      jpduration.setAttribute('aria-label', 'duration');
      jpduration.innerHTML = "&nbsp;";
      //jptimeholder.appendChild(jpduration)
  
  var jpdetails = document.createElement('div');
      jpdetails.setAttribute('class', 'jp-details');
      //jptypesingle.appendChild(jpdetails);

  var jptitle = document.createElement('div');
      jptitle.setAttribute('class', 'jp-title')
      jptitle.setAttribute('aria-label', 'title')
      jptitle.innerHTML = "&nbsp;";
      //jpdetails.appendChild(jptitle);

  var jpnosolution = document.createElement('div');
      jpnosolution.setAttribute('class', 'jp-no-solution');
      jpnosolution.innerHTML = "<span>Update Required</span>To play the media you will need to either update your browser to a recent version or update your";
      //jptypesingle.appendChild(jpnosolution);

      jptimeholder.appendChild(jpcurrenttime, jpduration)
      jpvolumebar.appendChild(jpvolumebarvalue)
      jpvolume.appendChild(jpmute, jpvolumemax, jpvolumebar)
      jpseekbar.appendChild(jpplaybar)
      jpprogress.appendChild(jpseekbar)
      jpcontrols.appendChild(jpplay);
      jpgui.appendChild(jpcontrols, jpprogress, jpvolumecontrols, jptimeholder);
      jpdetails.appendChild(jptitle);
      document.getElementById('jptypesingle').appendChild(jpgui);
});
*/



});

