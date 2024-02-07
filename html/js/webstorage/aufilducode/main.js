document.addEventListener('DOMContentLoaded',()=>{

    const btn_oublier = document.querySelector('#btn_oublier')
    btn_oublier.addEventListener('click',()=>
    {
        sessionStorage.clear()
    })
    afficherDemanderPrenom();
})


function afficherDemanderPrenom() {
    console.table(sessionStorage.getItem('prenom'));
    if ((sessionStorage.getItem('prenom') == '') || (sessionStorage.getItem('prenom') == null)) {
        let prenom = prompt('Quel est votre prénom?');
        sessionStorage.setItem('prenom', prenom);
    }

    else {
        alert(sessionStorage.getItem('prenom'));
    }
}

