$(document).ready(function(){

  $('.home_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    dots: true,
    fade: false,
    autoplay: true,
    swipe: true,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    smartSpeed: 500,
    pauseOnHover: true,
  });


  $("#video").magnificPopup({
    type:'iframe',
    iframe: {
       patterns: {
         youtube: {
           index: 'youtube.com/',
     
           id: 'v=',
           src: 'https://www.youtube.com/embed/%id%?autoplay=1'
         },
     
       },
     
       srcAction: 'iframe_src',
     }
 });

  $('.review_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    fade: true,
    asNavFor: '.review_nav',
    autoplay: true,
    swipe: true,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  });

  $('.review_nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    asNavFor: '.review_slider',
    dots: false,
    centerMode: true,
    centerPadding: 0,
    prevArrow: '.prev',
    nextArrow: '.next',
    focusOnSelect: true,
    autoplay: true,
    swipe: true,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    smartSpeed: 500,
    pauseOnHover: true,
  });

//Top Button
$(window).scroll(function(){
  if($(this).scrollTop() > 20){
    $('#topbtn').fadeIn();
  } else {
    $('#topbtn').fadeOut();
  }
});


$('#topbtn').click(function(){
  $('html,body').animate({scrollTop: 0}, 500);
});


//Sticky Menu
$('.sticky-menu').waypoint(function(direction){
  if(direction == 'down'){
    $('nav').addClass('sticky-nav')
  } else{
    $('nav').removeClass('sticky-nav')
  }
});



  });
          
