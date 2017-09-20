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
		console.log('test fkasdjklasd');

		$('#sprint').toggleClass('active');
		
	});

	//services trigger

	// $('.dsn').on('click', function(){
	// 	$('.page-wrapper').toggleClass('dsn-active');
	// });
	// $('.dvt').on('click', function(){
	// 	$('.page-wrapper').toggleClass('dvt-active');
	// });
	// $('.sty').on('click', function(){
	// 	$('.page-wrapper').toggleClass('sty-active');
	// });
	



	 uiServices.owlCarousel({
	 	lazyLoad: true,

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
	 $('#bodySlider').owlCarousel({
	 	
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
	 owl.on('mousewheel', '.owl-stage', function (e) {
	    if (e.deltaY>0) {
	        owl.trigger('prev.owl');
	    } else {
	        owl.trigger('next.owl');
	    }
	    e.preventDefault();
	});
	//masthead anime animations
	var nutShells = anime.timeline({
		
	});

	nutShells
		.add({
			targets: '#nutShells .text-with-bg.center',
			translateY:[ { value:-500 }, { value: -600 }, { value: -650 } ],
			translateX:[ { value: 0 }, { value: 300 }, { value: 320 } ],
			opacity: 1,
			easing: 'easeOutExpo',
			duration: 2000

		})
		.add({
			targets: '#nutShells .text-with-bg.top',
			translateY:[ { value:-500 }, { value: -600 },{ value: -850 } ],
			translateX:[ { value: 0 }, { value: 300 }, { value: 350 } ],
			opacity: 1,
			easing: 'easeOutExpo',
			duration: 2000,
			offset: 0

		})
		.add({
			targets: '#nutShells .text-with-bg.left',
			translateY:[ { value:-500 }, { value: -600 }, { value: -400 } ],
			translateX:[ { value: 0 }, { value: 300 }, { value: 150 } ],
			opacity: 1,
			easing: 'easeOutExpo',
			duration: 2000,
			offset: 0

		})
		.add({
			targets: '#nutShells .text-with-bg.right',
			translateY:[ { value:-500 }, { value: -600 }, { value: -500} ],
			translateX:[ { value: 0 }, { value: 300 }, {value: 700} ],
			opacity: 1,
			easing: 'easeOutExpo',
			duration: 2000,
			offset: 0

		})
		.add({
			targets: '#nutShells .section-title',
			opacity:1,
			translateX: 300,
			easing: 'easeOutExpo',
			duration: 500
		})
		.add({
			targets: '#nutShells .section-header',
			opacity:1,
			translateX: 300,
			easing: 'easeOutExpo',
			duration: 500
			
		})
		.add({
			targets: '#nutShells .section-subheader',
			opacity:1,
			translateX: 300,
			easing: 'easeOutExpo',
			duration: 500
		})

 			
 	// $.scrollify();
});
