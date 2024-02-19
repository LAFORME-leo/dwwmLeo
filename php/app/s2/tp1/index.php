<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <form action="reponse.php" method="post">
        <select name="salutation" id="">
            <option value="mme" selected>mme</option>
            <option value="mr">mr</option>
        </select>
        <input type="text" name="prenom" placeholder="votre prénom">
        <input type="text" name="nom" id="" placeholder="votre nom">
        <label for="date">Date de naissance</label>
        <input type="number" name="date" id="date" placeholder="1977">
        <input type="text" name="identifiant" id="" placeholder="votre identifiant">
        <input type="password" name="password" id="" placeholder="password">
        <fieldset>
            <legend>genre</legend>
            <label for="genre_m">masculin</label>
            <input type="radio" name="genre" id="genre_m" value="1" checked>
            <label for="genre_f">féminin</label>
            <input type="radio" name="genre" id="genre_f" value="2">
        </fieldset>
        <label for="newb"> Debute en php?</label>
        <input type="checkbox" name="newb" id="newb" value="newbie">
        <button>envoyer</button>
    </form>
</body>
</html>