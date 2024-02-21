<?php
// Dans le modèle MVC (Modèle-Vue-Contrôleur), le routage est le mécanisme qui dirige les requêtes des utilisateurs vers le bon contrôleur et la bonne action. En d'autres termes, il mappe les URL aux fonctions spécifiques du contrôleur dans votre application. Le routage est essentiel pour déterminer comment une application répond à une demande client à une certaine route ou URI (Uniform Resource Identifier) et une méthode spécifique (GET, POST, etc.).
require_once 'controller/homepage.php';
require_once 'controller/connexion.php';
require_once 'entity/actualites.php';
session_start();

if (isset($_GET['page']))
{
    switch ($_GET['page']) {
        case 'info':
            afficherLesActualites();
            break;
        case 'logout':
            logOut();
            break;
        default:
            afficherLogin();
            break;
    }
}
else
    afficherLesActualites();

    



