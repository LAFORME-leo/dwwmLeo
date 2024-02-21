<?php
declare(strict_types=1);
require_once("personne.php");

// $tableaux= array('thierry','bru','1m70'); 

    $formateur = new Personne(1,'thierry BRU','thierrybru@viaformation.fr');
    // echo $formateur->_name; //Uncaught Error: Cannot access private property Personne::$_name in /var/www/html/fil-du-code/objet.php:7 
echo $formateur->decrire();
$fichierJson = file_get_contents('personnes.json');
$listePersonnes = Personne::chargerListePersonne($fichierJson);

foreach ($listePersonnes as $key => $personne) {
    echo "<p>";
    echo get_class($personne);
    echo $personne;
    echo "</p>";
    echo "<pre>";
    var_dump($personne);
    echo "</pre>";
}


