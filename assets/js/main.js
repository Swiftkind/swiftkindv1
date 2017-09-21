$(document).ready(function () {
	var s = skrollr.init();
	new WOW().init();

	var owl = $('.owl-carousel#uiServices');
	var uiServices = $('#uiServices');
	
	//navbar trigger
	$('.navTrigger').on('click', function(e){
		$('.page-wrapper').toggleClass('nav-active');
		 e.preventDefault();
	});

	//process trigger
	$('#sprint-trigger').on('click', function(e){
		$('#sprint').toggleClass('active');
		
	});

	var offsetTop = $('.page-wrapper').scrollTop();
		if(offsetTop < 500){
			$('.hd-text').addClass('todelay');
			$('.main-nav').addClass('todelay');
			$('.about-top').addClass('out-animate');
			$('.top-text').addClass('out-animate');

		}

	//to add delay on header elements before wow triggers
	$(window).scroll(function(){
		var scrollTop = $('.page-wrapper').scrollTop();
		if(scrollTop < 500){
			$('.about-top').addClass('out-animate');
			$('.top-text').addClass('out-animate');
		}
	});

	 $('.pagelinks').carousel({
        autoplay: false
    });
	 $('#clients').owlCarousel({
	 	autoplay: true,
	 	nav: false,
    	dots: false,
    	loop: true,
    	autoplayTimeout: 3000,
	 	responsive : {
	 		0 : {
	 			items: 1
	 		},
	 		600 : {
	 			items: 1
	 		},
	 		1000 : {
	 			items: 1
	 		}
	 	}
	 });
});
