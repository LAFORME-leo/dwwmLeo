function afficherUl(pListe)
{
    console.log(`la liste contient ${pListe.childNodes.length} éléments.`);
    // console.log(pListe);
}

function afficherUlBUGGED(pListe)
//function ajouterUnElementEtAfficher(pListe)
{
    console.log('afficherUlBUGGED>modification pListe (parametre passé en référence!)');
    console.log(`la liste contient ${pListe.childNodes.length} éléments.`);
    console.log('ajout d\'un élement element pirate');
    let li = document.createElement('li');
    li.textContent="piwate";
    pListe.appendChild(li);
    // console.log(pListe);
    console.log(`la liste contient ${pListe.childNodes.length} éléments: intru a bord.`);
}
function afficherEtangeOuPas()
{
    console.log('afficherEtangeOuPas>variable locale a la fonction pointant vers la liste');
    let laListe = document.querySelector('#liste')
    console.log(`la liste contient ${laListe.childNodes.length} éléments. avant ajout test de coque`);
    console.log('ajout element pirate');
    let li = document.createElement('li');
    li.textContent="piwate en cours de test de coque";
    laListe.appendChild(li);
    console.log(`la liste contient ${laListe.childNodes.length} éléments apres test de coque.`);
    // console.log(laListe);
}
function autreTestEtancheite(pListe)
{
    console.log('autreTestEtancheite>remplacement pListe (parametre passé en référence!) a partir d\'une autre liste');
    console.log(`la liste contient ${pListe.childNodes.length} éléments avant remplacement.`);
    console.log('remplacement');
    pListe = document.querySelector('#liste3');
    // console.log(pListe);
    console.log(`la liste contient ${pListe.childNodes.length} éléments.`);
}

