$(function () {
	//-START Адаптивное меню на главной - появление самого меню
	if ($(window).width() <= 600) {
		floatOrderBtn();
	}
});
function floatOrderBtn() {
	var y = $(".eShopCartTotalInfo").offset().top;
	var h = $(".eShopCartTotalInfo").outerHeight();
	console.log("Высота до блока " + y);
	console.log("Высота блока " + h);
	var s = y + h;
	console.log("Высота до нижнего края блока " + s);

	// $(window).on("scroll", function () {
	// 	if ($(".eShopCartTotalInfo").is(":visible")) {
	// 		$(".floatOrder__outer").css({ display: "block" });
	// 	}
	// });

	$(window).on("scroll", function () {
		var wt = $(window).scrollTop();
		var wh = $(window).height();
		var et = $(".eShopCartTotalInfo").offset().top;
		var eh = $(".eShopCartTotalInfo").outerHeight();
		var dh = $(document).height();
		if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
			console.log("Элемент показан");
		} else {
			console.log("Элемент не показан");
		}
	});
}
