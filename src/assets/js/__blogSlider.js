$(function () {
	var blogSliderOptions = {};
	if ($(".blogSlider-container .blogSlider-slide").length) {
		blogSliderOptions = {
			slidesPerView: 1,
			loop: false,
			spaceBetween: 20,
			speed: 600,
			autoplay: {
				delay: 15000,
				disableOnInteraction: true,
			},
			// navigation: {
			//   nextEl: ".blogSlider__right",
			//   prevEl: ".blogSlider__left",
			// },
			pagination: {
				el: ".blogSlider__pagination",
				type: "bullets",
				dynamicBullets: false,
				clickable: true,
			},
			keyboard: true,
			watchOverflow: true,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				414: {
					slidesPerView: 2,
				},
				600: {
					slidesPerView: 3,
				},
				768: {
					slidesPerView: 5,
				},
			},
		};

		var swiper;
		var swiperNowInit = false;
		console.log(swiperNowInit);
		if ($(window).width() <= 768) {
			swiper = new Swiper(".blogSlider-container", blogSliderOptions);
			swiperNowInit = true;
		}
		$(window).on("resize", function () {
			if ($(window).width() <= 768) {
				if (!swiperNowInit) {
					swiper = new Swiper(".blogSlider-container", blogSliderOptions);
					swiperNowInit = true;
				} else {
					swiper.update();
				}
			} else {
				if (swiperNowInit) {
					swiperNowInit = false;
					swiper.destroy();
				}
			}
			console.log(swiperNowInit);
		});
	}

	$(".blogSliderItem__coverVideo").on("click", function (e) {
		e.stopPropagation();
	});

	if (window.history.length > 1) {
		$(".backBtn3__outer").show();
		$(".backBtn3").on("click", function () {
			window.history.back();
		});
	}
});
