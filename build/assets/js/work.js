$(document).ready(function () {
   /* читать дальше */
   
   if ($('.element__more').length > 0) {
      
      let $element__more = $('.element__more'),
          $hide = $('.hidden'),
          $arrow = $('.element__more_arrow'),
          $text = $('.element__more_text'),
          $link = $('.element__link span');
      $element__more.on('click', openAnswer);
      
      function openAnswer() {
         let parent = $(this).closest('.element__holder');
         
         if (!parent.hasClass('open')) {
            
            $('.open').removeClass('open');
            $hide.slideUp(400);
            $link.fadeOut();
            $('.element__holder').removeClass('open');
            $text.html('Развернуть');
            
            parent.find($hide).slideDown(400); // ради чего всё затевалось - показать скрытое
            parent.find($link).fadeIn();
            parent.addClass('open');
            $(this).find($text).html('Свернуть');
            
         } else {
            parent.find($hide).slideUp(400);
            parent.find($link).fadeOut();
            parent.removeClass('open');
            $(this).find($text).html('Развернуть');
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
