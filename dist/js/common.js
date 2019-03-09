$(document).ready(function () {

//responsive menu
    $('.toggle-button').click(function () {
        $('nav').slideToggle();
    });
    $(window).resize(function () {
        if ($(window).width() > 576) {
            $('nav').removeAttr('style')
        }
    });

//slider
    var slideIndex = 0;
    showSlides();

    function showSlides() {
        for (var i = 0; i < $('.slides').length; i++) {
            $('.slides')[i].style.display = 'none';
        }
        slideIndex++;
        if (slideIndex > 3) {
            slideIndex = 1;
        }
        $('.slides')[slideIndex - 1].style.display = 'block';
        setTimeout(showSlides, 8000);
    }

//scrollTopButton
    var ScrollTop = $('button.scrollTop');
    $(document).scroll(function () {
        if ($(document).scrollTop() > 160) {
            ScrollTop.fadeIn("slow", function () {
                ScrollTop.css('transition', 'opacity .3s ease');
            });
        } else {
            ScrollTop.fadeOut();
            ScrollTop.css('transition', 'none');
        }
    });
    ScrollTop.click(function () {
        $('html, body').animate({scrollTop: 0}, 800, "swing");
    });

//smoothScroll
    $('a[href^="#"]').click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        $('body, html').animate({scrollTop: destination}, 800);
        return false;
    });

//wowPlugin
    new WOW().init();

});