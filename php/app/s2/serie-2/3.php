<?php
$films= ['The Shawshank Redemption','The Godfather','The Dark Knight','The Lord of the Rings: The Return of the King','Pulp Fiction'];

echo "<ul>";
foreach ($films as $key => $value) {
    echo '<li>['. $key .'] '. $value .'</li>';
}
echo "</ul>";