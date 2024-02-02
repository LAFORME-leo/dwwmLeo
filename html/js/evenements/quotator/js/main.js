log("debut main.JS")
const citationsZombies =new Array();
const citationsSda =new Array();
const citationsStartrek =new Array();

const historique = new Array();
let positionCourante = -1;

const auteur = document.querySelector('#auteur');
const citation =document.querySelector('#citation');

const btn_zombies = document.querySelector('#zombies');
const btn_sda = document.querySelector('#sda');
const btn_startrek = document.querySelector('#startrek');
const btn_prec = document.querySelector('#prec');
const btn_suiv = document.querySelector('#suiv');
const  btn_recherche =document.querySelector('#btn_recherche')

const  txt_recherche =document.querySelector('#txt_recherche')
const ul_resultat_recherche = document.querySelector('#ul_resultat_recherche');
const recherche = document.querySelector('#recherche');
 


btn_zombies.addEventListener('click',afficherCitationClickAleatoire);
btn_sda.addEventListener('click',afficherCitationClickAleatoire);
btn_startrek.addEventListener('click',afficherCitationClickAleatoire);
btn_prec.addEventListener('click',afficherCitationClickPrecedent)
btn_suiv.addEventListener('click',afficherCitationClickSuivant)
btn_recherche.addEventListener('click',rechercherCitation);


let nbChargements =0;
const messageLog = document.querySelector('#messageLog');
chargerData('zombies',citationsZombies);
chargerData('sda',citationsSda)
chargerData('startrek',citationsStartrek)



log("fin main.JS")
