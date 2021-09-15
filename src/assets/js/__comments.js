$(function () {
	var commentsOptions = {};
	if ($(".commentsCaroucel-container .commentsCaroucel-slide").length) {
		commentsOptions = {
			slidesPerView: 4,
			loop: false,
			spaceBetween: 0,
			// centeredSlides: true,
			speed: 600,
			autoplay: {
				delay: 15000,
				disableOnInteraction: true,
			},
			navigation: {
				nextEl: ".commentsCaroucel__right",
				prevEl: ".commentsCaroucel__left",
			},
			keyboard: true,
			watchOverflow: true,
			pagination: {
				el: ".commentsCaroucel__pagination",
				type: "bullets",
				dynamicBullets: false,
				clickable: true,
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
					spaceBetween: 0,
				},
				414: {
					slidesPerView: 1.5,
					spaceBetween: 0,
				},
				480: {
					slidesPerView: 2,
					spaceBetween: 0,
				},
				600: {
					slidesPerView: 2.5,
					spaceBetween: 0,
				},
				820: {
					slidesPerView: 3,
					spaceBetween: 0,
				},
				1024: {
					slidesPerView: 4,
					spaceBetween: 0,
				},
			},
		};
	}
	var swiper = new Swiper(".commentsCaroucel-container", commentsOptions);

	function cutLongString(element, count_lit) {
		var text = element.html();
		var all_len = text.length;
		var new_text;
		if (all_len > count_lit) {
			new_text = text.substr(0, count_lit - 3) + "...";
			element.html(new_text);
		}
	}

	$(".cutLongString150").each(function () {
		if ($(this).length) {
			cutLongString($(this), 150);
		}
	});

	$(".commentsCard__more").on("click", function () {
		var AllText = $(this).closest(".commentsCard__textArea").find(".commentsCard__textAll");
		if ($(this).hasClass("open")) {
			$(this).removeClass("open").text("Читать весь отзыв");
			AllText.slideUp();
		} else {
			$(this).addClass("open").text("Свернуть");
			AllText.slideDown();
		}
	});
});
