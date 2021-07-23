$(function () {
	$(window).on("scroll", floatOrderBtn);
	floatOrderBtn();
});
function floatOrderBtn() {
	if ($(window).width() <= 600 && $(".floatOrder__js").length) {
		var wt = $(window).scrollTop();
		var wh = $(window).height();
		var et = $(".floatOrder__js").offset().top;
		var eh = $(".floatOrder__js").outerHeight();
		if (wt + wh >= et && wt < et + eh) {
			// console.log("Элемент на экране");
			$(".floatOrder__outer").slideUp();
		} else {
			// console.log("Элемент не показан");
			$(".floatOrder__outer").slideDown();
		}
	}
}
