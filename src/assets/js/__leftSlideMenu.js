$(function () {
	/*start-newSlideMobileMenu*/

	$(".leftSlideMenu_js").on("click", function (e) {
		e.preventDefault();
		$(".leftSlideMenu__overlay").fadeIn();
		$(".leftSlideMenu__wrapper").addClass("leftSlideMenu__wrapper_open");
		$("body").addClass("stop");
	});

	$(".leftSlideMenu__close_JS").on("click", function (e) {
		e.preventDefault();
		leftSlideMenuClose();
	});
	$(".leftSlideMenu__wrapper").on("click", function (e) {
		e.stopPropagation();
	});
	$(".leftSlideMenu__overlay").on("click", function (e) {
		e.preventDefault();
		leftSlideMenuClose();
	});

	/*end-newSlideMobileMenu*/
});

function leftSlideMenuClose() {
	$(".leftSlideMenu__wrapper").removeClass("leftSlideMenu__wrapper_open");
	$(".leftSlideMenu__overlay").fadeOut();
	$("body").removeClass("stop");
}
