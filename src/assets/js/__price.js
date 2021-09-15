$(function () {
	var mainClass = $(".tablestyle1");

	$(".daughter").hide();
	$(".prlevtitle").on("click", function () {
		$(this).next().slideToggle();
	});

	$(".prwrapper").children(".priceBox__area").hide();
	$(".prwrapper")
		.children("h3")
		.on("click", function () {
			$(this).next().slideToggle();
		});
	$(".prwrapper")
		.children("h4")
		.on("click", function () {
			$(this).next().slideToggle();
		});
});
