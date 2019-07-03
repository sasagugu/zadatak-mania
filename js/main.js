$(document).ready(function(){
  $('.slider').slick({
    accessibility: true,
    autoplay: true,
    prevArrow: "<button type=\"button\" class=\"prev\"><img src=\"https://image.flaticon.com/icons/png/512/53/53567.png\" alt=\"\"></button>",
    nextArrow: "<button type=\"button\" class=\"next\"><img src=\"https://image.flaticon.com/icons/png/512/53/53567.png\" alt=\"\"></button>"
  });
});

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

