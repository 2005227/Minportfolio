

let nowimg = 1;

$('#about').click(function(){

  if($('.index-main').hasClass("works")){
    $('.index-main').removeClass("works");
    $('.Worksbtn').fadeOut(600);
    $('#img-card').addClass("flip");

    setTimeout(aboutshow, 600);
  }
  else if($('.index-main').hasClass("work")){
    $('.work-index').fadeOut(600)
    nowimg = 1;
    $('.work-img').css('transform', 'translate( 0% ,-50%)');
    $('.work-intro-main').css('transform', 'translate( 0%  ,-50%)');
    $('.index-main').removeClass("work");
    $('.work-index').removeClass('show')
    $('#img-card').addClass("flip");

    setTimeout(aboutshow, 600);
  }
  else{
    if(!$( "#img-card" ).hasClass( "flip" )){
      $('#img-card').addClass("flip");
      $('#main-works').addClass("about-show");
      $('#about-move').addClass("about-show");
      $('#about-main').addClass("about-show");
    }
  }


  function aboutshow(){
    $('.main').fadeIn(600);
    $('.Worksbtn').removeClass("works"); 
      $('#main-works').addClass("about-show");
      $('#about-main').addClass("about-show");
      $('#about-move').addClass("about-show");
  }


});

$('#home').click(function(){

  if($('.index-main').hasClass("works")){
    $('.index-main').removeClass("works");
    $('.Worksbtn').fadeOut(600);
    setTimeout(homeshow, 600);
  }
  else if($('.index-main').hasClass("work")){
    $('.work-index').fadeOut(600);
    nowimg = 1;
    $('.work-img').css('transform', 'translate( 0% ,-50%)');
    $('.work-intro-main').css('transform', 'translate( 0%  ,-50%)');
    $('.index-main').removeClass("work");
    $('.work-index').removeClass('show')
    setTimeout(homeshow, 600);
  }
  else{
    if($( "#img-card" ).hasClass( "flip" )){
      $('#img-card').removeClass("flip");
      $('#main-works').removeClass("about-show");
      $('#about-move').removeClass("about-show");
      $('#about-main').removeClass("about-show");
    }
  }
  function homeshow(){
    $('.Worksbtn').removeClass("works"); 
    $('.main').fadeIn(600);
    $('#main-works').fadeIn(600);
  }
});

$('#works').click(function(){
  if($('.index-main').hasClass('work')){
    backtoworks();
  }
  else{
    $('.main').fadeOut(600);
    $('#main-works').fadeOut(600);
  
    setTimeout(workbtn, 700);
  
    function workbtn() {     
      $('.index-main').removeClass("work");
      $('.index-main').addClass("works");

      $('.Worksbtn').addClass("works");
      if($( "#img-card" ).hasClass( "flip" )){
          $('#img-card').removeClass("flip");
          $('#main-works').removeClass("about-show");
          $('#about-move').removeClass("about-show");
          $('#about-main').removeClass("about-show");
      }
      $('.Worksbtn').fadeIn(600);
    }
  }


});

$('.Worksbtn').click(function(event){
  switch(event.target.outerText){
    case 'Illustration':
      $('.index-main').removeClass("works");
      $('.Worksbtn').fadeOut(600);
      setTimeout(worksshow('#illustration'), 600);
      break;
    case 'Graphic Design':
      $('.index-main').removeClass("works");
      $('.Worksbtn').fadeOut(600);
      setTimeout(worksshow('#graphicdesign'), 600);
      break;
    case 'UI/UX Design':
      $('.index-main').removeClass("works");
      $('.Worksbtn').fadeOut(600);
      setTimeout(worksshow('#uiux'), 600);
      break;
    case 'Video Production':
      $('.index-main').removeClass("works");
      $('.Worksbtn').fadeOut(600);
      setTimeout(worksshow('#video'), 600);
      break;
  }



  function worksshow(_pagename){

      $('.Worksbtn').removeClass("works"); 
      $('.index-main').addClass("work"); 
      $(_pagename).find('#backbtn').addClass('show')

    setTimeout(backbtnshow(_pagename), 600);

    function backbtnshow(_pagename){
      $(_pagename).fadeIn(600)
      $(_pagename).addClass('show')
    }

  }

});


