$(function () {
	$(".eSearch_js").on("click", function (e) {
		e.preventDefault;
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
			$(".eSearch__Area").fadeOut();
			$(".eSearch__Overlay").fadeOut();
			$("body").removeClass("stop");
		} else {
			$(this).addClass("active");
			$(".eSearch__Area").fadeIn();
			$(".eSearch__Overlay").fadeIn();
			$("body").addClass("stop");
			$("#searchInputLg").each(function (i, elem) {
				elem.focus();
			});
		}
	});
	$(".eSearch__FormClose").on("click", function (e) {
		e.preventDefault;
		$(".eSearch_js").removeClass("active");
		$(".eSearch__Area").fadeOut();
		$(".eSearch__Overlay").fadeOut();
		$("body").removeClass("stop");
	});
	$(".eSearch__Overlay").on("click", function (e) {
		e.preventDefault;
		$(".eSearch_js").removeClass("active");
		$(".eSearch__Area").fadeOut();
		$(".eSearch__Overlay").fadeOut();
		$("body").removeClass("stop");
	});

	$(".searchWhite__input").on("click", function () {
		$(".eSearch__Overlay_mb").fadeIn();
		$("body").addClass("stop");
	});
	$(".eSearch__Overlay_mb").on("click", function () {
		$(".eSearch__Overlay_mb").fadeOut();
		$("body").removeClass("stop");
		$(".searchPreResults__area").fadeOut();
	});
});
