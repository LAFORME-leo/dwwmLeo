<?php
  $tableauNombre = [ 0, 1, 2, 3, 4, 5, 6 ];
  $somme =0;
  $moyenne = 0;

  $ecartType;
// calcul de la somme
  foreach ($tableauNombre as $key => $value) {
        $somme+=$value;
  }
//   calcul de la moyenne
$moyenne = $somme/count($tableauNombre);
// calcul ecart type
$sommeEcartCarre = 0;
foreach ($tableauNombre as $key => $value) {
    $sommeEcartCarre += pow($value-$moyenne,2);
}
$ecartType = sqrt($sommeEcartCarre);
//affichage des valeurs
include 'templates/2-template.php';
