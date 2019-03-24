// var
//     images_length = document.images.length,
//     videos = document.getElementsByTagName("video");
$(window).on('load', function () {
    setTimeout(function () {
        $('.preloader').fadeOut(400).queue(function () {
            $('.preloader').remove();
        });
    }, 300);
});

$(document).ready(function () {
    // var
    //     images = $('img'),
    //     images_count = images.length,
    //     video = $('video'),
    //     video_count = video.length,
    //     loaded_elems = 0,
    //     percent = $('.percent');
    // for(var i = 0; i < images_count; i++){
    //     images[i].onload = elem_loaded;
    //     images[i].onerror = elem_loaded;
    // }
    // for(var j = 0; j < video_count; j++){
    //     video[j].onload = elem_loaded;
    //     video[j].onerror = elem_loaded;
    // }
    // function  elem_loaded(){
    //     loaded_elems++;
    //     percent.text((((100/(images_count))*(loaded_elems)) <<0)+ '%');
    // }
    // if(loaded_elems >= (images_count+video_count)){
    //     setTimeout(function () {
    //         $('.preloader').fadeOut(400).queue(function () {
    //             $('.preloader').remove();
    //         });
    //     }, 300);
    // }
// preloader

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

//aosPlugin
        new AOS.init({
            // Global settings:
            disable: 'mobile', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 0, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 400, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: true, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'bottom-top', // defines which position of the element regarding to window should trigger the animation
        });


//magnific-popup
    $('.pic').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        removalDelay: 300,
        mainClass: 'mfp-fade',
    });

});