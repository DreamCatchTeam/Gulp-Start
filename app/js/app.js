(function($){
  $(function() {
    $('.menu__icon').on('click', function() {
      $(this).closest('.header').toggleClass('header_state_open');
    });
  });
});