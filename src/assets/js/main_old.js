$(function () {
	// console.log(strGET);
	// console.log(str);
	// $(".breadcrumbs").html(str);

	$(window).on("scroll", function () {
		if (windowWidth > 600) {
			if ($(this).scrollTop() > topLine3) {
				header3.css({ position: "fixed", top: "0", left: "0" });
				$(".header3__fake").css({ height: header3Height });
			} else if ($(this).scrollTop() <= topLine3) {
				header3.css({ position: "relative" });
				$(".header3__fake").css({ height: "0" });
			}
		}
	});

	// $(window).on("navigate", function (event, data) {
	//   var direction = data.state.direction;
	//   if (direction == "back") {
	//     console.log("Назад");
	//   }
	//   if (direction == "forward") {
	//     console.log("Вперед");
	//   }
	// });

	// $(window).on("navigate", function (event, data) {
	//   console.log(data.state);
	// });

	$(".eBrands__btn").on("click", function (e) {
		// раскрытие и закрытие еБрендов по клику на кнопку
		e.preventDefault();
		e.stopPropagation();
		var $this = $(this);
		var thisBrandsContent = $this.closest(".eBrands__area").find(".eBrands__content");

		if ($(window).width() <= 768) {
			$("html,body")
				.stop()
				.animate({ scrollTop: $this.offset().top - 30 }, 500);
		}

		if ($this.hasClass("eBrands__btn_active")) {
			if ($(window).width() <= 768) {
				thisBrandsContent.slideUp(300);
				setTimeout(function () {
					$this.removeClass("eBrands__btn_active");
					$(".eBrands__overlay").fadeOut(300);
					$("body").removeClass("stop");
					$(".eBrands__area_x").removeClass("mbBtn_100");
					$(".eBrands__btnReset").hide();
					$this.removeClass("eBrands__btn_selectedStyle");
				}, 300);
			} else {
				thisBrandsContent.slideUp(300);
				$this.removeClass("eBrands__btn_active");
				$(".eBrands__overlay").fadeOut(300);
				$("body").removeClass("stop");
				$(".eBrands__area_x").removeClass("mbBtn_100");
				$(".eBrands__btnReset").hide();
				$this.removeClass("eBrands__btn_selectedStyle");
			}
		} else {
			if ($(window).width() <= 768) {
				$(".eBrands__area_x").addClass("mbBtn_100");
				$this.addClass("eBrands__btn_active");
				$(".eBrands__overlay").fadeIn(300);
				$("body").addClass("stop");
				$(".eBrands__btnReset").show();
				$this.addClass("eBrands__btn_selectedStyle");
				setTimeout(function () {
					thisBrandsContent.slideDown(300);
				}, 300);
			} else {
				$this.addClass("eBrands__btn_active");
				$(".eBrands__overlay").fadeIn(300);
				$("body").addClass("stop");
				$(".eBrands__btnReset").show();
				$this.addClass("eBrands__btn_selectedStyle");
				thisBrandsContent.slideDown(300);
			}
		}
	});
	$(".eBrands__btnReset").on("click", function (e) {
		e.stopPropagation();
	});
	$(".eBrands__overlay").on("click", function (e) {
		e.preventDefault();
		e.stopPropagation();
		if ($(window).width() <= 768) {
			$(".eBrands__content").slideUp(300);
			setTimeout(function () {
				$(".eBrands__btn").removeClass("eBrands__btn_active");
				$(".eBrands__btn").removeClass("eBrands__btn_active");
				$(".eBrands__overlay").fadeOut(300);
				$("body").removeClass("stop");
				$(".eBrands__area_x").removeClass("mbBtn_100");
				$(".eBrands__btnReset").hide();
				$(".eBrands__btn").removeClass("eBrands__btn_selectedStyle");
			}, 300);
		} else {
			$(".eBrands__content").slideUp(300);
			$(".eBrands__btn").removeClass("eBrands__btn_active");
			$(".eBrands__btn").removeClass("eBrands__btn_active");
			$(".eBrands__overlay").fadeOut(300);
			$("body").removeClass("stop");
			$(".eBrands__area_x").removeClass("mbBtn_100");
			$(".eBrands__btnReset").hide();
			$(".eBrands__btn").removeClass("eBrands__btn_selectedStyle");
		}
	});

	/*********/
	$(".eFilter2mb__btn").on("click", function (e) {
		// раскрытие и закрытие еБрендов по клику на кнопку
		e.preventDefault();
		e.stopPropagation();
		var $this = $(this);
		var thisBrandsContent = $this.closest(".eFilter2mb__area").find(".eFilter2mb__content");
		if ($this.hasClass("eFilter2mb__btn_active")) {
			thisBrandsContent.slideUp(300);
			setTimeout(function () {
				$this.removeClass("eFilter2mb__btn_active");
				$this.removeClass("eFilter2mb__btn_100");
				$this.next(".eFilter2mb__content").removeClass("eFilter2mb__content_100");
				$(".eFilter2mb__overlay").fadeOut(300);
				$("body").removeClass("stop");
			}, 300);
		} else {
			if ($(window).width() <= 600) {
				$this.next(".eFilter2mb__content").addClass("eFilter2mb__content_100");
				$this.addClass("eFilter2mb__btn_100");
			}
			$this.addClass("eFilter2mb__btn_active");
			$(".eFilter2mb__overlay").fadeIn(300);
			thisBrandsContent.slideDown(300);
			$("body").addClass("stop");
		}
	});
	$(".eFilter2mb__overlay").on("click", function (e) {
		e.preventDefault();
		e.stopPropagation();

		$(".eFilter2mb__content").slideUp(300);
		setTimeout(function () {
			$(".eFilter2mb__btn").removeClass("eFilter2mb__btn_100");
			$(".eFilter2mb__btn").removeClass("eFilter2mb__btn_active");
			$(".eFilter2mb__content").removeClass("eFilter2mb__content_100");
			$(".eFilter2mb__btn").removeClass("eFilter2mb__btn_active");
			$(".eFilter2mb__overlay").fadeOut(300);
			$("body").removeClass("stop");
		}, 300);
	});
	/*********/

	// Скрипт для страницы CatalogFloat - ниже будет переделанный для CayalogX
	// $(".eShopMenu__mobileBtn").on("click", function (e) {
	// 	// раскрытие и закрытие каталога товаров по клику на кнопку каталог в мобиле
	// 	e.preventDefault();
	// 	e.stopPropagation();
	// 	var $this = $(this);
	// 	var thisCatalogContent = $this.closest(".floatBox__left").find(".eShopMenu__outer_catalogOnly");
	// 	if ($this.hasClass("eShopMenu__mobileBtn_active")) {
	// 		$this.removeClass("eShopMenu__mobileBtn_active");
	// 		thisCatalogContent.slideUp(300);
	// 		$(".floatBox__leftOverlay").fadeOut(300);
	// 		$("body").removeClass("stop");
	// 	} else {
	// 		$this.addClass("eShopMenu__mobileBtn_active");
	// 		$(".floatBox__leftOverlay").fadeIn(300);
	// 		thisCatalogContent.slideDown(300);
	// 		$("body").addClass("stop");
	// 	}
	// });
	// $(".floatBox__leftOverlay").on("click", function (e) {
	// 	e.preventDefault();
	// 	e.stopPropagation();
	// 	$(".eShopMenu__mobileBtn").removeClass("eShopMenu__mobileBtn_active");
	// 	$(".eShopMenu__outer_catalogOnly").slideUp(300);
	// 	$(".floatBox__leftOverlay").fadeOut(300);
	// 	$("body").removeClass("stop");
	// });

	$(".eShopMenu__mobileBtn").on("click", function (e) {
		// раскрытие и закрытие каталога товаров по клику на кнопку каталог в мобиле
		e.preventDefault();
		e.stopPropagation();
		var $this = $(this);
		var thisCatalogContent = $this.closest(".eShopMenuCatalog__wrapper").find(".eShopMenu__outer_catalogOnly");

		if ($(window).width() <= 768) {
			$("html,body")
				.stop()
				.animate({ scrollTop: $this.offset().top - 30 }, 500);
		}

		if ($this.hasClass("eShopMenu__mobileBtn_active")) {
			$this.removeClass("eShopMenu__mobileBtn_active");
			thisCatalogContent.slideUp(300).removeClass("eShopMenu__outer_catalogOnly_active");
			$(".eShopMenu__overlay").fadeOut(300);
			$("body").removeClass("stop");
			$(".eShopMenu__mobileBtnReset").hide();
			$this.removeClass("eShopMenu__mobileBtn_brandStyle");
		} else {
			$this.addClass("eShopMenu__mobileBtn_active");
			$(".eShopMenu__overlay").fadeIn(300);
			thisCatalogContent.slideDown(300).addClass("eShopMenu__outer_catalogOnly_active");
			$("body").addClass("stop");
			if ($this.hasClass("eShopMenu__mobileBtn_brand")) {
				$this.addClass("eShopMenu__mobileBtn_brandStyle");
				$(".eShopMenu__mobileBtnReset").show();
			}
		}
	});
	$(".eShopMenu__mobileBtnReset").on("click", function (e) {
		e.stopPropagation();
	});
	$(".eShopMenu__overlay").on("click", function (e) {
		e.preventDefault();
		e.stopPropagation();
		$(".eShopMenu__mobileBtn").removeClass("eShopMenu__mobileBtn_active");
		$(".eShopMenu__outer_catalogOnly").slideUp(300).removeClass("eShopMenu__outer_catalogOnly_active");
		$(".eShopMenu__overlay").fadeOut(300);
		$("body").removeClass("stop");
		$(".eShopMenu__mobileBtnReset").hide();
		$(".eShopMenu__mobileBtn").removeClass("eShopMenu__mobileBtn_brandStyle");
	});

	$(".eSort__item").on("click", function (e) {
		// Сортировка визуал для еКаталога
		e.preventDefault();
		e.stopPropagation();
		var $this = $(this);
		var othereSortItem = $(this).closest(".eSort__area").find(".eSort__item").not(this);
		othereSortItem.removeClass("eSort__item_asc").removeClass("eSort__item_desc").removeClass("eSort__item_active");
		$this.addClass("eSort__item_active");
		if ($this.hasClass("eSort__item_asc")) {
			$this.removeClass("eSort__item_asc");
			$this.addClass("eSort__item_desc");
		} else {
			$this.addClass("eSort__item_asc");
			$this.removeClass("eSort__item_desc");
		}
	});

	function mobileSortBox() {
		// всплывашка сортировки при разрешении меньше 1024
		$(".eGreyLine__mbBtnSort").on("click", function (e) {
			e.preventDefault();
			e.stopPropagation();
			$(".eSort__areaWrapper").fadeIn(300);
			$("body").addClass("stop");
		});
		$(".eSort__areaOuter").on("click", function (e) {
			e.preventDefault();
			e.stopPropagation();
			$(".eSort__areaWrapper").fadeOut(300);
			$("body").removeClass("stop");
		});
		$(".eSortMb__close").on("click", function (e) {
			e.preventDefault();
			e.stopPropagation();
			$(".eSort__areaWrapper").fadeOut(300);
			$("body").removeClass("stop");
		});
		$(".eSort__area_mb").on("click", function (e) {
			e.stopPropagation();
		});
	}
	mobileSortBox();
	$(window).on("resize", function () {
		if ($(window).width() < 1024) {
			mobileSortBox();
		}
	});
	// END--всплывашка сортировки при разрешении меньше 1024

	//-START Слайдер похожих товаров на странице VARIANTS

	var imgSliderOptions = {};
	if ($(".imgSlider-container .imgSlider-slide").length) {
		imgSliderOptions = {
			slidesPerView: 2,
			loop: false,
			spaceBetween: 20,
			speed: 600,
			autoplay: {
				delay: 15000,
				disableOnInteraction: true,
			},
			navigation: {
				nextEl: ".imgSlider__right",
				prevEl: ".imgSlider__left",
			},
			keyboard: true,
			watchOverflow: true,
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
			},
		};
	} else {
		$(".imgSlider__area").addClass("imgSlider__area_lock");
	}
	var swiper = new Swiper(".imgSlider-container", imgSliderOptions);

	// Слайдер товара

	if ($(".eShopTovarSlider").length) {
		// if ($(".eShopTovarSlider__slide_image").length === 1) {
		// 	$("eShopTovarSlider__wrapper_image").addClass("disabled");
		// 	$(".eShopTovarSlider__pagination").addClass("disabled");
		// 	$(".eShopTovarSlider__prev").addClass("disabled");
		// 	$(".eShopTovarSlider__next").addClass("disabled");
		// 	$(".eShopTovarSlider__container_thumb_outer").hide();
		// } else {
		var eShopTovarSlider1Thumbs = new Swiper(".eShopTovarSlider__container_thumb", {
			autoHeight: false,
			spaceBetween: 5,
			slidesPerView: 4,
			loop: false,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
			direction: "vertical",
			centeredSlides: false,
			navigation: {
				nextEl: ".eShopTovarSlider__next",
				prevEl: ".eShopTovarSlider__prev",
			},
			breakpoints: {
				0: {
					slidesPerView: 4,
					direction: "horizontal",
				},
				920: {
					slidesPerView: 4,
					direction: "vertical",
				},
			},
		});
		var eShopTovarSlider1Top = new Swiper(".eShopTovarSlider__container_image", {
			autoHeight: false,
			slidesPerView: 1,
			spaceBetween: 5,
			loop: false,
			grabCursor: true,
			watchOverflow: true,
			speed: 800,
			autoplay: {
				delay: 70000,
				disableOnInteraction: false,
			},
			pagination: {
				el: ".eShopTovarSlider__pagination",
				type: "bullets",
				dynamicBullets: false,
				clickable: true,
			},
			lazy: {
				loadOnTransitionStart: false,
				loadPrevNext: true,
			},
			thumbs: {
				swiper: eShopTovarSlider1Thumbs,
			},
		});
	}
	// }

	//-START Сладйре похожих товаров на странице VARIANTS

	var optionstsc1 = {};
	if ($(".tsc1-container .tsc1-slide").length) {
		optionstsc1 = {
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
				nextEl: ".tsc1__right",
				prevEl: ".tsc1__left",
			},
			keyboard: true,
			watchOverflow: true,
			pagination: {
				el: ".tsc1__pagination",
				type: "bullets",
				dynamicBullets: false,
				clickable: true,
			},
			breakpoints: {
				0: {
					slidesPerView: 1.5,
					// spaceBetween: 5,
				},
				415: {
					slidesPerView: 2,
					// spaceBetween: 10,
				},
				600: {
					slidesPerView: 3,
				},
				820: {
					slidesPerView: 4,
					// spaceBetween: 20,
				},
			},
		};
	}
	var swiper = new Swiper(".tsc1-container", optionstsc1);

	var optionstsc2 = {};
	if ($(".tsc2-container .tsc2-slide").length) {
		optionstsc2 = {
			slidesPerView: 4,
			loop: false,
			spaceBetween: 0,
			speed: 600,
			autoplay: {
				delay: 15000,
				disableOnInteraction: true,
			},
			navigation: {
				nextEl: ".tsc2__right",
				prevEl: ".tsc2__left",
			},
			keyboard: true,
			watchOverflow: true,
			pagination: {
				el: ".tsc2__pagination",
				type: "bullets",
				dynamicBullets: false,
				clickable: true,
			},
			breakpoints: {
				0: {
					slidesPerView: 1.5,
					// spaceBetween: 5,
				},
				415: {
					slidesPerView: 2,
					// spaceBetween: 10,
				},
				600: {
					slidesPerView: 3,
				},
				820: {
					slidesPerView: 4,
					// spaceBetween: 20,
				},
			},
		};
	}
	var swiper = new Swiper(".tsc2-container", optionstsc2);

	//-END Сдайдеры похожих товаров

	//* Галерея на процедуре имидж*/

	var options_gallery4 = {};
	if ($(".gallery4-container .gallery4-slide").length) {
		options_gallery4 = {
			slidesPerView: 4,
			loop: false,
			spaceBetween: 20,
			speed: 600,
			autoplay: {
				delay: 15000,
				disableOnInteraction: true,
			},
			navigation: {
				nextEl: ".gallery4__right",
				prevEl: ".gallery4__left",
			},
			keyboard: true,
			watchOverflow: true,
			pagination: {
				el: ".gallery4__pagination",
				type: "bullets",
				dynamicBullets: false,
				clickable: true,
			},
			breakpoints: {
				0: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 15,
				},
				1024: {
					slidesPerView: 4,
				},
				1080: {
					spaceBetween: 20,
				},
			},
		};
	}
	var swiper = new Swiper(".gallery4-container", options_gallery4);

	// var $iframes = $( "iframe" );
	// $iframes.each(function () {
	//   $( this ).data( "ratio", this.height / this.width )
	//     .removeAttr( "width" )
	//     .removeAttr( "height" );
	// });
	// $( window ).resize( function () {
	//   $iframes.each( function() {
	//     var width = $( this ).parent().width();
	//     $( this ).width( width )
	//       .height( width * $( this ).data( "ratio" ) );
	//   });
	// }).resize();

	// START всплывающий прайс по клику на Р
	$(".innerPriceBtn, .card3__priceBtn").on("click", function (e) {
		e.preventDefault();
		e.stopPropagation();
		var $this = $(this);
		$("body").addClass("stop");
		$this.next(".innerPriceBox__wrapper").fadeIn(300); /********* */
		$this.next(".innerPriceBox__wrapper").find(".innerPriceBox").slideDown(300); /********** */
		$this.closest(".card3__item").find(".innerPriceBox3__wrapper").fadeIn(300);
		$this.closest(".card3__item").find(".innerPriceBox3__wrapper").find(".innerPriceBox3").slideDown(300);
	});
	$(".innerPriceBox__wrapper").on("click", function (e) {
		/********* */ e.preventDefault();
		e.stopPropagation();
	}); /********** */
	$(".innerPriceBox3__wrapper").on("click", function (e) {
		e.preventDefault();
		e.stopPropagation();
	});
	$(".innerPriceBox__wrapper, .innerPriceBox3__wrapper").on("click", function (e) {
		/****** */ e.preventDefault();
		e.stopPropagation();
		var $this = $(this);
		$this.fadeOut(300);
		$this.find(".innerPriceBox").slideUp(300); /********* */
		$this.find(".innerPriceBox3").slideUp(300);
		$("body").removeClass("stop");
	});
	// $(".innerPriceBox, .innerPriceBox3").on("click", function (e) {
	// 	e.preventDefault();
	// 	e.stopPropagation();
	// });
	$(".innerPriceBox3").on("click", function (e) {
		e.preventDefault();
		e.stopPropagation();
	});
	$(".innerPriceBox__close, .innerPriceBox3__close").on("click", function (e) {
		/******** */ e.preventDefault();
		e.stopPropagation();
		var $this = $(this);
		$this.closest(".mainProblem__item").find(".innerPriceBox__wrapper").fadeOut(300);
		$this.closest(".mainProblem__item").find(".innerPriceBox").slideUp(300);
		$this.closest(".card3__item").find(".innerPriceBox3__wrapper").fadeOut(300);
		$this.closest(".card3__item").find(".innerPriceBox3").slideUp(300);
		$("body").removeClass("stop");
	});

	// END всплывающий прайс по клику на Р

	// Ecard-START всплывающий прайс по клику на Р
	$(".card3__priceBtn").on("click", function (e) {
		e.preventDefault();
		e.stopPropagation();
		var $this = $(this);
		$("body").addClass("stop");
		$this.next(".innerPriceBox__wrapper").fadeIn(300); /********* */
		$this.next(".innerPriceBox__wrapper").find(".innerPriceBox").slideDown(300); /********** */
		$this.closest(".eCard__item").find(".innerPriceBox3__wrapper").fadeIn(300);
		$this.closest(".eCard__item").find(".innerPriceBox3__wrapper").find(".innerPriceBox3").slideDown(300);
	});
	$(".innerPriceBox__wrapper").on("click", function (e) {
		/********* */ e.preventDefault();
		e.stopPropagation();
	}); /********** */
	$(".innerPriceBox3__wrapper").on("click", function (e) {
		e.preventDefault();
		e.stopPropagation();
	});
	$(".innerPriceBox__wrapper, .innerPriceBox3__wrapper").on("click", function (e) {
		/****** */ e.preventDefault();
		e.stopPropagation();
		var $this = $(this);
		$this.fadeOut(300);
		$this.find(".innerPriceBox").slideUp(300); /********* */
		$this.find(".innerPriceBox3").slideUp(300);
		$("body").removeClass("stop");
	});
	$(".innerPriceBox__close, .innerPriceBox3__close").on("click", function (e) {
		/******** */ e.preventDefault();
		e.stopPropagation();
		var $this = $(this);
		$this.closest(".mainProblem__item").find(".innerPriceBox__wrapper").fadeOut(300);
		$this.closest(".mainProblem__item").find(".innerPriceBox").slideUp(300);
		$this.closest(".eCard__item").find(".innerPriceBox3__wrapper").fadeOut(300);
		$this.closest(".eCard__item").find(".innerPriceBox3").slideUp(300);
		$("body").removeClass("stop");
	});

	// Ecard-END всплывающий прайс по клику на Р

	//- START Мобтльное меню - функционал типа табов - в новой версии не используется
	$(".mainTop__menuItem_js, .menuBottom1__item_js, .header2__menuBtn_js").on("click", function (e) {
		e.preventDefault();
		var $this = $(this);
		var menuId = $this.data("id");
		// console.log("___искомый id " + menuId);
		var hideBox = $(".mainTop__hideBox");
		$(".mainTop__hideBoxOverlay").fadeIn();
		$("body").addClass("stop");
		$.each(hideBox, function (index, o) {
			var $o = $(o);
			var hideBoxId = $o.data("index");
			if (menuId === hideBoxId) {
				$o.addClass("mainTop__hideBox_open").slideDown(300);
			}
		});
	});
	$(".mainTop__hideBox").on("click", function (e) {
		e.stopPropagation();
	});
	$(".mainTop__hideBoxClose").on("click", function (e) {
		e.preventDefault();
		$(".mainTop__hideBox").slideUp(300).removeClass("mainTop__hideBox_open");
		$(".mainTop__hideBoxOverlay").fadeOut();
		$("body").removeClass("stop");
	});
	$(".mainTop__hideBoxOverlay").on("click", function (e) {
		e.preventDefault();
		$(".mainTop__hideBox").slideUp(300).removeClass("mainTop__hideBox_open");
		$(".mainTop__hideBoxOverlay").fadeOut();
		$("body").removeClass("stop");
	});

	//- END Мобтльное меню - функционал типа табов

	//-START - Открытие мобильного инстаграм - начало
	$(".igTopBtn2").on("click", function (e) {
		e.preventDefault();
		if ($(this).hasClass("open")) {
			$(this).removeClass("open");
			$(".igMobile__overlay").fadeOut(200);
			$(".igMobile__area").slideUp(200);
			$("body").removeClass("stop");
		} else {
			$(this).addClass("open");
			$(".igMobile__overlay").fadeIn(200);
			$(".igMobile__area").slideDown(200);
			$("body").addClass("stop");
		}
	});
	$(".igMobile__close").on("click", function () {
		$(".igTopBtn2").removeClass("open");
		$(".igMobile__overlay").fadeOut(200);
		$(".igMobile__area").slideUp(200);
		$("body").removeClass("stop");
	});
	$(".igMobile__overlay").on("click", function () {
		$(".igTopBtn2").removeClass("open");
		$(this).fadeOut(200);
		$(".igMobile__area").slideUp(200);
		$("body").removeClass("stop");
	});
	//- END - Открытие мобильного инстаграм - конец

	//это для трех уровней раздвижного вертикального меню, в теории дл любого количества уровней
	$(".openInner").on("click", function (e) {
		e.preventDefault();
		var daughterUl = $(this).closest("li").find("> ul");
		var allUl = $(this).closest("ul").find("li ul");
		var otherOpenInner = $(this).closest("ul").find(".openInner");
		if ($(this).hasClass("open")) {
			$(this).removeClass("open transformOpen");
			daughterUl.slideUp(200);
		} else {
			// otherOpenInner.removeClass("open transformOpen");
			$(this).addClass("open transformOpen");
			// allUl.slideUp(200);
			daughterUl.slideDown(200);
		}

		// var wH = $(window).height();
		// var mH = $(".mainTop__hideBox").outerHeight();

		// console.log("windowsHeight" + $(window).height());
		// console.log("mainTop__hideBox" + $(".mainTop__hideBox").outerHeight());

		// if (wH * 0.95 < mH) {
		//   $(".mainTop__hideBox").css({ height: 80 + "vh" });
		// } else {
		//   $(".mainTop__hideBox").css({ height: "auto" });
		// }
	});

	//START--- Открытие и закрытие поиска по кнопке .topSearch_JS
	$(".topSearch_JS").click(function (e) {
		e.preventDefault();
		if ($(this).hasClass("open")) {
			$(this).removeClass("open");
			$(".search1__area").slideUp(200);
			$("body").removeClass("stop");
			$(".search1__overlay").fadeOut();
		} else {
			$(this).addClass("open");
			$(".search1__area").slideDown(200);
			$("body").addClass("stop");
			$(".search1__overlay").fadeIn();
		}
	});
	$(".search1__close").click(function () {
		$(".topSearch_JS").removeClass("open");
		$(".search1__area").slideUp(200);
		$("body").removeClass("stop");
		$(".search1__overlay").fadeOut();
	});
	$(".search1__overlay").click(function () {
		$(".topSearch_JS").removeClass("open");
		$(".search1__area").slideUp(200);
		$("body").removeClass("stop");
		$(".search1__overlay").fadeOut();
	});
	//END--- Открытие и закрытие поиска по кнопке .topSearch_JS

	if ($(".juneSlider__area").length) {
		$(".juneSlider").slick({
			dots: true,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			adaptiveHeight: false,
			centerMode: true,
			variableWidth: true,
			focusOnSelect: true,
			autoplay: true,
			autoplaySpeed: 5000,
			slide: ".juneSlider__item",
			prevArrow: '<div class="june__slickBtnPrev"><i class="icon-arr-left1"></i></div>',
			nextArrow: '<div class="june__slickBtnNext"><i class="icon-arr-right1"></i></div>',
			dotsClass: "june__dots",
		});
	}

	setTimeout(function () {
		if ($(".julySlider__outer").length) {
			var galleryTop = new Swiper(".julySlider", {
				speed: 600,
				slidesPerView: "auto",
				centeredSlides: true,
				spaceBetween: 5,
				loop: true,
				slideToClickedSlide: true,
				autoplay: {
					delay: 5500,
					disableOnInteraction: false,
				},
				pagination: {
					el: ".julySlider__pagination",
					type: "bullets",
					dynamicBullets: false,
					clickable: true,
				},
				navigation: {
					nextEl: ".julySlider__Next",
					prevEl: ".julySlider__Prev",
				},
				breakpoints: {
					640: {
						spaceBetween: 10,
					},
				},
			});
			$(".swiper-container").mouseenter(function () {
				galleryTop.autoplay.stop();
			});
			$(".swiper-container").mouseleave(function () {
				galleryTop.autoplay.start();
			});
		}
	}, 500);

	$(".phone_callback").mask("+7 (999) 999-9999");
	$(".phone1").mask("+7 (999) 999-9999");
	$(".phone13").mask("+7 (999) 999-9999");
	$(".phone_m3").mask("+7 (999) 999-9999");
	$(".phone2").mask("+7 (999) 999-9999");
	$(".phone3").mask("+7 (999) 999-9999");
	$(".phone4").mask("+7 (999) 999-9999");
	$(".phone_mf3").mask("+7 (999) 999-9999");
	$(".phone_order").mask("+7 (999) 999-9999");
	$(".phone2_order").mask("+7 (999) 999-9999");

	// прокрутка до якорtq на странице процедуры

	if ($(window).width() >= 768) {
		var menuHeight = $(".menuBottom1__area").height();
	} else {
		var menuHeight = 0;
	}

	if ($(".action__outer").length) {
		var actionItemCardHeight = $(".action__outer").outerHeight();
		$("#actionsInPage").css({ top: -actionItemCardHeight });
		$("#goToActionsTopBtn, #goToActionsBottomBtn").on("click", function (e) {
			$("html,body")
				.stop()
				.animate({ scrollTop: $("#actionsInPage").offset().top }, 1000);
			e.preventDefault();
		});
	}

	$("#goToAboutAnchor").on("click", function (e) {
		$("html,body")
			.stop()
			.animate({ scrollTop: $("#aboutAnchor").offset().top - menuHeight }, 1000);
		e.preventDefault();
	});

	$("#goToDescriptionAnchor").on("click", function (e) {
		$("html,body")
			.stop()
			.animate({ scrollTop: $("#descriptionAnchor").offset().top - menuHeight }, 1000);
		e.preventDefault();
	});

	$("#goToResultAnchor").on("click", function (e) {
		$("html,body")
			.stop()
			.animate({ scrollTop: $("#ResultAnchor").offset().top - menuHeight }, 1000);
		e.preventDefault();
	});

	$("#goToPokazAnchor").on("click", function (e) {
		$("html,body")
			.stop()
			.animate({ scrollTop: $("#PokazAnchor").offset().top - menuHeight }, 1000);
		e.preventDefault();
	});

	$("#goToAdvantageAnchor").on("click", function (e) {
		$("html,body")
			.stop()
			.animate({ scrollTop: $("#AdvantageAnchor").offset().top - menuHeight }, 1000);
		e.preventDefault();
	});

	$("#goToPriceAnchor").on("click", function (e) {
		$("html,body")
			.stop()
			.animate({ scrollTop: $("#priceAnchor").offset().top - menuHeight }, 1000);
		e.preventDefault();
	});

	$(".toTop").hide();
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 0) {
			$(".toTop").fadeIn();
		} else {
			$(".toTop").fadeOut();
		}
	});
	$(".toTop").click(function () {
		$("body,html").animate({ scrollTop: 0 }, 400);
		return false;
	});

	$("a[data-fancybox]").fancybox({
		closeBtn: false,
		arrows: true,
		keyboard: true,
		nextClick: true,
		infobar: true,
		protect: true,
		backFocus: false, // убирает рассинхрон с swiper
		nextEffect: "elastic",
		prevEffect: "elastic",
		padding: 0,
		loop: true,
		animationEffect: "zoom-in-out",
		transitionEffect: "slide",
		touch: {
			vertical: true, // Allow to drag content vertically
			momentum: true, // Continue movement after releasing mouse/touch when panning
		},
	});

	// фильтрация специалистов

	$(".menuCategoryMastersLink").on("click", function (e) {
		e.preventDefault();
		$(".menuCategoryMastersLink").removeClass("active");
		var $this = $(this);
		var IdToFind = $this.data("id");
		console.log("___искомый id " + IdToFind);

		var specs = $(".mastersBox__itemOuter");

		$.each(specs, function (index, o) {
			var $o = $(o);
			$o.removeClass("visible");
			$o.addClass("hidden");

			var sid = $o.data("sid");
			var sp = typeof sid === "number" ? [sid.toString()] : sid.split(",");
			console.log("Мастер " + sp);
			$.each(sp, function (index, z) {
				console.log("Значение " + z);
				if (z.indexOf(IdToFind) != -1) {
					$o.removeClass("hidden");
					$o.addClass("visible");
				}
			});
		});
		$this.addClass("active");
	});
	$(".menuCategoryMastersLink__all").on("click", function (e) {
		e.preventDefault();

		$(".mastersBox__itemOuter").removeClass("hidden");
		$(".mastersBox__itemOuter").addClass("visible");
		$(this).addClass("active");
	});

	// formZ

	// form1 (z1block)
	// $(".form1").on("click", ".submit1", function (e) {
	// 	console.log("клик");
	// 	e.preventDefault();
	// 	var subj = "Горизонтальная форма внизу страницы";
	// 	var name = $(".name1").val();
	// 	var phone = $(".phone1").val();
	// 	var workemail = $(".work_email1").val();
	// 	var r = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i;
	// 	if (name == "") {
	// 		swal({
	// 			title: "Поле Имя пустое",
	// 			text: "Заполните поле имя",
	// 			type: "error",
	// 			confirmButtonText: "ок",
	// 		});
	// 		$(".name1").addClass("error");
	// 		setTimeout(function () {
	// 			$(".name1").removeClass("error");
	// 		}, 3000);
	// 	} else if (phone == "") {
	// 		swal({
	// 			title: "Поле Телефон пустое",
	// 			text: "Заполните поле телефон",
	// 			type: "error",
	// 			confirmButtonText: "ок",
	// 		});
	// 		$(".phone1").addClass("error");
	// 		setTimeout(function () {
	// 			$(".phone1").removeClass("error");
	// 		}, 3000);
	// 	} else if (workemail != "") {
	// 		swal({
	// 			title: "Ах ты жулик",
	// 			text: "Уберите робота от компьютера",
	// 			type: "error",
	// 			confirmButtonText: "ок",
	// 		});
	// 	} else {
	// 		$.post(
	// 			"mail.php",
	// 			{
	// 				subj: subj,
	// 				name: name,
	// 				phone: phone,
	// 				// recaptcha: recaptcha,
	// 			},
	// 			function () {
	// 				swal({
	// 					title: "Спасибо",
	// 					text: "Ваше сообщение отправлено",
	// 					type: "success",
	// 					confirmButtonText: "ок",
	// 				});
	// 				$(".name1").val("").removeClass("error");
	// 				$(".phone1").val("").removeClass("error");
	// 			}
	// 		);
	// 	}
	// });

	// $(".form2").on("click", ".submit2", function (e) {
	// 	e.preventDefault();
	// 	var subj = $(".subj2").val();
	// 	var name = $(".name2").val();
	// 	var surname = $(".surname2").val();
	// 	name = name + " " + surname;
	// 	var phone = $(".phone2").val();
	// 	var email = $(".email2").val();
	// 	var workemail = $(".work_email2").val();
	// 	var r = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i;
	// 	if (name == "") {
	// 		swal({
	// 			title: "Поле Имя пустое",
	// 			text: "Заполните поле имя",
	// 			type: "error",
	// 			confirmButtonText: "ок",
	// 		});
	// 		$(".name2").addClass("error");
	// 		setTimeout(function () {
	// 			$(".name2").removeClass("error");
	// 		}, 3000);
	// 	} else if (phone == "") {
	// 		swal({
	// 			title: "Поле Телефон пустое",
	// 			text: "Заполните поле телефон",
	// 			type: "error",
	// 			confirmButtonText: "ок",
	// 		});
	// 		$(".phone2").addClass("error");
	// 		setTimeout(function () {
	// 			$(".phone2").removeClass("error");
	// 		}, 3000);
	// 	} else if (email == "") {
	// 		swal({
	// 			title: "Ошибка Email",
	// 			text: "Заполните поле Email",
	// 			type: "error",
	// 			confirmButtonText: "ок",
	// 		});
	// 		$(".email2").addClass("error");
	// 		setTimeout(function () {
	// 			$(".email2").removeClass("error");
	// 		}, 3000);
	// 	} else if (!r.test(email)) {
	// 		swal({
	// 			title: "Ошибка",
	// 			text: "Корректно заполните поле e-mail",
	// 			type: "error",
	// 			confirmButtonText: "ок",
	// 		});
	// 		$(".email2").addClass("error");
	// 		setTimeout(function () {
	// 			$(".email2").removeClass("error");
	// 		}, 3000);
	// 	} else if (workemail != "") {
	// 		swal({
	// 			title: "Ах ты жулик",
	// 			text: "Уберите робота от компьютера",
	// 			type: "error",
	// 			confirmButtonText: "ок",
	// 		});
	// 	} else {
	// 		$.post(
	// 			"mail.php",
	// 			{
	// 				subj: subj,
	// 				name: name,
	// 				phone: phone,
	// 				email: email,
	// 			},
	// 			function () {
	// 				swal({
	// 					title: "Спасибо",
	// 					text: "Ваше сообщение отправлено",
	// 					type: "success",
	// 					confirmButtonText: "ок",
	// 				});
	// 				$(".name2").val("").removeClass("error");
	// 				$(".surname2").val("").removeClass("error");
	// 				$(".phone2").val("").removeClass("error");
	// 				$(".email2").val("").removeClass("error");
	// 			}
	// 		);
	// 	}
	// });

	// Открытие и закрытие записи с главной по кнопке
	$(".mainConsBtn").click(function (e) {
		e.preventDefault();
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
			$(".form4__area").slideUp(200);
		} else {
			$(this).addClass("active");
			$(".form4__area").slideDown(200);
		}
	});
	// Закрытие записи с главной по кнопке Close
	$(".form4__close").click(function () {
		$(".mainConsBtn").removeClass("active");
		$(".form4__area").slideUp(250);
	});

	// $(".form4").on("click", ".submit4", function (e) {
	// 	e.preventDefault();
	// 	var subj = "Запись на консультацию с главной страницы";
	// 	var name = $(".name4").val();
	// 	var surname = $(".surname4").val();
	// 	name = name + " " + surname;
	// 	var phone = $(".phone4").val();
	// 	var email = $(".email4").val();
	// 	var workemail = $(".work_email4").val();
	// 	var message = $(".message4").val();
	// 	var r = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i;
	// 	if (name == "" || name == " ") {
	// 		swal({
	// 			title: "Поле Имя пустое",
	// 			text: "Заполните поле имя",
	// 			type: "error",
	// 			confirmButtonText: "ок",
	// 		});
	// 		$(".name4").addClass("error");
	// 		setTimeout(function () {
	// 			$(".name4").removeClass("error");
	// 		}, 3000);
	// 	} else if (phone == "") {
	// 		swal({
	// 			title: "Поле Телефон пустое",
	// 			text: "Заполните поле телефон",
	// 			type: "error",
	// 			confirmButtonText: "ок",
	// 		});
	// 		$(".phone4").addClass("error");
	// 		setTimeout(function () {
	// 			$(".phone4").removeClass("error");
	// 		}, 3000);
	// 	} else if (email == "") {
	// 		swal({
	// 			title: "Ошибка Email",
	// 			text: "Заполните поле Email",
	// 			type: "error",
	// 			confirmButtonText: "ок",
	// 		});
	// 		$(".email4").addClass("error");
	// 		setTimeout(function () {
	// 			$(".email4").removeClass("error");
	// 		}, 3000);
	// 	} else if (!r.test(email)) {
	// 		swal({
	// 			title: "Ошибка",
	// 			text: "Корректно заполните поле e-mail",
	// 			type: "error",
	// 			confirmButtonText: "ок",
	// 		});
	// 		$(".email4").addClass("error");
	// 		setTimeout(function () {
	// 			$(".email4").removeClass("error");
	// 		}, 3000);
	// 	} else if (message == "") {
	// 		swal({
	// 			title: "Пустое сообщение",
	// 			text: "Заполните текст сообщения",
	// 			type: "error",
	// 			confirmButtonText: "ок",
	// 		});
	// 		$(".message4").addClass("error");
	// 		setTimeout(function () {
	// 			$(".message4").removeClass("error");
	// 		}, 3000);
	// 	} else if (workemail != "") {
	// 		swal({
	// 			title: "Ах ты жулик",
	// 			text: "Уберите робота от компьютера",
	// 			type: "error",
	// 			confirmButtonText: "ок",
	// 		});
	// 	} else {
	// 		$.post(
	// 			"mail.php",
	// 			{
	// 				subj: subj,
	// 				name: name,
	// 				phone: phone,
	// 				email: email,
	// 				message: message,
	// 			},
	// 			function () {
	// 				swal({
	// 					title: "Спасибо",
	// 					text: "Ваше сообщение отправлено",
	// 					type: "success",
	// 					confirmButtonText: "ок",
	// 				});
	// 				$(".name4").val("").removeClass("error");
	// 				$(".surname4").val("").removeClass("error");
	// 				$(".phone4").val("").removeClass("error");
	// 				$(".email4").val("").removeClass("error");
	// 				$(".message4").val("").removeClass("error");
	// 				$(".mainConsBtn").removeClass("active");
	// 				$(".form4__area").slideUp(250);
	// 			}
	// 		);
	// 	}
	// });

	// $("#instafeed").length;
	// ? ((a = new Instafeed({
	//     get: "user",
	//     userId: 17841403346668216,
	//     clientId: "10fdf054a0284eaeb40ad704cccde93d",
	//     accessToken: "IGQVJVZAzY1YU1OcEVuQVRSQkNIUVZAQV1NFQjFVdDNkdjlRc2Y1TUFhMkxKbzBLWWhqajJzcUo2dmlXeG4wN3hRVUJJR2pmUFhTaUJiQ09SZAmxINjZACY1FGMGlzT0N6M3duWjBDb3MtdW92enNCNEVySnNZAZAVJacm10RUhv",
	//     limit: 12,
	//     resolution: "low_resolution",
	//     template:
	//       '<div class="ig__item"><a class="ig__link" href="{{link}}" target="_blank" style="background-image: url({{image}});"><img src="assets/img/igtrbg.png" alt="{{caption}}"/></a></div>',
	//   })),
	//   a.run())
	// : void 0;
	// var feed = new Instafeed({
	//   accessToken:
	//     "IGQVJVZAzY1YU1OcEVuQVRSQkNIUVZAQV1NFQjFVdDNkdjlRc2Y1TUFhMkxKbzBLWWhqajJzcUo2dmlXeG4wN3hRVUJJR2pmUFhTaUJiQ09SZAmxINjZACY1FGMGlzT0N6M3duWjBDb3MtdW92enNCNEVySnNZAZAVJacm10RUhv",
	//   limit: 12,
	//   resolution: "low_resolution",
	//   template:
	//     '<div class="ig__item"><a class="ig__link" href="{{link}}" target="_blank" style="background-image: url({{image}});"><img src="assets/img/igtrbg.png" alt="{{caption}}"/></a></div>',
	// });
	// feed.run();

	if ($(".map__area").length) {
		ymaps.ready(initMaps);
	}
});

var isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
	},
};

function initMaps() {
	var myMap = new ymaps.Map("map", {
		center: [51.53636907237114, 46.022191999999926],
		zoom: 14,
		controls: ["zoomControl"],
	});

	myMap.behaviors.disable("scrollZoom");
	if (isMobile.any()) {
		myMap.behaviors.disable("drag");
	}

	var myGeoObjects = [];

	myGeoObjects[0] = new ymaps.Placemark(
		[51.53636907237114, 46.022191999999926],
		{
			balloonContentHeader:
				'<div class="baloon__top">Бьюти Лаунж</div>' +
				'<div class="baloon__description">Клиника красоты</div>',
			balloonContentBody:
				'<div class="baloon__content"><img src="/btlassets/img/logo-map2.png">' +
				'<a href="tel:88452260000">8 (8452) 26-00-00</a>',
			balloonContentFooter: '<div class="baloon__footer">Саратов, ул. Московская, 113/117, <br>ТК «Мир», 2 этаж.</div>',
			clusterCaption: "Косметология<br>салон массажа<br>HAIR услуги<br>NAIL-BAR<br>профессиональная косметика",
			hintContent: '<div class="baloon__top">Клиника красоты "Бьюти Лаунж"</div>',
		},
		{
			iconLayout: "default#image",
			iconImageHref: "/btlassets/img/marker2.png",
			iconImageSize: [64, 64],
			iconImageOffset: [-32, -32],
		}
	);

	var clusterIcons = [
		{
			href: "/images/pointer.png",
			size: [29, 46],
			offset: [0, 0],
		},
	];

	var clusterer = new ymaps.Clusterer({
		clusterDisableClickZoom: false,
		clusterOpenBalloonOnClick: false,
		clusterBalloonContentLayout: "cluster#balloonCarousel",
		clusterBalloonPanelMaxMapArea: 0,
		clusterBalloonContentLayoutWidth: 300,
		clusterBalloonContentLayoutHeight: 200,
		clusterBalloonPagerSize: 5,
		clusterBalloonPagerType: "marker",
	});

	clusterer.add(myGeoObjects);
	myMap.geoObjects.add(clusterer);
}
