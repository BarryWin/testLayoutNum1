$(document).ready(function(){
    //responsive menu
    $('.toggle-button').click(function () {
        $('nav').slideToggle();
    });
    $(window).resize(function () {
        if($(window).width()>576){
            $('nav').removeAttr('style')
        }
    });

    //slider
    var slideIndex = 0;
    showSlides();

    function showSlides() {
        for (var i = 0; i < $('.slides').length; i++){
            $('.slides')[i].style.display = 'none';
        }
        slideIndex++;
        if (slideIndex > 3){
            slideIndex = 1;
        }
        $('.slides')[slideIndex - 1].style.display = 'block';
        setTimeout(showSlides, 8000);
    }

});