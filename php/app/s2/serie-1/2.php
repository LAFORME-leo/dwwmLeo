<?php
function afficherLesNombres(int $pNombre):String
{
    $resultat ="";
    for ($i=1; $i <= $pNombre; $i++) { 
        $resultat .="$i ";
    }
    return $resultat;
}
$affichage = afficherLesNombres(20);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?=$affichage?>
</body>
</html>