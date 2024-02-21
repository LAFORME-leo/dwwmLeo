<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title"><?= $film->getTitre() ?></h5>
        <ul>
            <li>réalisateur: <?= $film->getRealisateur() ?></li>
            <li>Année: <?= $film->getAnnee() ?></li>
            <li>Note : <?= $film->getNote() ?>/10</li>
        </ul>
    </div>
</div>