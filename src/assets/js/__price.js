$(function () {
	var mainClass = $(".tablestyle1");

	$(".daughter").hide();
	$(".prlevtitle").on("click", function () {
		$(this).toggleClass("open");
		$(this).next().slideToggle();
	});

	$(".oneServWrapper").children(".priceBox__area").hide();
	$(".oneServWrapper")
		.children("h3")
		.on("click", function () {
			$(this).toggleClass("open");
			$(this).next().slideToggle();
		});
	$(".oneServWrapper")
		.children("h4")
		.on("click", function () {
			$(this).toggleClass("open");
			$(this).next().slideToggle();
		});
});
