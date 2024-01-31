let p_message = document.querySelector('#p_message');
p_message.innerHTML="paragraphe ciblé avec succès.";

let btn_charger = document.querySelector('#btn_charger');
btn_charger.addEventListener('click',maFonction);
btn_charger.addEventListener('dblclick',(event)=>{
    console.log('yolooo anomymous est dans la place');
    console.log(event);
});

let div_info = document.querySelector('#div_info');
div_info.addEventListener('click',maFonction);
window.addEventListener('load',montrerInferface);
sleep(50000);