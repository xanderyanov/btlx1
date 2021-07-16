$(function () {
	// Открытие и закрытие заказа звонка по кнопке
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 500) {
			$(".callBackBtn").addClass("callBackBtn_top");
		} else {
			$(".callBackBtn").removeClass("callBackBtn_top");
		}
	});

	$(".callBackBtn").on("click", function (e) {
		e.preventDefault();
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
			$(".callBack__form").fadeOut(600);
			$(".callBack__overlay").fadeOut();
			$("body").removeClass("stop");
		} else {
			$(this).addClass("active");
			$(".callBack__form").fadeIn(200);
			$(".callBack__overlay").fadeIn();
			$("body").addClass("stop");
		}
	});
	$(".callBack__form").on("click", function (e) {
		e.stopPropagation();
	});
	// Закрытие заказа звонка по кнопке Close
	$(".callBack__close").on("click", function () {
		$(".callBackBtn").removeClass("active");
		$(".callBack__form").fadeOut(200);
		$("body").removeClass("stop");
		setTimeout(function () {
			$(".callBack__overlay").fadeOut();
		}, 300);
	});

	// Закрытие заказа звонка по оверлею
	$(".callBack__overlay").on("click", function () {
		$(".callBackBtn").removeClass("active");
		$(".callBack__form").fadeOut(200);
		$("body").removeClass("stop");
		setTimeout(function () {
			$(".callBack__overlay").fadeOut();
		}, 300);
	});

	//обработчик формы в файле __forms.js
});
