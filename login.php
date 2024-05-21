<?php
$bildiri = ''; 
$success = false;  

if (isset($_POST['submit'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];

    if (!empty($email) && !empty($password)) {
        if ($email == 'b231210027@sakarya.edu.tr' && $password == 'b231210027') {
            $success = true; 
        } else {
            $bildiri = "Hatalı email veya şifre<br>(3 saniye içinde giriş sayfasına yönlendirileceksiniz.)";
        }
    } else {
        $bildiri = "Lütfen email ve şifrenizi giriniz.";
    }
}
?>

<!DOCTYPE html>
<html lang="tr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Giriş</title>
    <link rel="stylesheet" href="style.css">
</head>

<body class="bg-info text-center">
    <?php if ($success): ?>
        <script>
            alert("Hoşgeldiniz");
            window.location.href = "anasayfa.html";
        </script>
    <?php else: ?>
        <h1 class="text-danger"><?= $bildiri ?></h1>
        <?php if ($bildiri !== ''): ?>
            <script>
                setTimeout(function() {
                    window.location.href = "login.html";
                }, 3000);
            </script>
        <?php endif; ?>
    <?php endif; ?>
</body>

</html>