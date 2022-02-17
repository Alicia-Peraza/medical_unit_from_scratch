

 <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
posicionarMenu();
 
$(window).scroll(function() {    
    posicionarMenu();
});
 
function posicionarMenu() {
    var altura_del_header = $('.contactoNav').outerHeight(true);
    var altura_del_menu = $('header').outerHeight(true);
    var altura = altura_del_menu + 10;
  
 
    if ($(window).scrollTop() >= altura_del_header){
        $('header').addClass('fixed');
        $('.wrapper').css('margin-top', (altura_del_menu ) + 'px');
    } else {
        $('header').removeClass('fixed');
        $('.wrapper').css('margin-top', '0');
    }
}