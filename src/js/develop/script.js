function circleMove(){
  $('.section3').mousemove(function(e){
/*    console.log(e.pageX + ", " + e.pageY);*/
    
    var grayCircle = $('.gray');
    var blackCircle = $('.black');
    var silverCircle = $('.silver');

    //begin gray circle
    if(e.pageX > 630) {
      grayCircle.removeClass('right').addClass('left');
    } else if (e.pageX < 630) {
      grayCircle.removeClass('left').addClass('right');
    }
    if(e.pageY > 3335) {
      grayCircle.removeClass('up').addClass('down');
    } else if (e.pageY < 3335) {
      grayCircle.removeClass('down').addClass('up');
    }
    //end gray circle

    //begin black circle
    if(e.pageX > 835) {
      blackCircle.removeClass('right').addClass('left');
    } else if (e.pageX < 835) {
      blackCircle.removeClass('left').addClass('right');
    }
    if(e.pageY > 3300) {
      blackCircle.removeClass('up').addClass('down');
    } else if (e.pageY < 3300) {
      blackCircle.removeClass('down').addClass('up');
    }
    //end black circle

    //begin silver circle
    if(e.pageX > 1050) {
      silverCircle.removeClass('right').addClass('left');
    } else if (e.pageX < 1050) {
      silverCircle.removeClass('left').addClass('right');
    }

    if(e.pageY > 3330) {
      silverCircle.removeClass('up').addClass('down');
    } else if (e.pageY < 3330) {
      silverCircle.removeClass('down').addClass('up');
    }
    //end silver circle
  });
}

function circleScroll() {
  var st = $(this).scrollTop();
  var wrap = $('.mac-wrap').offset().top;
  if ($(window).scrollTop() >= wrap) {
    $('.circle-scroll').addClass('active');
  }
}

function parallax(){
  // begin right screens
  var creationRight = $(this).scrollTop() - $('.creation-second, .creation-fourth').offset().top;
  $('.creation-second, .creation-fourth').css({
    'transform' : 'translate(0px, '+ creationRight / 4 +'px)'
  });

  // begin left screens
  var creationLeft = $(this).scrollTop() - $('.creation-first, .creation-third').offset().top;
  $('.creation-first, .creation-third').css({
    'transform' : 'translate(0px, '+ creationLeft / 5.9 +'px)'
  });
 
}

$(document).ready(function(){
  circleMove(); 
});

$(window).load(function(){

});

$(window).resize(function(){

});


$(window).scroll(function(){
  circleScroll();
  parallax();
});