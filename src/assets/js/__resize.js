function siteResizeFunction() {
	topLine3 = $(".topLine3__area").height();
	header3 = $(".header3__area");
	header3Height = $(".header3__area").height();
	prevWindowWidth = windowWidth;
	windowWidth = $window.width();

	if (prevWindowWidth <= 1024 && windowWidth > 1024) {
		$(".eShopMenu__mobileBtn").removeClass("eShopMenu__mobileBtn_active");
		$(".eShopMenu__outer_catalogOnly").show();
		$(".floatBox__leftOverlay").fadeOut(300);
		$("body").removeClass("stop");
	}
	if (prevWindowWidth > 1024 && windowWidth <= 1024) {
		$(".eShopMenu__outer_catalogOnly").hide().removeClass("eShopMenu__outer_catalogOnly_active");
	}

	//* start - cabinetTabs **/ + __eShopCabinet.js
	if (prevWindowWidth <= 768 && windowWidth > 768) {
		$(".cab2__tab > a").removeClass("active");
		$(".cab2__tab > section").removeClass("openSection").hide();
		$(".cab2__tabs").children("li").first().children("a").addClass("active").next().addClass("openSection").show();
	}
	if (prevWindowWidth > 768 && windowWidth <= 768) {
		$(".cab2__tab:not(:first) > a").removeClass("active");
		$(".cab2__tab:not(:first) > section").removeClass("openSection").slideUp();

		$(".cab2__tabs").children("li").first().children("a").addClass("active").next().addClass("openSection").slideDown();
		// $(".cab2__tabs").children("li").first().children("a").removeClass("active").next().removeClass("open").hide();

		$(".mobileTabs option:first").prop("selected", true);
	}
	//* end - cabinetTabs **/

	if (prevWindowWidth <= 600 && windowWidth > 600) {
		$(".masterWindowForm__overlay").fadeOut(300);
		$("body").removeClass("stop");
	}
	// if (prevWindowWidth > 600 && windowWidth <= 600) {
	//   $(".eShopMenu__outer_catalogOnly").hide();
	// }
	if (prevWindowWidth <= 1080 && windowWidth > 1080) {
		leftSlideMenuClose();
	}

	// if ($(window).width() <= 600) {
	// 	floatOrderBtn();
	// 	console.log("ресайз");
	// }

	floatOrderBtn();
}

$(function () {
	// siteResizeFunction();
	$window.on("resize", siteResizeFunction);
});
