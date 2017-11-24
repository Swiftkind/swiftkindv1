$(document).ready(function() {
    function afterReveal (el) {
        $('.letters').each(function(){
            $(this).html($(this).text().replace(/([^\s])/g, "<span class='letter'>$&</span>"));
        });

        anime.timeline({loop: false})
            .add({
              targets: '.letter',
              scale: [0.3,1],
              opacity: [0,1],
              translateZ: 0,
              easing: "easeOutExpo",
              duration: 40,
              delay: function(el, i) {
                return 40 * (i+1)
              }
            });
    }

    new WOW({
        callback: afterReveal
    }).init();

    $('#testimonies').owlCarousel({
        loop: true,
        dots: false,
        autoplay: false,
        autoplayTimeout:5000,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            },
            1500: {
                items: 1
            }
        }
    });
    $('#team-carousel').owlCarousel({
        loop: false,
        dots: false,
        autoplay: false,
        autoplayTimeout: 7000,
        nav: true,
  		navText: ["<img src='/static/images/next-slide.svg'>","<img src='/static/images/next-slide.svg'>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 5
            },
            1500: {
                items: 6
            }
        }
    });
    $('.pagelinks').carousel({
        autoplay: true
    });


    $('.mobile-nav').on('click', function(e){
        $('#page-wrapper').toggleClass('show-mnav');
        e.preventDefault();
    });


    $('html').on('DOMMouseScroll mousewheel', function(e) {
        var scrollTop;
        scrollTop = $(window).scrollTop();
        if (scrollTop < 190) {
            $('.main-nav').removeClass('scroll-top');
        }
        if (scrollTop > 200 && scrollTop < 210) {
            $('.main-nav').removeClass('scroll-top');
        }
        if (scrollTop > 400 && scrollTop < 410) {
            $('.main-nav').removeClass('scroll-top');
        }
        if (scrollTop > 700) {
            $('.main-nav').addClass('hide-nav');
            $('.main-nav').removeClass('scrolling');
            if (e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) {
                $('.main-nav').addClass('hide-nav');
                $('.main-nav').removeClass('scrolling');
            }
            if (e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0) {
                $('.main-nav').removeClass('hide-nav');
                $('.main-nav').addClass('scroll-top');

            }
        }

    });
    //show tech icons

    $('.show-tech').on('click', function(e) {
        $('.tech-wrapper').toggleClass('icon-show');
        e.preventDefault();
    });


    //process link
    $('.our-process a').on('click', function (e) {
        e.preventDefault();
    })

 //    $(function() {
	// 	$.scrollify({
	// 		section : ".section",
 //            sectionName : false,
	// 	});
	// });


});