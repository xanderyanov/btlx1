$(function () {
	// Открытие и закрытие заказа звонка по кнопке
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 500) {
			$(".callBackBtn").addClass("callBackBtn_top");
		} else {
			$(".callBackBtn").removeClass("callBackBtn_top");
		}
	});

	$(".callBackBtn").on("click", function (e) {
		e.preventDefault();
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
			$(".callBack__form").fadeOut(600);
			$(".callBack__overlay").fadeOut();
			$("body").removeClass("stop");
		} else {
			$(this).addClass("active");
			$(".callBack__form").fadeIn(200);
			$(".callBack__overlay").fadeIn();
			$("body").addClass("stop");
		}
	});
	$(".callBack__form").on("click", function (e) {
		e.stopPropagation();
	});
	// Закрытие заказа звонка по кнопке Close
	$(".callBack__close").on("click", function () {
		$(".callBackBtn").removeClass("active");
		$(".callBack__form").fadeOut(200);
		$("body").removeClass("stop");
		setTimeout(function () {
			$(".callBack__overlay").fadeOut();
		}, 300);
	});

	// Закрытие заказа звонка по оверлею
	$(".callBack__overlay").on("click", function () {
		$(".callBackBtn").removeClass("active");
		$(".callBack__form").fadeOut(200);
		$("body").removeClass("stop");
		setTimeout(function () {
			$(".callBack__overlay").fadeOut();
		}, 300);
	});

	$(".callback").on("click", ".submit_callback", function (e) {
		e.preventDefault();
		e.stopPropagation();
		var subj = "Форма заказа обратного звонка";
		var name = $(".name_callback").val();
		var phone = $(".phone_callback").val();
		var checkbox = $(".checkbox_callback");
		var workemail = $(".work_email_callback").val();
		var r = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i;
		if (name == "") {
			swal({
				title: "Поле Имя пустое",
				text: "Заполните поле имя",
				type: "error",
				confirmButtonText: "ок",
			});
			$(".name_callback").addClass("error");
			setTimeout(function () {
				$(".name_callback").removeClass("error");
			}, 3000);
		} else if (phone == "") {
			swal({
				title: "Поле Телефон пустое",
				text: "Заполните поле телефон",
				type: "error",
				confirmButtonText: "ок",
			});
			$(".phone_callback").addClass("error");
			setTimeout(function () {
				$(".phone_callback").removeClass("error");
			}, 3000);
		} else if (workemail != "") {
			swal({
				title: "Ах ты жулик",
				text: "Уберите робота от компьютера",
				type: "error",
				confirmButtonText: "ок",
			});
		} else if (checkbox.is(":checked") == false) {
			swal({
				title: "Отметьте чекбокс",
				text: "Дайте свое согласие на обработку данных!",
				type: "error",
				confirmButtonText: "ок",
			});
		} else {
			$.post(
				"mail.php",
				{
					subj: subj,
					name: name,
					phone: phone,
				},
				function () {
					swal({
						title: "Спасибо",
						text: "Заказ обратного звонка отправлен, наши менеджеры свяжутся с Вами в ближайшее время",
						type: "success",
						confirmButtonText: "ок",
					});
					$(".name_callback").val("").removeClass("error");
					$(".phone_callback").val("").removeClass("error");
					$(".checkbox_callback:checked").prop("checked", false);
					$(".callBackBtn").removeClass("active");
					$(".callBack__form").addClass("bounceOutUp").removeClass("bounceInDown").fadeOut(600);
					setTimeout(function () {
						$(".callBack__overlay").fadeOut();
					}, 800);
				}
			);
		}
	});
});
