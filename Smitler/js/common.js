$(function() {
	//hamburger init
	$('#my-menu').mmenu({
		extensions: [ 'widescreen', 'theme-black', 'effect-menu-slide', 'pagedim-black'],
		navbar: {
			title: '<img src="img/logo-1.svg" alt="Салон красоты Смитлер">'
		},
		offCanvas: {
			position:'right'
		}
	})

	//hamburger menu
	var api = $('#my-menu').data('mmenu');
	api.bind('opened', function(){
		$('.hamburger').addClass('is-active');
	}).bind('closed', function(){
		$('.hamburger').removeClass('is-active');
	});

	//carousel-services function timeout
	$('.carousel-services').on('initialized.owl.carousel', function() {
		setTimeout(function(){
			carouselService()
		},100)
	})
	//settings carousel services
	$('.carousel-services').owlCarousel({
		loop: true,
		nav:true,
		smartSpeed: 500,
		navText: ['<i class="fas fa-angle-double-left"></i>','<i class="fas fa-angle-double-right"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			800: {
				items: 2
			},
			1100: {
				items: 3
			}
		}
	});

	

	// carousel-services__item  definition img height

	function carouselService(){
		$('.carousel-services__item').each(function() {
			let thisHeight = $(this).find('.services__item-content').outerHeight();
			$(this).find('.services__item-img').css('min-height', thisHeight)
		});
	}

	//selectize

	$('select').selectize();

	//review carousel

	$('.reviews.owl-nav.disabled').hide();

	$('.reviews').owlCarousel({
		loop: true,
		smartSpeed: 500,
		nav: false,
		autoHeight: true,
		items: 1
	});

	//partners carousel
	$('.partners-carousel').owlCarousel({
		loop: true,
		smartSpeed: 500,
		dots: false,
		navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
		items: 3,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			992: {
				items: 2
			},
			1200: {
				items:3
			}
		}
	});

	//button to up
	$(window).scroll(function(){
		if($(this).scrollTop() > $(this).height()){
			$('.top').addClass('active');
		}else{
			$('.top').removeClass('active');
		}
	});
	$('.top').click(function(){
		$('html,body').stop().animate({
			scrollTop: 0
		},'slow', 'swing')
	})

	//E-mail Ajax Send
	$("form.callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.callback-success').addClass('active').css('display','flex').hide().fadeIn();
			setTimeout(function() {
				$(th).find('.callback-success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

	// resize window autoHaight

	function onResize(){
		$('.services__item-content').equalHeights();
	};
	

	window.onresize = function(){
		onResize();
	};
	
});

//preloader

$(window).on('load',function(){
	$('.preloader').delay(1000).fadeOut('slow');
})
