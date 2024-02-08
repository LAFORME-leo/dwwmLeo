function getCookieListInArray(pCookies) {
    // test de garde pour éviter les erreurs
    if ((pCookies.length == 0)||(!pCookies.contains(';'))||(!pCookies.contains('=')))
    return Array();
    // découpage de la chaine en tableau de cookies.
    let listeCookies = new Array();
    pCookies.split(';').forEach(element => {
        let temporaire = element.split('=');
        // séparation clé et valeur en tableau indexé avec la clé
        let cle=temporaire[0].trim();
        let valeur=temporaire[1].trim()
        listeCookies[cle] = valeur;
    });
    return listeCookies;
}

function changerModeAffichage(event)
{
    if (document.body.classList.contains('lightMode'))
        {
            document.body.classList.replace('lightMode','blackMode')
            document.cookie="mode=blackMode;"
        }
    else
        {
            document.body.classList.replace('blackMode','lightMode')
            document.cookie="mode=lightMode;"
        }
   
    }
function chargerModeAffichage()
{
    console.log('chargerModeAffichage');
    console.log(document.cookie);
    const listeCookies = getCookieListInArray(document.cookie)
    console.log(listeCookies);
    if (listeCookies['mode']=='lightMode')
    {
        console.log('passage au light');
        document.body.classList.remove('blackMode');
        document.body.classList.add('lightMode');
    }
    else
    {
        console.log('passage au black');
        document.body.classList.add('blackMode');
        document.body.classList.remove('lightMode'); 
    }

}