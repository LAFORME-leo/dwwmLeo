<?php
// tableau simple : 
$tableau[0] = 2023;
$tableau[1] = "DEVWEB-18-S2";
$tableau[] = 11.12; // ajoute à la fin du tableau, ici c'est en 2eme case
// tableau à 2 dimensions : 
$tab[0][0] = 12;
$tab[0][1] = "tv";
$tab[1][0] = 1245.678;
$tab[1][1] = "bye";
// tableau associatif : 
$toto["Nom"] = "le nom de famille de Toto...";
$toto["Age"] = 12;
$toto["Adresse"] = "22 rue des bois fleuri";

echo "-------------------------------TABLEAU";
echo "<ul>";
echo "<li>".$tableau[0]."</li>"; 
echo "<li>".$tableau[1]."</li>";
echo "<li>".$tableau[2]."</li>";
echo "</ul>";
echo "<ul>";
echo "avec foreach";
foreach ($tableau as $key => $value) {
    echo "<li>[".$key."]".$value."</li>";
}
echo "</ul>";
echo "-------------------------------tab";
var_dump($tab);
// echo $tab[0]; Warning: Array to string conversion in /var/www/html/s2/serie-2/1.php on line 30
// echo $tab[1];
// echo $tab[2];
echo "<ul>";
echo "<li>".$tab[0][0]."</li>";
echo "<li>".$tab[0][1]."</li>";
echo "<li>".$tab[1][0]."</li>";
echo "<li>".$tab[1][1]."</li>";
echo "</ul>";
echo "avec foreach";
foreach ($tab as $key => $soustableau) {
    echo "<li> clé:[".$key."]</li>";
    foreach ($soustableau as $key => $value) {
        echo "<li>[".$key."]".$value."</li>";
    }
}
echo "</ul>";
echo "-------------------------------TOTO";
echo "<ul>";
echo "<li>".$toto["Nom"]."</li>"; 
// echo "<li>".$toto["Prenom"]."</li>";Warning: Undefined array key "Prenom" in /var/www/html/s2/serie-2/1.php on line 50
// echo "<li>".$toto["adresse"]."</li>";Warning: Undefined array key "adresse" in /var/www/html/s2/serie-2/1.php on line 51
echo "<li>".$toto["Adresse"]."</li>";
echo "<li>".$toto["Age"]."</li>";
echo "</ul>";
echo "<ul>";