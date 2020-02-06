$('nav .menu-icon').click(function() {
  $('.menu ul').slideToggle();
  $('.menu ul ul').css('display', 'none');
});

$('.menu ul li').click(function() {
  $('.menu ul ul').slideUp();
  $(this)
    .find('ul')
    .slideToggle();
});

$(window).resize(function() {
  if ($(window).width() > 700) {
    $('ul').removeAttr('style');
  }
});
