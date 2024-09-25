$('.tab_button a').click(function(event){
  index= $(this).index();

  $('.tab_button a').removeClass('active');
  $(this).addClass('active');
  $('.tab_contents').hide();
  $('.tab_contents').eq(index).show();
});


var mixer = mixitup('.project_img');

$(document).ready(function () {
  $('.navbar-nav').on('click', 'a', function(){
    $('.navbar-nav a.active').removeClass('active');
    $(this).addClass('active');
  })
    
});


$(document).ready(function () {
  var typed = new Typed('#element', {
    strings: ['Font-End Developer', 'Back-End Developer', 'PHP Lalavel Developer'],
    typeSpeed: 80,
    loop:true
  })
});