$('.index-workbtn').click(function(event){
  switch(event.target.outerText){
    case 'Illustration':
      $('.main').hide();
      $('#main-works').hide();
      setTimeout(worksshow('#illustration'), 800);
      break;
    case 'Graphic Design':
      $('.main').hide();
      $('#main-works').hide();
      setTimeout(worksshow('#graphicdesign'), 800);
      break;
    case 'UI/UX Design':
      $('.main').hide();
      $('#main-works').hide();
      setTimeout(worksshow('#uiux'), 800);
      break;
    case 'Video Production':
      $('.main').hide();
      $('#main-works').hide();
      setTimeout(worksshow('#video'), 800);
      break;
  }



  function worksshow(_pagename){

      $('.index-main').addClass("work"); 
      $(_pagename).find('#backbtn').addClass('show')

    setTimeout(backbtnshow(_pagename), 800);

    function backbtnshow(_pagename){
      $(_pagename).fadeIn(600)
      $(_pagename).addClass('show')
    }

  }

});



$('.backbtn').click(function(){
  backtoworks();
});

function backtoworks(){
  nowimg = 1;
  $('.work-index').fadeOut(600)
  $('.work-img').css('transform', 'translate( 0% ,-50%)');
  $('.work-intro-main').css('transform', 'translate( 0%  ,-50%)');
  $('.work-index').removeClass('show')
  $('.index-main').removeClass("work"); 
  setTimeout(workbtn, 700);


  function workbtn() {     
    $('.index-main').addClass("works");
    $('.Worksbtn').addClass("works");
    if($( "#img-card" ).hasClass( "flip" )){
        $('#img-card').removeClass("flip");
        $('#main-works').removeClass("about-show");
        $('#about-move').removeClass("about-show");
        $('#about-main').removeClass("about-show");
    }
    $('.Worksbtn').fadeIn(600);

  }
}

const about = document.getElementById("about-main");;

$('#about-move').click(function(){

  about.scrollIntoView({behavior: "smooth"});
});


if(window.innerHeight <= window.innerWidth){
  $('#img-card').css({"width":"60vh", "height":"60vh"});
}
else{
  $('#img-card').css({"width":"40vw", "height":"40vw"});
};






$('.img-btn').click(function (event) {
  let target = event.target.id;
  let page = $( event.target ).closest(".work-index").attr('id');
    switch(page){
      case 'illustration':
        clickevent(target, '#illustration')
      break;
      case 'graphicdesign':
        clickevent(target, '#graphicdesign')
      break;
      case 'uiux':
        clickevent(target, '#uiux')
      break;
      case 'video':
        clickevent(target, '#video')
      break;
    }

    function clickevent(target ,page){
          if (target == 'prev-btn') {
        if (nowimg <= $(page).find('.work-img').length && nowimg > 1) {
            nowimg = nowimg - 1;
            $(page).find('.work-img').css('transform', 'translate(' + ((nowimg - 1) * (-100)) + '% ,-50%)');
            $(page).find('.work-intro-main').css('transform', 'translate(' + ((nowimg - 1) * (-100)) + '%  ,-50%)');
        }
    }
    else {
        if (nowimg >= 1 && nowimg < $(page).find('.work-img').length) {
            nowimg = nowimg + 1;
            $(page).find('.work-img').css('transform', 'translate(' + ((nowimg - 1) * (-100)) + '% ,-50%)');
            $(page).find('.work-intro-main').css('transform', 'translate(' + ((nowimg - 1) * (-100)) + '% ,-50%)');
        }

    }
    }

});