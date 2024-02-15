<?php
$duree = 6700;
$heures = intval($duree/(60*60));
$reste = $duree%(60*60);
$minutes= intval($reste/60);
$reste = $reste%(60);
$secondes = $reste;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    les <?=$duree?>s représentent 
    <?=$heures?>h<?=$minutes?>m<?=$secondes?>s

    <?//"<script>alert('PIWATE')</script>"?>
</body>
</html>