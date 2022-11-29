$(document).ready(function () {
   /* читать дальше */
   
   if ($('.element__more').length > 0) {
      
      let $element__more = $('.element__more'),
          $hide = $('.hidden'),
          $arrow = $('.element__more_arrow');
      $element__more.on('click', openAnswer);
      
      function openAnswer() {
         if ($(this).parent().hasClass('open')) {
            $hide.fadeOut();
            $(this).parent().removeClass('open');
            $(this).html('Развернуть');
            $(this).find($arrow).removeClass('rotate');
            $(this).closest('.element__holder').find('.line_sm').removeClass('hide');
            $(this).closest('.element__holder').find('.line_full').addClass('hide');
         } else {
            $hide.fadeIn();
            $(this).parent().addClass('open');
            $(this).html('Свернуть');
            $(this).find($arrow).addClass('rotate');
            $(this).closest('.element__holder').find('.line_full').removeClass('hide');
            $(this).closest('.element__holder').find('.line_sm').addClass('hide');
         }
      }
      
   }
   
   /* плавный скрол */
   
   if ($('.nav__link').length > 0) {
    
      $('.nav__link').on( 'click', function(event) {
         
         event.preventDefault();
         
         let id  = $(this).attr('href'),
             top = $(id).offset().top; // получаем координаты блока
         
         $('body, html').animate({scrollTop: top - 30 }, 700); // плавно переходим к блоку
   
      });
      
   }
   
   
});
