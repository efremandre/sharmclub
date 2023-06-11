<?php
$name = $_POST['name'];
$name = str_replace(['(',')','{','}','[', ']', '+', '=', '$', '_', '<', '>', '/', '/\/'], '', $name );
$phone = $_POST['tel'];
$phone = str_replace(['(',')','-','+',' '], '', $phone );
$messanger = $_POST['messanger'];
$messanger = str_replace(['(',')','-','+',' '], '', $messanger );
$message = $_POST['message'];
$message = str_replace(['(',')','{','}','[', ']', '+', '=', '$', '_', '<', '>', '/', '/\/'], '', $message );
$mail = $_POST['mail'];
$token = "6199939669:AAH-pPnW-dGv5DQvAmpM9YGpOh4x4aRu9OY";
$chat_id = "-923866039";
$arr = array(
    'Имя пользователя: ' => $name,
    'Телефон: ' => $phone,
		'Мессенджер: ' => $messanger,
    'Email: ' => $mail,
    'Сообщение: ' => $message
);

foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b>".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if (!$sendToTelegram) {
    $message = 'Что-то пошло не так и ничего не отправилось...';
} else {
    $message = 'Ваша заявка отправлена!';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);