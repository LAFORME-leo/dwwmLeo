const valeurDepart = document.querySelector('#valeurDepart');
const valeurArrivee = document.querySelector('#valeurArrivee');
const boutons = document.querySelectorAll('.boutonSaisie');
const radiosMonnaies = document.querySelectorAll('input[type=radio]');
const monnaieArrivee = document.querySelector('#monnaieArrivee');
const convertir = document.querySelector('#convertir');
const tauxConversion = new Array();
recupData();
console.log(monnaieArrivee);
boutons.forEach(bouton => {
    bouton.addEventListener('click',clickSaisie);
});
convertir.addEventListener('click',calculerConversion);
document.addEventListener('keydown',keyboardSaisie)
radiosMonnaies.forEach(radio => {
    radio.addEventListener('change',calculerConversion);
});


     