<?php declare(strict_types=1);
/**
 * FICHIER A COMPLETER DANS LES ESPACES INDIQUES (ET PAS AILLEURS ! ! !)
 */
/**
 * AJOUTER LE CODE MANQUANT!
 */
 
function routingPage(Array $pGetRecieved):String
{
   /**
 * AJOUTER LE CODE MANQUANT!
 */
}

function getParamSearch($pGetRecieved)
{
  /**
 * AJOUTER LE CODE MANQUANT!
 */
}
function getParamDetail($pGetRecieved)
{
   /**
 * AJOUTER LE CODE MANQUANT!
 */
}
function showPage(String $pTemplate,$data = [])
{
    /**
 * NE PAS TOUCHER LE CODE ICI
 */
    if (!file_exists($pTemplate))
        throw new ParseError('file not found');
    ob_start();
    include $pTemplate;
    return  ob_get_clean();
        /**
     * NE PAS TOUCHER LE CODE ICI
     */
}
