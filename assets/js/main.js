$(document).ready(function() {

    new WOW().init();

    var dsn = $('#dsn-carousel').owlCarousel({
        loop: true,
        margin: 10,
        dots: true,
        autoplay: false,
        autoplayTimeout: 7000,
        autoplayHoverPause: true,
        items: 1,
        nav: false
    });
    
    var dvt = $('#dvt-carousel').owlCarousel({
        loop: true,
        margin: 10,
        dots: true,
        autoplay: false,
        autoplayTimeout: 7000,
        autoplayHoverPause: true,
        items: 1,
        nav: false
    });

    $('#dvt-carousel .next-slide').on('click', function (e) {
        console.log('asdsa');
        e.preventDefault();
        dvt.trigger('next.owl.carousel');
        
    });
    $('#dsn-carousel .next-slide').on('click', function (e) {
        console.log('asdsa');
        e.preventDefault();
        dsn.trigger('next.owl.carousel');
    });

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
        loop: true,
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

    $(function() {
		$.scrollify({
			section : ".section",
            sectionName : false,
		});
	});


});