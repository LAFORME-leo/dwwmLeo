<?php
function afficherNombre(int $pNombre):string
{
    $resultat ="";
    for ($i = 0; $i <= $pNombre; $i++)
    {
        $resultat .= "$i ";

    }
    return $resultat;
}
$affichage = afficherNombre(20);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?= $affichage ?>
</body>
</html>