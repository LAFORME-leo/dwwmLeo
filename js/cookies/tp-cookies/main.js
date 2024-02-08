document.addEventListener('DOMContentLoaded',()=>
{
    const btn_switchMode = document.querySelector('#btn_switchMode');
    btn_switchMode.addEventListener('click',changerModeAffichage)
    chargerModeAffichage();
})