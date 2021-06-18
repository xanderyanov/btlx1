$(function () {
	//-START Адаптивное меню на главной и остальных - появление самого меню
	var menuBottom1_height = $(".menuBottom1__area").outerHeight();
	console.log(menuBottom1_height);
	$(".menuBottom1__areaFake").css({ height: menuBottom1_height });

	if ($(".mainPageIdx").length) {
		if ($(window).width() >= 1024) {
			var topScrollCount = $(".mainTop__area").outerHeight();
		} else {
			var topScrollCount = $(".mainTop__right").outerHeight();
		}
		var menu = $(".menuBottom1__area_main");
		var menuHeight = $(".menuBottom1__area_main").outerHeight();
		$(window).on("scroll", function () {
			if ($(this).scrollTop() > topScrollCount) {
				menu.addClass("menuBottom1__area_active");
			} else if ($(this).scrollTop() <= topScrollCount) {
				menu.removeClass("menuBottom1__area_active");
			}
		});
	}
	if (!$(".mainPageIdx").length) {
		var topScrollCount = $(".header2__area").outerHeight();
		var menu = $(".menuBottom1__area_main");
		var menuHeight = $(".menuBottom1__area_main").outerHeight();

		if ($(window).width() >= 1024) {
			$(window).on("scroll", function () {
				if ($(this).scrollTop() > topScrollCount) {
					menu.addClass("menuBottom1__area_active");
				} else if ($(this).scrollTop() <= topScrollCount) {
					menu.removeClass("menuBottom1__area_active");
				}
			});
		} else {
			menu.addClass("menuBottom1__area_active");
		}
	}
	//-END Адаптивное меню на главной и остальных
});
