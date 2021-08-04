var priceSlider1 = document.getElementById("eFilterPriceSlider");
if (priceSlider1) {
	noUiSlider.create(priceSlider1, {
		start: [0, 100],
		connect: true,
		range: {
			min: 0,
			max: 100,
		},
	});
	var priceStart = document.getElementById("priceStart");
	var priceEnd = document.getElementById("priceEnd");

	priceSlider1.noUiSlider.on("update", function (values, handle) {
		var value = values[handle];
		if (handle) {
			priceEnd.value = value;
		} else {
			priceStart.value = value;
		}
	});

	priceStart.addEventListener("change", function () {
		priceSlider1.noUiSlider.set([this.value, null]);
	});
	priceEnd.addEventListener("change", function () {
		priceSlider1.noUiSlider.set([null, this.value]);
	});
}

$(function () {
	$(".eFilter__title").each(function (index, element) {
		var $element = $(element);
		if ($element.hasClass("active")) {
			console.log("Есть активный фильтр");
			$element.addClass("eFilter__title_open").closest(".eFilter").find(".eFilter__content").show();
			$element.children(".eFilter__openBtn").addClass("eFilter__openBtn_open");
		}
	});

	$(".eFilter__title").on("click", function (e) {
		// раскрытие и закрытие еФильтра по клику на галку
		e.preventDefault();
		e.stopPropagation();
		var $this = $(this);
		var thisFilterContent = $this.closest(".eFilter").find(".eFilter__content");
		if ($this.hasClass("eFilter__title_open")) {
			$this.children(".eFilter__openBtn").removeClass("eFilter__openBtn_open");
			$this.removeClass("eFilter__title_open");
			thisFilterContent.slideUp(300);
		} else {
			$this.addClass("eFilter__title_open");
			$this.children(".eFilter__openBtn").addClass("eFilter__openBtn_open");
			thisFilterContent.slideDown(300);
		}
	});

	$(".eFilterActionBtn").on("click", function () {
		//подсветка родителя выбранного пункта фильтра
		var filtrItemParent = $(this).closest(".eFilter");

		if (filtrItemParent.find("input").is(":checked")) {
			console.log("Выбрано");
			filtrItemParent.find(".eFilter__title").addClass("active");
			// $(".catalogFilter1__itemContent").removeClass("visible");
			// $(".catalogFilter1__itemTitle").removeClass("open1");
			// $(".catalogFilter1__overlay").hide();
		} else {
			console.log("не выбрано");
			filtrItemParent.find(".eFilter__title").removeClass("active");
			// $(".catalogFilter1__itemContent").removeClass("visible");
			// $(".catalogFilter1__itemTitle").removeClass("open1");
			// $(".catalogFilter1__overlay").hide();
		}
	});

	// поведение(раскрытие) фильтров на мобильном - так же как каталог и бренды
	$(".eFilter__mbBtn").on("click", function (e) {
		e.preventDefault();
		e.stopPropagation();
		var $this = $(this);
		var thisFilterContent = $this.closest(".eFilterArea__wrapper").find(".eFilter__area");
		if ($this.hasClass("eFilter__mbBtn_active")) {
			if ($(window).width() <= 600) {
				thisFilterContent.slideUp(300);
				setTimeout(function () {
					$this.removeClass("eFilter__mbBtn_active");
					$(".eFilter__overlay").fadeOut(300);
					$("body").removeClass("stop");
					$(".eFilterArea__wrapper").removeClass("mbBtn_100");
				}, 300);
			} else {
				thisFilterContent.slideUp(300);
				$this.removeClass("eFilter__mbBtn_active");
				$(".eFilter__overlay").fadeOut(300);
				$("body").removeClass("stop");
				$(".eFilterArea__wrapper").removeClass("mbBtn_100");
			}
		} else {
			if ($(window).width() <= 600) {
				$(".eFilterArea__wrapper").addClass("mbBtn_100");
				$this.addClass("eFilter__mbBtn_active");
				$(".eFilter__overlay").fadeIn(300);
				$("body").addClass("stop");
				setTimeout(function () {
					thisFilterContent.slideDown(300);
				}, 300);
			} else {
				$this.addClass("eFilter__mbBtn_active");
				$(".eFilter__overlay").fadeIn(300);
				$("body").addClass("stop");
				thisFilterContent.slideDown(300);
			}
		}
	});
	$(".eFilter__overlay").on("click", function (e) {
		e.preventDefault();
		e.stopPropagation();
		if ($(window).width() <= 600) {
			$(".eFilter__area").slideUp(300);
			setTimeout(function () {
				$(".eFilter__mbBtn").removeClass("eFilter__mbBtn_active");
				$(".eFilter__overlay").fadeOut(300);
				$("body").removeClass("stop");
				$(".eFilterArea__wrapper").removeClass("mbBtn_100");
			}, 300);
		} else {
			$(".eFilter__area").slideUp(300);
			$(".eFilter__mbBtn").removeClass("eFilter__mbBtn_active");
			$(".eFilter__overlay").fadeOut(300);
			$("body").removeClass("stop");
			$(".eFilterArea__wrapper").removeClass("mbBtn_100");
		}
	});

	/*START   eFilterMpobile*/
	$(".eGreyLine__mbBtnFiltr").on("click", function (e) {
		e.preventDefault();
		e.stopPropagation();
		$("body").addClass("stop");
		$(".eFilerMobile__overlay").fadeIn(300);
		$(".eFilerMobile__wrapper").addClass("eFilerMobile__wrapper_open");
	});
	$(".eFilerMobile__wrapper").on("click", function (e) {
		e.stopPropagation();
	});
	$(".eFilerMobile__overlay").on("click", function (e) {
		e.preventDefault();
		e.stopPropagation();
		$(".eFilerMobile").removeClass("eFilerMobile_slide");
		$(".eFilerMobile__itemLev2").fadeOut(500);
		$(".eFilerMobile__wrapper").removeClass("eFilerMobile__wrapper_open");
		$(this).fadeOut(500);
		$("body").removeClass("stop");
	});
	$(".eFilerMobile__title").on("click", function (e) {
		e.preventDefault();
		e.stopPropagation();
		$(".eFilerMobile").removeClass("eFilerMobile_slide");
		$(".eFilerMobile__itemLev2").fadeOut(500);
		$(".eFilerMobile__wrapper").removeClass("eFilerMobile__wrapper_open");
		$(".eFilerMobile__overlay").fadeOut(500);
		$("body").removeClass("stop");
	});
	$(".eFilerMobile__itemLev1").on("click", function (e) {
		e.preventDefault();
		e.stopPropagation();
		$(this).closest(".eFilerMobile__item").find(".eFilerMobile__itemLev2").show();
		$(".eFilerMobile").addClass("eFilerMobile_slide");
	});
	$(".eFilerMobile__back2").on("click", function (e) {
		e.preventDefault();
		e.stopPropagation();
		$(".eFilerMobile").removeClass("eFilerMobile_slide");
		$(this).closest(".eFilerMobile__item").find(".eFilerMobile__itemLev2").fadeOut(500);
	});
	$(".eFilterCheckbox").on("click", function () {
		if ($(".eFilterCheckbox").find("input").is(":checked")) {
			$(this).closest(".eFilerMobile__item").find(".eFilerMobile__itemLev1").addClass("active");
		} else {
			$(this).closest(".eFilerMobile__item").find(".eFilerMobile__itemLev1").removeClass("active");
		}
	});
});
