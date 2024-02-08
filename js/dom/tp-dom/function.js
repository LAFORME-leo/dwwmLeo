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
            break;
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
    let titre = prompt('Saisir le texte du paragraphe svp');
    const newTitre = document.createElement('p')
    newTitre.textContent= titre;
    main.appendChild(newTitre);

}