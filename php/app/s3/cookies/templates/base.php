<!-- La vue est la représentation visuelle des données, c'est-à-dire tout ce que l'utilisateur peut voir et interagir avec sur l'écran. Elle génère l'interface utilisateur en se basant sur les données fournies par le modèle et gérées par le contrôleur. Dans le MVC, la vue est passive : elle n'effectue pas de requêtes ou de manipulations de données directement, mais affiche les résultats et envoie les interactions de l'utilisateur (comme les clics sur les boutons ou les entrées de formulaire) au contrôleur. L'objectif principal de la vue est de séparer la logique de présentation du reste de l'application pour faciliter les modifications de l'interface utilisateur sans affecter la logique métier -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>

    <?=$content?>

    <form method="GET">
        <select name="nb" id="">
            <option value="5" <?=$pNbActualites==5?'SELECTED':''?>>5</option>
            <option value="6" <?=$pNbActualites==6?'SELECTED':''?>>6</option>
            <option value="7" <?=$pNbActualites==7?'SELECTED':''?>>7</option>
            <option value="8" <?=$pNbActualites==8?'SELECTED':''?>>8</option>
            <option value="9" <?=$pNbActualites==9?'SELECTED':''?>>9</option>
            <option value="10" <?=$pNbActualites==10?'SELECTED':''?>>10</option>
        </select>
        <button>choisir</button>
</form>
</body>
</html>