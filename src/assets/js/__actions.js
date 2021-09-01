$(function () {
	$(".action_js").on("click", function (e) {
		e.preventDefault();
		$(this).children(".action__infoBoxOverlay").fadeIn();
		$("body").addClass("stop");
	});
	$(".action_js_inProcedure").on("click", function (e) {
		e.preventDefault();
		$(".action__infoBoxOverlay").fadeIn();
		$("body").addClass("stop");
	});
	$(".action__infoBox").on("click", function (e) {
		e.stopPropagation();
	});
	// Закрытие акции по кнопке Close
	$(".action__infoBoxClose").on("click", function () {
		$(".action__infoBoxOverlay").fadeOut(200);
		$("body").removeClass("stop");
	});

	// Закрытие акции по оверлею
	$(".action__infoBoxOverlay").on("click", function (e) {
		e.stopPropagation();
		$("body").removeClass("stop");
		$(".action__infoBoxOverlay").fadeOut();
	});

	if ($(window).width() <= 600 && $(".floatAction__js").length) {
		floatActionOpen();
	}

	$(".floatAction__close").on("click", function () {
		$(".floatAction__js").slideUp();
	});
});

function floatActionOpen() {
	setTimeout(function () {
		$(".floatAction__js").slideDown();
	}, 3000);
}
