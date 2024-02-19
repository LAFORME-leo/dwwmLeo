<?php
/* if (isset($_GET['dir'])) 
    $dir = $_GET['dir'];
else
    $dir = '.'; */
$dir = isset($_GET['dir'])? $_GET['dir']:'.';
$files = scandir($dir);

foreach ($files as $key => $value) {
    if (($value=='.')||($value=='..'))
    unset($files[$key]);
}
    // $lastSeparator = strrpos($dir,'/');
    // $previousDir = substr($dir,0,count($dir)-$lastSeparator-1);
    $previousDir = dirname($dir);
    if ($previousDir== '.')
    $previousLink = 'index.php';
else
    $previousLink = 'index.php?dir='.$previousDir;

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
/*     if ($dir!=".")
    {
    ?>
    <a href="index.php?dir=<?=$preivousDir?>"> retour </a>
    <?php
    } */
    if (($dir!='.') && ($previousDir!="."))
    include 'hey-browser/template-prec.php';
else
    if ($dir!=".")
        include 'hey-browser/template-home.php';
    
    ?>
    <ul>
        <?php foreach ($files as $key => $value) {
            if (is_dir($dir.'/'.$value)) 
            {
                include 'hey-browser/template-dir.php';   
            }

            else 
            {
                include 'hey-browser/template-file.php';   
            }
        }; ?>
            
    </ul>
</body>
</html>