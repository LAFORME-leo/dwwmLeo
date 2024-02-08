document.addEventListener('DOMContentLoaded',()=>
{
    // <button id="btn_random">Random</button><button id="btn_switch">Switch </button><button id="btn_addTitle">Ajouter H</button><button id="btn_addPara">Ajouter P</button>

    const btn_random = document.querySelector('#btn_random');
    btn_random.addEventListener('click',mettreCouleurFondBodyAleatoire)

    const btn_switch = document.querySelector('#btn_switch');
    btn_switch.addEventListener('click',passerCouleurFondBlancNoirOuNoirBlanc)

    const btn_addTitle = document.querySelector('#btn_addTitle');
    btn_addTitle.addEventListener('click',ajouterUnTitreH1)

    const btn_addPara = document.querySelector('#btn_addPara');
    btn_addPara.addEventListener('click',ajouterUnParagraphe)
})