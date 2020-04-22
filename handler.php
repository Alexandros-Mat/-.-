<?
echo "<pre>";
print_r($_REQUEST);
echo "</pre>";

$name = trim(strip_tags($_REQUEST["name"]));
$email = trim(strip_tags($_REQUEST["email"]));
$phone = trim(strip_tags($_REQUEST["phone"]));

$errors = false;

if (strlen($name) > 1) {
    echo "ok<br>";
} else {
    $errors = true;
}
if (strpos($email, "@")) {
    echo "ok<br>";
} else {
    $errors = true;
}
if (strlen($phone) >= 9) {
    echo "ok<br>";
} else {
    $errors = true;
}

if ($errors == true) {?>
    <h2>Форма заполнена неверно! Заполните ее еще раз! <a href="/site7/">Ссылка</a></h2>
<?} else {?>
    <h2>Форма заполнена правильно! Спасибо!</h2>
<?}

//mail("sorokin_ser@mail.ru", "Регистрация прошла успешно!", "Вы зарегистрировались на сайте! Ваши данные: Имя: $name, Почта: $email, Телефон: $phone");