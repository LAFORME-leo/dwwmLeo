<?php
#region code imparfait 
/**
 * Le problème ici est que des fonction contienne des echos et retournent du code html
 */
// function afficherUnIndividu(array $pIndividu)
// {
//     echo "<ul>";
//     foreach ($pIndividu as $key => $value) {
//         echo "<li>$key : $value </li>";
//     }
//     echo "</ul>";
// }
// function afficherTousLesIndividus(array $pIndividus)
// {
//     foreach ($pIndividus as $key => $individu) {
//         afficherUnIndividu($individu);
//     }

// }
#endregion
$individu = array(
    'Nom' => 'Dupond',
    'Prenom' => 'Martin',
    'Age' => 18,
    'Nationalité' => 'Francais',
);
// echo "<ul>";
// foreach ($individu as $key => $value) {
//     echo "<li>$key : $value </li>";
// }
// echo "</ul>";
$autreIndividu = array(
    'Nom' => 'Martin',
    'Prenom' => 'Jean-Pierre',
    'Age' => 24,
    'Nationalité' => 'Francais',
);
$individus = array($individu,$autreIndividu);
// foreach ($individus as $key => $individu) {
//     echo "<ul>";
//     foreach ($individu as $key => $value) {
//         echo "<li>$key : $value </li>";
//     }
//     echo "</ul>";
// }
// afficherTousLesIndividus($individus);
include '4/tpl_afficher_des_personnes.php';

