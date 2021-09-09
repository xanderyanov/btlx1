$(function () {
	// Ecard-START всплывающий прайс по клику на Р
	$(".xBtn1").on("click", function (e) {
		e.preventDefault();
		e.stopPropagation();
		var $this = $(this);
		$("body").addClass("stop");
		$this.closest(".eCard__itemOuter").find(".overlay1").fadeIn(300); /********* */
		$this.closest(".eCard__itemOuter").find(".overlay1").find(".innerPriceBox").slideDown(300); /********** */
		// $this.closest(".eCard__item").find(".innerPriceBox3__wrapper").fadeIn(300);
		// $this.closest(".eCard__item").find(".innerPriceBox3__wrapper").find(".innerPriceBox3").slideDown(300);
	});
	$(".overlay1").on("click", function (e) {
		/****** */
		if ($(e.target).hasClass("ovarlay1__inner")) {
			e.preventDefault();
			e.stopPropagation();
			var $this = $(this);
			$this.fadeOut(300);
			$this.find(".innerPriceBox").slideUp(300); /********* */
			$this.find(".innerPriceBox3").slideUp(300);
			$("body").removeClass("stop");
		}
	});
	// $(".innerPriceBox").on("click", function (e) {
	// 	if (e.target.tagName !== "A") {
	// 		e.preventDefault();
	// 		e.stopPropagation();
	// 	}
	// });
	$(".innerPriceBox__close").on("click", function (e) {
		e.preventDefault();
		e.stopPropagation();
		var $this = $(this);
		$this.closest(".eCard__itemOuter").find(".overlay1").fadeOut(300);
		$this.closest(".eCard__itemOuter").find(".innerPriceBox").slideUp(300);
		// $this.closest(".eCard__item").find(".innerPriceBox3__wrapper").fadeOut(300);
		// $this.closest(".eCard__item").find(".innerPriceBox3").slideUp(300);
		$("body").removeClass("stop");
	});

	// Ecard-END всплывающий прайс по клику на Р
});
