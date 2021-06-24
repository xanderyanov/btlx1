$(function () {
	//-START Адаптивное меню на главной - появление самого меню

	function adaptiveBottomMenuInMain() {
		var menuBottom1_height = $(".menuBottom1__area").outerHeight();
		console.log(menuBottom1_height);
		$(".menuBottom1__areaFake").css({ height: menuBottom1_height });

		if ($(".mainPageIdx").length) {
			var bottomMenu = $(".menuBottom1__area");
			bottomMenu.css({ bottom: -menuBottom1_height });

			var topScrollCount = $(".mainTop__area").outerHeight();

			$(window).on("scroll", function () {
				if ($(this).scrollTop() > topScrollCount) {
					bottomMenu.css({ bottom: 0 });
				} else if ($(this).scrollTop() <= topScrollCount) {
					bottomMenu.css({ bottom: -menuBottom1_height });
				}
			});
		}
	}

	if ($(window).width() <= 600) {
		adaptiveBottomMenuInMain();
	}
});
