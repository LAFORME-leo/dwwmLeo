<?php
include_once 'index.php';
// array(7) { ["salutation"]=> string(3) "mme" ["prenom"]=> string(10) "Géraldine" ["nom"]=> string(3) "BRU" ["dateNaissance"]=> string(10) "2023-11-23" ["identifiant"]=> string(2) "tb" ["motdepasse"]=> string(1) "e" ["genre"]=> string(1) "F" }
if ((isset($_POST['genre']) 
&& (isset($_POST['prenom']))
&& (isset($_POST['nom']))
&&(strlen($_POST['genre']>0))
&&(strlen($_POST['prenom']>0))
&&(strlen($_POST['nom']>0)))
)
{
?>
    <p>Bonjour, 
    <?php 
    if ($_POST['sex']=='W')  
    echo "femmel"  ;
else if ($_POST["sex"]== "M")
echo "mec";
else
    echo "Débutant en php";?>
    
    <?=$_POST['sex']?> <?=$_POST['prenom']?> <?=htmlentities($_POST['nom'])?> </p>
    <img src="https://media1.tenor.com/m/xoud0WwVOTwAAAAC/lhermitte-thierry.gif" alt="">
    

<?php
}
else
{
    echo "";
    var_dump($_POST);
    
    ?>
    <link rel="stylesheet" href="style2.css">
    <h1>NOOOOOOOOOON</h1>
    <img src="https://media.tenor.com/MV2pZAwo_rQAAAAM/hide-the-simpsons.gif" alt="">
    <?php
}
?>