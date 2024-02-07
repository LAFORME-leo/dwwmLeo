document.cookie='mode=light;max-age='+30*24*60*60+";secure";
// document.cookie='langue=french;max-age='+30*24*60*60;
// document.cookie='lang=;max-age=1';
// document.cookie='langu=;max-age=1';

function getCookieListInArray(pCookies) {
    let listeCookies = new Array();
    pCookies.split(';').forEach(element => {
        let temporaire = element.split('=');
        listeCookies[temporaire[0].trim()] = temporaire[1].trim();
    });
    return listeCookies;
}

const mesCookies = getCookieListInArray(document.cookie)
console.table(mesCookies);
