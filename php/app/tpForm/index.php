<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>
<body>
    

    <div class="container-fluid col-6">
    <form action="reponse.php" method="POST">
        <select name="genre" id="">
            <option value="mme">Mme</option>
            <option value="mr"></option>
        </select>
        <label for="prenom" class="form-label">Prénom</label>
        <input type="text" name="prenom" id="prenom" class="form-control">

        <label for="nom" class="form-label">Nom</label>
        <input type="text" name="nom" id="" class="form-control">

        <label for="dateNaissance" class="form-label">Date de naissance</label>
        <input type="date" name="dateNaissance" id="" class="form-control">
        <input type="text" name="identifiant" id="" placeholder="votre identifiant" class="form-control">

        <label for="motdepasse" class="form-label">Mot de Passe</label>
        <input type="password" name="motdepasse" id="" class="form-control">
        genre
        <fieldset>
            <legend>Genre</legend>
            <input type="radio" name="sex" id="" value="M" >homme
            <input type="radio" name="sex" id="" value="W">femme
            <input type="radio" name="sex" id="" value="O">je débute en php
        </fieldset>
        
        <input type="checkbox" name="debutant" id="">je débute en php
        <button type="submit" class="btn bg-primary" >envoyer!</button>
    </form>
</div>
    
</body>
</html>