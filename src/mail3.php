<?php

	if (isset($_POST['subj'])) {$subj = $_POST['subj'];}
	if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
	if (isset($_POST['name'])) {$name = $_POST['name'];}
	if (isset($_POST['email'])) {$clientemail = $_POST['email'];}
	if (isset($_POST['message'])) {$message = $_POST['message'];}

	if (isset($_POST['recaptcha'])) {$response = $_POST['recaptcha'];}

	$secret="6LeG0boZAAAAABKgxZZR__3N_8evoKtjY8DzYv74";
	// $response=$_POST["recaptcha"];

	$verify=file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret={$secret}&response={$response}");
	$captcha_success=json_decode($verify);
	
	if ($captcha_success->success==false) {
	  //This user was not verified by recaptcha.

	}
	else if ($captcha_success->success==true) {
	  
	    $emailsender = 'site@bt-l.ru';

        $to = "zokrat@yandex.ru";

		// $mes = "Тема: Заказ обратного звонка с сайта!\nТелефон: $phone\n";
        $mes = "Тема: Cообщение с сайта!\nТелефон: $phone\nИмя: $name\nE-mail: $clientemail\nСообщение: $message";
        $sub='Сообщение или заказ звонка с сайта'; //сабж

		$send = mail ($to,$sub,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:$emailsender");

		ini_set('short_open_tag', 'On');
		header('Refresh: 3; URL=index.html');
		

	}



?>
