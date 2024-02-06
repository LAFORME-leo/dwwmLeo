const btn_Load = document.getElementById('#btn_load');
// const messages = document.querySelectorAll('.message');
const p_message = document.querySelector('#p_message');


p_message.innerHTML="paragraphe ciblé avec succès.";
p_message.textContent="paragraphe ciblé avec succès.";

console.log(p_message.hasAttribute('id'));
console.log(p_message.getAttribute('id'));
p_message.setAttribute('test','test_ajout_attribut');
console.log(p_message.getAttributeNames());
p_message.removeAttribute('test');

p_message.classList.add('classMessage')
p_message.classList.remove('classMessage')
p_message.classList.toggle('classMessage')

console.log(p_message.constructor.name);
let btn_charger = document.querySelector('#btn_charger');
btn_charger.addEventListener('click',maFonction);
btn_charger.addEventListener('dblclick',(event)=>{
    console.log('Anomymous est dans la place');
    console.log(event);
});

let div_info = document.querySelector('#div_info');
div_info.addEventListener('click',maFonction);
window.addEventListener('load',montrerInferface);
sleep(50000);

let nouvelElement = document.createElement("div");
document.body.appendChild(nouvelElement);

let parentElement = document.querySelector("#unElement");
let referenceElement = document.querySelector("#unAutreElement");
parentElement.insertBefore(nouvelElement, referenceElement);

parentElement.prepend(nouvelElement);


document.querySelector("#elementSupprime").remove();
// attention: elementASupprimer n'a plus aucune existance
let elementASupprimer = document.getElementById("elementSupprime");
elementASupprimer.parentNode.removeChild(elementASupprimer);
// attention elementASupprimer existe toujours en mémoire

// let nouvelElement = document.createElement("section");
let elementARemplacer = document.getElementById("elementRemplace");
elementARemplacer.parentNode.replaceChild(nouvelElement, elementARemplacer);
