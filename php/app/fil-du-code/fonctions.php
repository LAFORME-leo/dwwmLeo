<?php
function testFonction(int $nombre)
{
    return $nombre +10;
}


echo testFonction(50);
try {
    echo testFonction("bonjour");
} catch (Throwable $e) {
    echo "WESH ca a foiradé!";
     var_dump($e);
}

?>