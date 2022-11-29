$(document).ready(function () {
   /* читать дальше */
   
   if ($('.element__more').length > 0) {
      
      let $element__more = $('.element__more'),
          $hide = $('.hidden'),
          $arrow = $('.element__more_arrow'),
          $text = $('.element__more_text'),
          $link = $('.element__link');
      $element__more.on('click', openAnswer);
      
      function openAnswer() {
         if ($(this).closest('.element__holder').hasClass('open')) {
            $(this).closest('.element__holder').find($hide).fadeOut();
            $(this).closest('.element__holder').find($link).fadeOut();
            $(this).closest('.element__holder').removeClass('open');
            $(this).find($text).html('Развернуть');
            $(this).find($arrow).removeClass('rotate');
            $(this).closest('.element__holder').find('.line_sm').removeClass('hide');
            $(this).closest('.element__holder').find('.line_full').addClass('hide');
         } else {
            $('.open').removeClass('open');
            $(this).closest('.element__holder').find($hide).fadeIn();
            $(this).closest('.element__holder').find($link).fadeIn();
            $(this).closest('.element__holder').addClass('open');
            $(this).find($text).html('Свернуть');
            $(this).find($arrow).addClass('rotate');
            $(this).closest('.element__holder').find('.line_full').removeClass('hide');
            $(this).closest('.element__holder').find('.line_sm').addClass('hide');
         }
      }
      
   }
   
   /* плавный скрол */
   
   if ($('.move__button').length > 0) {
    
      $('.move__button').on( 'click', function() {
         $('body, html').animate({scrollTop: 0 }, 600); // плавно переходим наверх
      });
      
   }
   
   
});
