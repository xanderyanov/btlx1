$(function () {
	$(".action").on("click", function (e) {
		console.log(1231321321);
		e.preventDefault();
		$(this).children(".action__infoBoxOverlay").fadeIn();
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
});
