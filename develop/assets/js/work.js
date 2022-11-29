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
         if ($(this).parent().hasClass('open')) {
            $hide.fadeOut();
            $(this).parent().removeClass('open');
            $(this).find($text).html('Развернуть');
            $(this).find($arrow).removeClass('rotate');
            $(this).closest('.element__holder').find('.line_sm').removeClass('hide');
            $(this).closest('.element__holder').find('.line_full').addClass('hide');
         } else {
            $('.open').removeClass('open');
            $hide.fadeIn();
            $(this).parent().addClass('open');
            $(this).find($text).html('Свернуть');
            $(this).find($arrow).addClass('rotate');
            $(this).closest('.element__holder').find('.line_full').removeClass('hide');
            $(this).closest('.element__holder').find('.line_sm').addClass('hide');
         }
      }
      
   }
   
   /* плавный скрол */
   
   if ($('.move__link').length > 0) {
    
      $('.move__link').on( 'click', function(event) {
         
         event.preventDefault();
         
         let top  = $('#container').offset().top;
         
         $('body, html').animate({scrollTop: top - 30 }, 700); // плавно переходим к блоку
   
      });
      
   }
   
   
});
