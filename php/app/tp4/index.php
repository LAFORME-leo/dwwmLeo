<?php
    $array = new ArrayObject();




for ($i = 0; $i <=16; $i++) 
{
    $resultat = pow(2, $i);
    $texte = "2^$i = $resultat";
    $array ->append($texte);
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
<?php
for ($i = 0; $i <= 16; $i++)
{ ?>
    <li> <?= $array[$i];?> </li>
<?php
}
?>
</body>
</html>