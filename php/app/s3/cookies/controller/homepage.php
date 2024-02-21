<?php
// Le contrôleur agit comme un intermédiaire entre le modèle et la vue. Il reçoit les entrées de l'utilisateur (souvent à travers la vue), interagit avec le modèle pour récupérer les données ou effectuer des opérations, et envoie les données à la vue pour être affichées. Le contrôleur détermine également quelle action effectuer en fonction des entrées de l'utilisateur et des événements de l'application. En séparant les décisions concernant les actions à prendre et la logique métier du modèle, le contrôleur contribue à réduire la complexité et à augmenter la modularité de l'application
function afficherLesActualites(int $pNbActualites)
{
    $actualites = array_slice(Actualites::$liste,0, $pNbActualites);
    ob_start();
    include 'templates/vue_liste_actualites.php';
    $content = ob_get_contents();
    ob_end_clean();
    include_once 'templates/base.php';
  
}