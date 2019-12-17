$(function(){
    $('.burger').on('click', function() {
      $(this).toggleClass('active');
      console.log(123);
      $('.open').toggleClass ('in',3000);
      console.log(456);
      return false;
    });
  });