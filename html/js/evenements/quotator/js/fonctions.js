function log(pTexte) {
    const date = new Date();
    console.log(`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} : ${date.getMilliseconds()}   - ${pTexte}`);
}
function afficherPageChargee() {
    log(nbChargements)
    if (nbChargements < 3)
        return;
    log("verification data");
    log('il y a ' + citationsZombies.length + ' citations zombies');
    log('il y a ' + citationsStartrek.length + ' citations startrex');
    log('il y a ' + citationsSda.length + ' citations sda');
    log(JSON.stringify(citationsSda))
    log('afficherPageChargee');
    const chargement = document.querySelector('#chargement');
    const contenu = document.querySelector('#contenu');
    log('changement affichage');
    chargement.style.display = "none";
    contenu.style.display = "block";
    log("fin afficherPageChargeea");
    afficherUneCitation('zombies',0,true);
}

async function chargerData(pJson, pTableau) {
    log('chargerData');
    const response = await fetch('./json/' + pJson + ".json");
    if (response.ok == true) {
        log('data chargé');
        const data = await response.json();
        data.forEach(citation => {
            pTableau.push(citation)
        });
    }
    else {
        log('error ' + response.status + '-' + response.statusText);
    }
    nbChargements+=1;
    afficherPageChargee();
   
} 
function afficherCitationClickAleatoire(event)
{
    log('afficherUneCitationClick id:'+event.target.id)
    let n = 0;
    switch (event.target.id) {
        case 'zombies':
            n = Math.floor(Math.random()*citationsZombies.length)
            break;
        case 'sda':
            n = Math.floor(Math.random()*citationsSda.length)
            break;
        case 'startrek':
            n = Math.floor(Math.random()*citationsStartrek.length)
            break;
        default:
            n = Math.floor(Math.random()*citationsZombies.length)
    }
    afficherUneCitation(event.target.id, n,true);
}
function afficherCitationClickPrecedent(event)
{
    afficherUneCitation(historique[positionCourante-1].theme,historique[positionCourante-1].indice,false);
    miseAJourBoutonPrec();
}
function miseAJourBoutonPrec() {
    positionCourante--;
    if (positionCourante == 0) {
        btn_prec.disabled = true;
    }
    btn_suiv.disabled = false;
}

function afficherCitationClickSuivant(event)
{
    afficherUneCitation(historique[positionCourante+1].theme,historique[positionCourante+1].indice,false);
    miseAJourBoutonSuiv();
}
function miseAJourBoutonSuiv() {
    positionCourante++;
    if (positionCourante == historique.length - 1) {
        btn_suiv.disabled = true;
    }
    btn_prec.disabled = false;
}

function afficherUneCitation(pJson,pIndice,pHistoriser)
{
    log('debut afficherUneCitation ['+pJson+','+pIndice+']');
    if (pHistoriser)
        historisationNavigation(pJson, pIndice);

        switch (pJson) {
        case 'zombies':
                auteur.textContent = citationsZombies[pIndice].auteur
                citation.textContent = citationsZombies[pIndice].texte
            //    setTheme('zombies')
            break;
        case 'sda':
                auteur.textContent = citationsSda[pIndice].auteur
                citation.textContent = citationsSda[pIndice].texte
             //   setTheme('sda')
            break;
        case 'startrek':
            auteur.textContent = citationsStartrek[pIndice].auteur
            citation.textContent = citationsStartrek[pIndice].texte
          //  setTheme('startrek')
        break;
        default:
                auteur.textContent = citationsZombies[pIndice].auteur
                citation.textContent = citationsZombies[pIndice].texte
//setTheme('zombies')
            break;
    }
    log('fin afficherUneCitation');
}
function historisationNavigation(pJson, pIndice) {
        log('historisationNavigation:debut');
        ajoutCitationCouranteToHistorique(pJson, pIndice);
        activationJourBoutonPrec();   
        log('historisationNavigation:fin');
}

function activationJourBoutonPrec() {
    if (historique.length > 1)
        btn_prec.disabled = false;
    positionCourante = historique.length - 1;
}

function ajoutCitationCouranteToHistorique(pJson, pIndice) {
    log('ajoutCitationCouranteToHistorique');
    historique.push({ theme: pJson, indice: pIndice });
    if (historique.length > 3)
        historique.shift();
    log('historisation: il y a ' + historique.length);
}

function setTheme(pTheme)
{
    switch (pTheme) {
        case 'zombies':
            btn_prec.classList.add('btn_zombies');
            btn_prec.classList.remove('btn_sda');
            btn_prec.classList.remove('btn_startrek');
            btn_suiv.classList.add('btn_zombies');
            btn_suiv.classList.remove('btn_sda');
            btn_suiv.classList.remove('btn_startrek');
            break;
        case 'sda':
            btn_prec.classList.remove('btn_zombies');
            btn_prec.classList.add('btn_sda');
            btn_prec.classList.remove('btn_startrek');
            btn_suiv.classList.remove('btn_zombies');
            btn_suiv.classList.add('btn_sda');
            btn_suiv.classList.remove('btn_startrek');
            break;
        case 'startrek':
            btn_prec.classList.remove('btn_zombies');
            btn_prec.classList.remove('btn_sda');
            btn_prec.classList.add('btn_startrek');
            btn_suiv.classList.remove('btn_zombies');
            btn_suiv.classList.remove('btn_sda');
            btn_suiv.classList.add('btn_startrek');
            break;
        default:
            break;
    }
}
function rechercherCitation()
{
    const termesRecherche = txt_recherche.value.toLowerCase();

    const resultatRechercheZombie = citationsZombies.filter(citation => {
             return citation.texte.toLowerCase().includes(termesRecherche) || citation.auteur.toLowerCase().includes(termesRecherche);});
    const resultatRechercheSda = citationsSda.filter(citation => {
    return citation.texte.toLowerCase().includes(termesRecherche) || citation.auteur.toLowerCase().includes(termesRecherche);});
    const resultatRechercheStartrek = citationsStartrek.filter(citation => {
        return citation.texte.toLowerCase().includes(termesRecherche) || citation.auteur.toLowerCase().includes(termesRecherche);});
        let resultatRecherche = resultatRechercheSda.concat(resultatRechercheStartrek)
        resultatRecherche = resultatRechercheZombie.concat(resultatRecherche);
    // resultatRecherche contient toutes les citations
    while (ul_resultat_recherche.firstChild) {
        ul_resultat_recherche.removeChild(ul_resultat_recherche.firstChild);
    }
    resultatRecherche.forEach(citation => {
        const li = document.createElement('li');
        li.textContent = `"${citation.texte}" par ${citation.auteur}`;
        ul_resultat_recherche.appendChild(li);
        
    });

}