<?php 
require_once "entity/film.php";
//  $films = [
//     "The Shawshank Redemption" => ["realisateur" => "Frank Darabon", "annee" => 1994, "note" => 9.2],
//     "The Godfather" => ["realisateur" => "Christopher Nolan", "annee" => 1972, "note" => 9.2],
//     "The Dark Knight" => ["realisateur" => "Peter Jacksonn", "annee" => 2008, "note" => 9.2],
//     "The Lord of the Rings: The Return of the King" => ["realisateur" => "Frank Darabon", "annee" => 2003, "note" => 9.2],
//     "Pulp Fiction" => ["realisateur" => "Quentin Tarantino", "annee" => 1994, "note" => 9.2]
// ];
$films =[
    new Film("The Shawshank Redemption","Frank Darabon",1994,5),
    new Film("The Godfather","Christopher Nolan",1972,8.3),
    new Film("The Dark Knight","Christopher Nolan",1972,8.3),
    New Film("The Lord of the Rings: The Return of the King","Peter Jacksonn",2003,9)
];
include "templates/base.php";
