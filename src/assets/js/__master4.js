$(function () {
	//* START Всплывашка формы на странице мастера 4
	$(".master4top__openFormBtn").on("click", function (e) {
		e.preventDefault();
		e.stopPropagation();
		$(".masterWindowForm__overlay").fadeIn(300);
		$("body").addClass("stop");
	});
	$(".masterWindowForm").on("click", function (e) {
		e.stopPropagation();
	});
	$(".masterWindowForm__overlay").on("click", function (e) {
		e.preventDefault();
		e.stopPropagation();
		$(".masterWindowForm__overlay").fadeOut(300);
		$("body").removeClass("stop");
	});
	$(".masterWindowForm__close").on("click", function (e) {
		e.preventDefault();
		e.stopPropagation();
		$(".masterWindowForm__overlay").fadeOut(300);
		$("body").removeClass("stop");
	});

	//* END Всплывашка формы на странице мастера 4

	// $(".mf3").on("click", ".submit_mf3", function (e) {
	// 	e.preventDefault();
	// 	var masterName = $(".mf3_subj").text();
	// 	var subj = "Форма со страницы мастера " + masterName;
	// 	var name = $(".name_mf3").val();
	// 	var phone = $(".phone_mf3").val();
	// 	var checkbox = $(".checkbox_mf3");
	// 	var workemail = $(".work_email_mf3").val();
	// 	var r = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i;
	// 	if (name == "") {
	// 		swal({
	// 			title: "Поле Имя пустое",
	// 			text: "Заполните поле имя",
	// 			type: "error",
	// 			confirmButtonText: "ок",
	// 		});
	// 		$(".name_mf3").addClass("error");
	// 		setTimeout(function () {
	// 			$(".name_mf3").removeClass("error");
	// 		}, 3000);
	// 	} else if (phone == "") {
	// 		swal({
	// 			title: "Поле Телефон пустое",
	// 			text: "Заполните поле телефон",
	// 			type: "error",
	// 			confirmButtonText: "ок",
	// 		});
	// 		$(".phone_mf3").addClass("error");
	// 		setTimeout(function () {
	// 			$(".phone_mf3").removeClass("error");
	// 		}, 3000);
	// 	} else if (workemail != "") {
	// 		swal({
	// 			title: "Ах ты жулик",
	// 			text: "Уберите робота от компьютера",
	// 			type: "error",
	// 			confirmButtonText: "ок",
	// 		});
	// 	} else if (checkbox.is(":checked") == false) {
	// 		swal({
	// 			title: "Отметьте чекбокс",
	// 			text: "Дайте свое согласие на обработку данных!",
	// 			type: "error",
	// 			confirmButtonText: "ок",
	// 		});
	// 		$(".form_mf3alrightBox").addClass("error");
	// 		setTimeout(function () {
	// 			$(".form_mf3alrightBox").removeClass("error");
	// 		}, 3000);
	// 	} else {
	// 		$.post(
	// 			"mail.php",
	// 			{
	// 				subj: subj,
	// 				name: name,
	// 				phone: phone,
	// 				// recaptcha: recaptcha,
	// 			},
	// 			function () {
	// 				swal({
	// 					title: "Спасибо",
	// 					text: "Ваше сообщение отправлено",
	// 					type: "success",
	// 					confirmButtonText: "ок",
	// 				});
	// 				$(".name_mf3").val("").removeClass("error");
	// 				$(".phone_mf3").val("").removeClass("error");
	// 				$(".checkbox_mf3:checked").prop("checked", false);
	// 			}
	// 		);
	// 	}
	// });

	// $(".mf3_popup").on("click", ".submit_mf3_popup", function (e) {
	// 	e.preventDefault();
	// 	var masterName = $(".mf3_subj_popup").text();
	// 	var subj = "Форма со страницы мастера " + masterName;
	// 	var name = $(".name_mf3_popup").val();
	// 	var phone = $(".phone_mf3_popup").val();
	// 	var checkbox = $(".checkbox_mf3_popup");
	// 	var workemail = $(".work_email_mf3_popup").val();
	// 	var r = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i;
	// 	if (name == "") {
	// 		swal({
	// 			title: "Поле Имя пустое",
	// 			text: "Заполните поле имя",
	// 			type: "error",
	// 			confirmButtonText: "ок",
	// 		});
	// 		$(".name_mf3_popup").addClass("error");
	// 		setTimeout(function () {
	// 			$(".name_mf3_popup").removeClass("error");
	// 		}, 3000);
	// 	} else if (phone == "") {
	// 		swal({
	// 			title: "Поле Телефон пустое",
	// 			text: "Заполните поле телефон",
	// 			type: "error",
	// 			confirmButtonText: "ок",
	// 		});
	// 		$(".phone_mf3_popup").addClass("error");
	// 		setTimeout(function () {
	// 			$(".phone_mf3_popup").removeClass("error");
	// 		}, 3000);
	// 	} else if (workemail != "") {
	// 		swal({
	// 			title: "Ах ты жулик",
	// 			text: "Уберите робота от компьютера",
	// 			type: "error",
	// 			confirmButtonText: "ок",
	// 		});
	// 	} else if (checkbox.is(":checked") == false) {
	// 		swal({
	// 			title: "Отметьте чекбокс",
	// 			text: "Дайте свое согласие на обработку данных!",
	// 			type: "error",
	// 			confirmButtonText: "ок",
	// 		});
	// 		$(".form_mf3alrightBox_popup").addClass("error");
	// 		setTimeout(function () {
	// 			$(".form_mf3alrightBox_popup").removeClass("error");
	// 		}, 3000);
	// 	} else {
	// 		$.post(
	// 			"mail.php",
	// 			{
	// 				subj: subj,
	// 				name: name,
	// 				phone: phone,
	// 				// recaptcha: recaptcha,
	// 			},
	// 			function () {
	// 				swal({
	// 					title: "Спасибо",
	// 					text: "Ваше сообщение отправлено",
	// 					type: "success",
	// 					confirmButtonText: "ок",
	// 				});
	// 				$(".name_mf3_popup").val("").removeClass("error");
	// 				$(".phone_mf3_popup").val("").removeClass("error");
	// 				$(".form_mf3alrightBox_popup").val("").removeClass("error");
	// 				$(".checkbox_mf3_popup:checked").prop("checked", false);
	// 				$(".masterWindowForm__overlay").fadeOut(300);
	// 				$("body").removeClass("stop");
	// 			}
	// 		);
	// 	}
	// });

	var talkShowOptions = {};
	if ($(".talkShowSlider-container .talkShow__outer").length) {
		talkShowOptions = {
			slidesPerView: 2,
			loop: false,
			spaceBetween: 0,
			speed: 600,
			autoplay: {
				delay: 1500000,
				disableOnInteraction: true,
			},
			navigation: {
				nextEl: ".talkShowSlider__right",
				prevEl: ".talkShowSlider__left",
			},
			keyboard: true,
			watchOverflow: true,
			pagination: {
				el: ".talkShow__pagination",
				type: "bullets",
				dynamicBullets: false,
				clickable: true,
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
			},
		};
	} else {
		$(".talkShowSlider__area").addClass("talkShowSlider__area_lock");
	}
	var swiper = new Swiper(".talkShowSlider-container", talkShowOptions);

	// Карусель сертификатов

	var optionsImgCaroucel1 = {};
	// var elements = $(".imgCaroucel1-container .imgCaroucel-slide").not($(".swiper-slide-duplicate"));
	var imgCaroucel1elements = $(".imgCaroucel1-container .imgCaroucel-slide");
	if (imgCaroucel1elements.length) {
		optionsImgCaroucel1 = {
			slidesPerView: 6,
			loop: false,
			spaceBetween: 20,
			centeredSlides: false,
			speed: 600,
			autoplay: {
				delay: 15000,
				disableOnInteraction: true,
			},
			navigation: {
				nextEl: ".imgCaroucel1__right",
				prevEl: ".imgCaroucel1__left",
			},
			keyboard: true,
			watchOverflow: true,
			pagination: {
				el: ".imgCaroucel1__pagination",
				type: "bullets",
				dynamicBullets: false,
				clickable: true,
			},
			breakpoints: {
				0: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
				480: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				600: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 4,
					spaceBetween: 20,
				},
				1200: {
					spaceBetween: 30,
					slidesPerView: 5,
				},
				1440: {
					spaceBetween: 30,
					slidesPerView: 6,
				},
			},
		};
		if (imgCaroucel1elements.length < 6) {
			$(".imgCaroucel").addClass("imgCaroucel_lock");
		}
	}
	var swiper = new Swiper(".imgCaroucel1-container", optionsImgCaroucel1);
});
