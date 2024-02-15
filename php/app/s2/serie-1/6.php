<?php
function afficherLesPuissanceDe(int $pBase, int $pExposant): ArrayObject
{
    $resultat = new ArrayObject();
    $i = 0;
    while ($i <= $pExposant)
    // for ($i=0; $i <=$pExposant ; $i++) 
    {
        $resultat->append((object)['base' => $pBase, 'exposant' => $i, 'resultat' => pow($pBase, $i)]);
        $i++;
    }


    return $resultat;
}
$resultat = afficherLesPuissanceDe(2, 16);


?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <ul>
        <?php
        foreach ($resultat as $key => $value) { ?>
            <li><?= $value->base ?>^<?= $value->exposant ?> = <?= $value->resultat ?></li>
        <?php
        }
        ?>
    </ul>
</body>

</html>