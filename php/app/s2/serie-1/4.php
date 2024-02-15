<?php
function afficherLesNombresPair(int $pNombre):String
{
    $resultat ="";
    $max = $pNombre/2;
    for ($i=1; $i <= $max; $i++) { 
        $valeur = $i*2;
        $resultat .="$valeur";
        $resultat.=($i!=$max)?"-":"";
    }
    return $resultat;
}
$affichage = afficherLesNombresPair(20);
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