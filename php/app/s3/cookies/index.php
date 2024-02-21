<?php
// Dans le modèle MVC (Modèle-Vue-Contrôleur), le routage est le mécanisme qui dirige les requêtes des utilisateurs vers le bon contrôleur et la bonne action. En d'autres termes, il mappe les URL aux fonctions spécifiques du contrôleur dans votre application. Le routage est essentiel pour déterminer comment une application répond à une demande client à une certaine route ou URI (Uniform Resource Identifier) et une méthode spécifique (GET, POST, etc.).
require_once 'controller/homepage.php';
require_once 'entity/actualites.php';

if (isset($_GET['nb'])) {
    $nbActualites = $_GET['nb'];
    setcookie('nbActualites', $_GET['nb']);
} else
    if (isset($_COOKIE['nbActualites']))
        $nbActualites = $_COOKIE['nbActualites'];
    else
        $nbActualites = 10;
afficherLesActualites($nbActualites);
