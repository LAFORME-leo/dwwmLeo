"use strict";
const valeur =5;
// valeur+=1;
// console.log(valeur);
let liste = document.querySelector('#liste');
afficherUl(liste);
for(let i=1;i<=5;i++)
{
    let li = document.createElement('li');
    li.textContent=i;
    liste.appendChild(li);
    console.log('ajout de:'+i);
}
afficherUl(liste);
/**
 * LISTE 2: const
 */
console.log('liste2');
const liste2 = document.querySelector('#liste2');
afficherUl(liste2);
for(let i=1;i<=5;i++)
{
    let li = document.createElement('li');
    li.textContent="liste 2"+i;
    liste2.appendChild(li);
    console.log('ajout de:'+i);
}
afficherUl(liste2);
/**
 * ET LES PARAMETRES?
 */
console.log('bugging');
afficherUlBUGGED(liste);
afficherUl(liste);
/**
 * last etanche?
 */
console.log('etanche?');
afficherEtangeOuPas(liste);
console.log('etanche???');
afficherUl(liste);
/**
 * voie d'eau?
 */
autreTestEtancheite(liste)
console.log('pour reference');
afficherUl(liste);
autreTestEtancheite(liste2)
console.log('pour reference');
afficherUl(liste2);