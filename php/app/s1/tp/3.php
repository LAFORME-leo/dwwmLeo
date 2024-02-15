<?php
$x = 5;
$y= 10;
if ($x>$y)
{
    $message = "$x est plus grand que $y en \$";
}
else
{
    $message = "$x est plus petit ou égal à $y en \$";
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p><?=$message?></p>
</body>
</html>