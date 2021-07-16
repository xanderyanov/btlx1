$(function () {
	//Форма на главной
	$(".form_m3").on("click", ".submit_m3", function (e) {
		e.preventDefault();
		var subj = "Форма главной страницы";
		var name = $(".name_m3").val();
		var phone = $(".phone_m3").val();
		var checkbox = $(".checkbox_m3");
		var workemail = $(".work_email_m3").val();
		var r = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i;
		if (name == "") {
			swal({
				title: "Поле Имя пустое",
				text: "Заполните поле имя",
				type: "error",
				confirmButtonText: "ок",
			});
			$(".name_m3").addClass("error");
			setTimeout(function () {
				$(".name_m3").removeClass("error");
			}, 3000);
		} else if (phone == "") {
			swal({
				title: "Поле Телефон пустое",
				text: "Заполните поле телефон",
				type: "error",
				confirmButtonText: "ок",
			});
			$(".phone_m3").addClass("error");
			setTimeout(function () {
				$(".phone_m3").removeClass("error");
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
					// recaptcha: recaptcha,
				},
				function () {
					swal({
						title: "Спасибо",
						text: "Ваше сообщение отправлено",
						type: "success",
						confirmButtonText: "ок",
					});
					$(".name_m3").val("").removeClass("error");
					$(".phone_m3").val("").removeClass("error");
					$(".checkbox_m3:checked").prop("checked", false);
				}
			);
		}
	});

	//Форма на странице внизу

	$(".form13").on("click", ".submit13", function (e) {
		e.preventDefault();
		var subj = $(".subj13").text();
		var name = $(".name13").val();
		var phone = $(".phone13").val();
		var checkbox = $(".checkbox13");
		var workemail = $(".work_email13").val();
		var r = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i;
		if (name == "") {
			swal({
				title: "Поле Имя пустое",
				text: "Заполните поле имя",
				type: "error",
				confirmButtonText: "ок",
			});
			$(".name13").addClass("error");
			setTimeout(function () {
				$(".name13").removeClass("error");
			}, 3000);
		} else if (phone == "") {
			swal({
				title: "Поле Телефон пустое",
				text: "Заполните поле телефон",
				type: "error",
				confirmButtonText: "ок",
			});
			$(".phone13").addClass("error");
			setTimeout(function () {
				$(".phone13").removeClass("error");
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
					// recaptcha: recaptcha,
				},
				function () {
					swal({
						title: "Спасибо",
						text: "Ваше сообщение отправлено",
						type: "success",
						confirmButtonText: "ок",
					});
					$(".name13").val("").removeClass("error");
					$(".phone13").val("").removeClass("error");
					$(".checkbox13:checked").prop("checked", false);
				}
			);
		}
	});

	//Форма на странице контактов
	$(".form3").on("click", ".submit3", function (e) {
		e.preventDefault();
		var subj = "Сообщение со страницы контактов";
		var name = $(".name3").val();
		var surname = $(".surname3").val();
		name = name + " " + surname;
		var phone = $(".phone3").val();
		var email = $(".email3").val();
		var workemail = $(".work_email3").val();
		var message = $(".message3").val();
		var checkbox = $(".checkbox3");
		var r = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i;
		// var recaptcha = grecaptcha.getResponse();
		if (name == "") {
			swal({
				title: "Поле Имя пустое",
				text: "Заполните поле имя",
				type: "error",
				confirmButtonText: "ок",
			});
			$(".name3").addClass("error");
			setTimeout(function () {
				$(".name3").removeClass("error");
			}, 3000);
		} else if (phone == "") {
			swal({
				title: "Поле Телефон пустое",
				text: "Заполните поле телефон",
				type: "error",
				confirmButtonText: "ок",
			});
			$(".phone3").addClass("error");
			setTimeout(function () {
				$(".phone3").removeClass("error");
			}, 3000);
		} else if (email == "") {
			swal({
				title: "Ошибка Email",
				text: "Заполните поле Email",
				type: "error",
				confirmButtonText: "ок",
			});
			$(".email3").addClass("error");
			setTimeout(function () {
				$(".email3").removeClass("error");
			}, 3000);
		} else if (!r.test(email)) {
			swal({
				title: "Ошибка",
				text: "Корректно заполните поле e-mail",
				type: "error",
				confirmButtonText: "ок",
			});
			$(".email3").addClass("error");
			setTimeout(function () {
				$(".email3").removeClass("error");
			}, 3000);
		} else if (message == "") {
			swal({
				title: "Пустое сообщение",
				text: "Заполните текст сообщения",
				type: "error",
				confirmButtonText: "ок",
			});
			$(".message3").addClass("error");
			setTimeout(function () {
				$(".message3").removeClass("error");
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
					email: email,
					message: message,
					// recaptcha: recaptcha,
				},
				function () {
					swal({
						title: "Спасибо",
						text: "Ваше сообщение отправлено",
						type: "success",
						confirmButtonText: "ок",
					});
					$(".name3").val("").removeClass("error");
					$(".surname3").val("").removeClass("error");
					$(".phone3").val("").removeClass("error");
					$(".email3").val("").removeClass("error");
					$(".message3").val("").removeClass("error");
					$(".checkbox3:checked").prop("checked", false);
				}
			);
		}
	});

	//Форма на всплываке позвонить (заказать звонок)
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
