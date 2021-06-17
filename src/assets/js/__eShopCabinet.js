$(function () {
  if ($window.width() <= 768) {
    $(".cab2__tab > a").removeClass("active");
    $(".cab2__tab > section").removeClass("openSection").slideUp();
    $(".cab2__tabs").children("li").first().children("a").removeClass("active").next().removeClass("open").hide();
  } else {
    $(".cab2__tabs").children("li").first().children("a").addClass("active").next().addClass("open").show();
  }

  // function eShopCabTabDesktop() {
  $(".cab2__tabs").on("click", "li > a", function (e) {
    e.preventDefault();
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      if ($window.width() <= 768) {
        $(this).next().removeClass("openSection").slideUp();
      } else {
        $(this).next().removeClass("openSection").hide();
      }
    } else {
      $(".cab2__tab > a").removeClass("active");
      $(this).addClass("active");
      if ($window.width() <= 768) {
        $(".cab2__tab > section").removeClass("openSection").slideUp();
        $(this).next().addClass("openSection").slideDown();
      } else {
        $(".cab2__tab > section").removeClass("openSection").hide();
        $(this).next().addClass("openSection").show();
      }
    }
  });
  // }
  // eShopCabTabDesktop();
});
