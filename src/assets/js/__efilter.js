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
