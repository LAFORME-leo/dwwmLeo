document.cookie='mode=light;max-age='+30*24*60*60+";secure";
// 'max-age' permet de donner un "compte à rebours" pour l'attribut à laquelle on l'attache
// 'max-age' est un attribut global
// Par exemple, ici, le cookie pour le mode=light durera 1 mois (=30 jours*24 heures*60 minutes*60 secondes)
// document.cookie='langue=french;max-age='+30*24*60*60;
// document.cookie='lang=;max-age=1';
// document.cookie='langu=;max-age=1';

function getCookieListInArray(pCookies) {
    let listeCookies = new Array();
    pCookies.split(';').forEach(element => {
        // .split mets toutes les données de pCookies dans un tableau, puis on parcours le tableau entier avec forEach
        let temporaire = element.split('=');
        // On met en variable une chaine qui va séparer tous les éléments du tableau
        let cle =temporaire[0].trim();
        let valeur=temporaire[1].trim();
        listeCookies[cle] = valeur;
        // Permet de retourner toutes les valeurs du split (tableau) selon l'index, avec chaques ensembles séparés par ";".
    });
    return listeCookies;
}

const mesCookies = getCookieListInArray(document.cookie)
console.table(mesCookies);
