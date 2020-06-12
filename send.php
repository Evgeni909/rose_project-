$fio = $_POST['name'];
$email = $_POST['number'];

$fio = htmlspecialchars($name);
$email = htmlspecialchars($number);

$fio = urldecode($name);
$email = urldecode($number);

$fio = trim($name);
$email = trim($number);

//echo $fio;
//echo "<br>";
//echo $email;

if (mail("zorineevgeni94@gmail.com", "Заявка с сайта", "Имя:".$name.". Номер: ".$number ,"From: example2@mail.ru \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}?>