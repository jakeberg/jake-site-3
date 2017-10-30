$(document).ready(function() {
  $('#modal1, #modalOne, #modalOneV, #modal2, #modal3, #modal4, #modalFour, #modalFourV, #modal5, #modal6, #modal7, #modal8, #modal9').on('hidden.bs.modal', function() {
    var $this = $(this).find('iframe'),
      tempSrc = $this.attr('src');
    $this.attr('src', "");
    $this.attr('src', tempSrc);
  });
});




$(window).scroll(function () {
    var wScroll = $(this).scrollTop(); 
    $('.logo, .logoSm').css ({
        'transform' : 'translate(0px, '+ wScroll /4 +'%)'
    })
    if(wScroll > $('.cross-container1').offset().top - 400) {
        $('.row .figure').each (function(){         
             $('.row .figure').addClass('is-showing')    
        });
    }
})



$(document).ready(function() {
    
    $('p').fadeIn(2000);
    $('.divider1').fadeIn(2000);
    $('.divider2').fadeIn(2000);
    $('.divider3').fadeIn(2000);
    $('.panel').fadeIn(2000);
    
      });

$(document).ready(function() {
    
   $('#btn1').click(function() {
       $('.cross-container1').slideToggle();
   })
    
      });


$(document).ready(function() {
    
   $('#btn2').click(function() {
       $('.cross-container2').slideToggle();
   })
    
      });
$(document).ready(function() {
    
   $('#btn3').click(function() {
       $('.cross-container3').slideToggle();
   })
    
      });

$(document).ready(function() {
    
   $('#btn4').click(function() {
       $('.cross-container4').slideToggle();
   })
    
      });



















