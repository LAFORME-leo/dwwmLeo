<?php
require_once 'personne.php';

     if (!isset($_POST)||empty($_POST))
        header("Location: index.php");

        // $personne = new Personne($_POST['salutation'],$_POST['prenom'],$_POST['nom'],$_POST['salutation'],$_POST['date'],$_POST['identifiant'],$_POST['password'],$_POST['genre'],$_POST['newb'])
        //FACTORY
        $personne = Personne::createFromTable($_POST);
    ?>
<!DOCTYPE html>
<html lang="fr-FR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
  <?=$personne->salutation?>
  <?=$personne->prenom?>
  <?=$personne->nom?>
  <?=$personne->date?>
  <?=$personne->identifiant?>
  <?=$personne->password?>
  <?=$personne->genre?>
  <?=$personne->newb?>


</body>
</html>