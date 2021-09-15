$(function () {
	var mainClass = $(".tablestyle1");

	// mainClass.find(".priceBox__title").next().hide();

	$(".daughter").hide();
	$(".prlevtitle").on("click", function () {
		$(this).next().slideToggle();
	});

	$(".prwrapper").children(".priceBox__area").hide();
	// $(".prwrapper").children(".priceBox__area").children(".priceBox").hide();
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

	// $(".prwrapper")
	// 	.children(".priceBox__area")
	// 	.children(".priceBox__title")
	// 	.on("click", function () {
	// 		$(this).next().slideToggle();
	// 	});

	// $(".priceBox__title").on("click", function () {
	// 	$(this).next().slideToggle();
	// });

	// $(".prlev2").children("div").hide();
	// $(".prlev3").children("div").hide();
	// $(".prlev3").children("div").children(".priceBox__area").hide();
	// $(".prlev2").children("div").children(".priceBox__area").hide();
	// $(".prlev2")
	// 	.children("h2")
	// 	.on("click", function () {
	// 		$(this).parent().find(".prlev3").slideToggle();
	// 	});
	// $(".prlev3")
	// 	.children("h3")
	// 	.on("click", function () {
	// 		$(this).next().slideToggle();
	// 	});
	// $(".prlev3")
	// 	.find("h4")
	// 	.on("click", function () {
	// 		$(this).next().slideToggle();
	// 	});
});
