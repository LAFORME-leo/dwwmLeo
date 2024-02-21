<?php
// •	The Shawshank Redemption : Frank Darabont
// •	The Godfather : Francis Ford Coppola
// •	The Dark Knight : Christopher Nolan
// •	The Lord of the Rings: The Return of the King : Peter Jackson
// •	Pulp Fiction : Quentin Tarantino
// $films = [
//     ["titre" => "The Shawshank Redemption", "realisateur" => "Frank Darabon"],
//     ["titre" => "The Godfather", "realisateur" => "Christopher Nolan"],
//     ["titre" => "The Dark Knight", "realisateur" => "Peter Jacksonn"],
//     ["titre" => "The Lord of the Rings: The Return of the King", "realisateur" => "Frank Darabon"],
//     ["titre" => "Pulp Fiction", "realisateur" => "Quentin Tarantino"]
// ];
$films = [
    "The Shawshank Redemption" => ["realisateur" => "Frank Darabon", "annee" => 1994, "note" => 9.2],
    "The Godfather" => ["realisateur" => "Christopher Nolan", "annee" => 1972, "note" => 9.2],
    "The Dark Knight" => ["realisateur" => "Peter Jacksonn", "annee" => 2008, "note" => 9.2],
    "The Lord of the Rings: The Return of the King" => ["realisateur" => "Frank Darabon", "annee" => 2003, "note" => 9.2],
    "Pulp Fiction" => ["realisateur" => "Quentin Tarantino", "annee" => 1994, "note" => 9.2]
];
echo "<ul>";
foreach ($films as $key => $film) {
    echo "<li>titre $key</li>";
    echo "<ul>";
    foreach ($film as $key => $value) {
        echo "<li> $key: $value </li>";
    }
    echo "</ul>";

}
echo "</ul>";