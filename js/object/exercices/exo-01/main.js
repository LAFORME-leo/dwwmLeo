"use strict";
document.addEventListener('DOMContentLoaded',()=>
{
    let formateur = new Personne('BRU','Thierry',new Maison())
    let chatFormateur = new Animal('Elriwithiel','chat')
    let vehiculeFormateur = new Vehicule('ninebot','NavBOT G MAX',1)
    let domicile = new Maison(1, 'rue', ' du Paradis',4000,'San Andreas')

    console.log(formateur.afficher());
    console.log(chatFormateur.afficher());
    console.log(vehiculeFormateur.afficher());
    console.log(domicile.afficher());
    console.log(formateur.prenom);
    formateur.prenom = "toto"
    console.log(formateur.getPrenom());
    console.log(formateur);
    console.log(formateur.prenom);

    // let prenom = prompt('Prénom?')
    // let nom = prompt('Nom?')
    // let personne = new Personne(nom,prenom,domicile)
    // console.log(personne.afficher());
    // console.log(personne);
})