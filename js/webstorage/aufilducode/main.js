document.addEventListener('DOMContentLoaded',()=>{
// Cette fonction permet de vérifier que tout le contenu est chargé avant d'exécuter la fonction "afficherDemanderPrenom"
    const btn_oublier = document.querySelector('#btn_oublier')
    //On selectionne la id du boutton
    btn_oublier.addEventListener('click',()=>
    {
        sessionStorage.clear()
        // On efface tout le contenu stocké dans le navigateur, lié au bouton avec l'id #btn_oublier
    })
    // cela va appeler une fonction
    afficherDemanderPrenom();
})


function afficherDemanderPrenom() {
    console.table(sessionStorage.getItem('prenom'));
    if ((sessionStorage.getItem('prenom') == '') || (sessionStorage.getItem('prenom') == null)) {
        let prenom = prompt('Quel est votre prénom?');
        sessionStorage.setItem('prenom', prenom);
        // On place la variable "prompted" 'prenom' dans le stockage du navigateur pour l'attribut 'prenom'
        // Contrairement à cookies, qui est sauvegardé sur le disque dur, SessionStorage utilise le navigateur pour stocker et récupérer les infos
    }

    else {
        alert(sessionStorage.getItem('prenom'));
    }
}

