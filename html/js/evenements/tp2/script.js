
const btn_new = document.querySelector('#btn_new');
const citation = document.querySelector('#citation');
let btn_color =document.querySelector('#btn_color');

btn_new.addEventListener('click',afficherCitation);
btn_color.addEventListener('click',changerCouleur);

afficherCitation();
changerCouleur();
console.log(citations);