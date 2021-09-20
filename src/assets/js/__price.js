$(function () {
	// $(".daughter").hide();
	$(".prlevtitle").on("click", function () {
		$(this).toggleClass("open");
		$(this).next().slideToggle();
	});

	// $(".oneServWrapper").children(".priceBox__area").hide();
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

	$(".priceOpenBnn").on("click", function () {
		if ($(this).hasClass("open")) {
			$(this).removeClass("open");
			$(this).text("Развернуть все");
			$(".prlevtitle").removeClass("open").next().slideUp();
			$(".oneServWrapper").children("h3").removeClass("open").next().slideUp();
			$(".oneServWrapper").children("h4").removeClass("open").next().slideUp();
		} else {
			$(this).addClass("open");
			$(this).text("Свернуть все");
			$(".prlevtitle").addClass("open").next().slideDown();
			$(".oneServWrapper").children("h3").addClass("open").next().slideDown();
			$(".oneServWrapper").children("h4").addClass("open").next().slideDown();
		}
	});

	/********************************** Прайс на табах*/
	// $(".xPrice__dtTabTitle").on("click", function () {
	// 	var $this = $(this);
	// 	$(".xPrice__dtTabTitle").not(this).removeClass("active");
	// 	$this.addClass("active");
	// 	$activId = $this.attr("data-titleId");
	// 	$(".xPrice__splitOuter").removeClass("active").hide();
	// 	$(".xPrice__splitOuter[data-contentId=" + $activId + "]")
	// 		.addClass("active")
	// 		.show();
	// });
});
