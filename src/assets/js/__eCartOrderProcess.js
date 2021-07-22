$(function () {
	orderTabs();

	$(".zRadioMore input[type='radio']").on("click", function () {
		var radioValue = $("input:checked").val();
		if (radioValue) {
			$(".zRadioMore").removeClass("active");
			$(this).parent().addClass("active");
		}
	});
});

function orderTabs() {
	$(".order__tabs")
		.children("li")
		.first()
		.addClass("active")
		.children("a")
		.addClass("active")
		.next()
		.addClass("openSection")
		.show();

	$(".order__tabs").on("click", "li > a", function (e) {
		e.preventDefault();
		if ($(this).hasClass("active")) {
			// $(this).removeClass("active");
			// $(this).next().removeClass("openSection").hide();
		} else {
			$(".order__tab").removeClass("active");
			$(".order__tab > a").removeClass("active");
			$(this).addClass("active");
			$(this).parent().addClass("active");

			$(".order__tab > section").removeClass("openSection").hide();
			$(this).next().addClass("openSection").show();
		}
	});
}
