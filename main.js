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
    strings: ['Font-End Developer', 'Back-End Developer', 'PHP Laravel Developer'],
    typeSpeed: 80,
    loop:true
  })
});





$(document).ready(function () {
  $("#form").validate({
    rules:{
      email:{
        email:true,
        required: true,
      },
      textarea:{
        
        required:true,
      },
      username:{
        
        required:true,
      },
    },
    messages: {
      email:{
        required:"Please Enter Your Email"
      },
      textarea:{
        required:"Please Write Something"
      },
      username:{
        required:"Please Enter Your Name"
      },
    },


    submitHandler: function(form) {
      // form.submit();
      $("#successMessage").show();
      form.reset();
      setTimeout(function() {
        $("#successMessage").hide();
      }, 3000);
      
      
    },
    });

});




