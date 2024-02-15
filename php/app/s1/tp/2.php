<?php
$dividende = 50;
$diviseur = 3;
$reste = $dividende % $diviseur;
$resultat = $dividende / $diviseur;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>division</h1>
    <ul>
        <li>le reste est:<?=$reste;?></li>
        <li>le résultat est: <?=$resultat;?></li>
    </ul>
</body>
</html>