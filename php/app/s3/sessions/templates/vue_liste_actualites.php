<?php foreach ($actualites as $key => $actualite) {?>  
    <? include 'vue_actualite.php'?>
<?php }?>
<form method="GET">
        <select name="nb" id="">
            <option value="5" <?=$nbActualites==5?'SELECTED':''?>>5</option>
            <option value="6" <?=$nbActualites==6?'SELECTED':''?>>6</option>
            <option value="7" <?=$nbActualites==7?'SELECTED':''?>>7</option>
            <option value="8" <?=$nbActualites==8?'SELECTED':''?>>8</option>
            <option value="9" <?=$nbActualites==9?'SELECTED':''?>>9</option>
            <option value="10" <?=$nbActualites==10?'SELECTED':''?>>10</option>
        </select>
        <button>choisir</button>
</form>