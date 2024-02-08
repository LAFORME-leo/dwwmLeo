function couleurAleatoire()
{
    return {r:aleatoire255(),g:aleatoire255(),b:aleatoire255()}
}
function aleatoire255()
{
    return Math.floor(Math.random()*255)
}

function mettreCouleurFondBodyAleatoire()
{
    console.log('changement couleur');
    let couleur = couleurAleatoire();
    changerCouleurFond(couleur);
}

function changerCouleurFond(pCouleur) {
    console.log(pCouleur);
    document.body.style.backgroundColor = 'rgb(' + pCouleur.r + ',' + pCouleur.g + ',' + pCouleur.b + ')';
}

function passerCouleurFondBlancNoirOuNoirBlanc()
{
    console.log('passerCouleurFondBlancNoirOuNoirBlanc');
    console.log(document.body.style.backgroundColor.replaceAll(' ',''));
    // console.log(document.body.style.backgroundColor);
    // if ((document.body.style.backgroundColor.replaceAll(' ','') == 'rgb(255,255,255)')
    //     ||(document.body.style.backgroundColor.replaceAll(' ','') ==''))
    //     changerCouleurFond({r:0,g:0,b:0})
    // else
    //     changerCouleurFond({r:255,g:255,b:255})
    let couleurEnCours = document.body.style.backgroundColor.replaceAll(' ','');
    switch (couleurEnCours) {
        case 'rgb(255,255,255)':
            document.body.classList.toggle('black');
            changerCouleurFond({r:0,g:0,b:0})
            break;
        case '':  
            document.body.classList.toggle('black');
            changerCouleurFond({r:0,g:0,b:0})
            break;
        case 'rgb(0,0,0)':
            document.body.classList.toggle('black');
            changerCouleurFond({r:255,g:255,b:255})
            break;
        default:
            document.body.classList.remove('black');
            changerCouleurFond({r:255,g:255,b:255})
    }
}
function ajouterUnTitreH1()
{
    const main = document.querySelector('main');
    let titre = prompt('Saisir le titre svp');
    const newTitre = document.createElement('h1')
    newTitre.textContent= titre;
    main.appendChild(newTitre);
}
function ajouterUnParagraphe()
{
    const main = document.querySelector('main');
    const indice = document.querySelectorAll('p').length;
    let texte = prompt('Saisir le texte du paragraphe svp');
    const newPara = document.createElement('p')
    newPara.textContent= texte;
    newPara.id = "para_"+indice;
    main.appendChild(newPara);


    const newButton = document.createElement('button');
    newButton.textContent = "Masquer";
    newButton.value="hide";
    newButton.id = "btn_hide"+indice
    newButton.addEventListener('click',actionBoutonMasquer)
    newButton.cible = '#'+newPara.id;
    main.appendChild(newButton);

    const newButtonDelete = document.createElement('button');
    newButtonDelete.textContent = "X";
    newButtonDelete.value="delete";
    newButtonDelete.id = "btn_delete"+indice
    newButtonDelete.addEventListener('click',supprimerParagraphe)
    newButtonDelete.cible = '#'+newPara.id;
    main.appendChild(newButtonDelete);
}

function hideAllParagraphes(event)
{
    const commande = event.target.value;
    if (commande == 'hide')
            modifierVisibiliterListeParagraphes(event.target,'Afficher','show','none');
        else
            modifierVisibiliterListeParagraphes(event.target,'Cacher','hide','block')
}

function modifierVisibiliterListeParagraphes(pButton,pTexte,pCommande,pDisplayMode) {
    btn_addPara.disabled = (pCommande=='hide')?false:true;
    pButton.value = pCommande;
    pButton.textContent = pTexte;
    let listeParas = document.querySelectorAll('p');
    listeParas.forEach(para => {
        para.style.display = pDisplayMode;
    });
    let listeboutons = document.querySelectorAll('main button');
    listeboutons.forEach(bouton => {
        bouton.style.display = pDisplayMode;
    });
}
function actionBoutonMasquer(event)
{
    if (event.target.value == 'hide')
        modifierVisibiliteElement(event.target,'Afficher','show','none')
    else
        modifierVisibiliteElement(event.target,'Masquer','hide','block')
}
function modifierVisibiliteElement(pButton,pTexte,pCommande,pDisplayMode)
{
    pButton.value = pCommande;
    pButton.textContent = pTexte;
    const element = document.querySelector(pButton.cible)
    element.style.display = pDisplayMode;
}
function supprimerParagraphe(event)
{
    let target = event.target.cible;
    let elementCible = document.querySelector(target)
    elementCible.remove();
    document.querySelector(target.replace('#para_','#btn_hide')).remove()
    document.querySelector(target.replace('#para_','#btn_delete')).remove()
}