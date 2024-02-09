document.addEventListener('DOMContentLoaded',()=>
{
    // const formateur = new Personne();
    // formateur.nom ="BRU";
    // formateur.prenom ="Thierry";

    const formateur = new Personne('Thierry','BRU');
    console.log(formateur);
    console.log(formateur.toString());
    console.log(formateur.nom);
    console.log(formateur.afficherInfo());
    const stagiaire = {prenom:'Jean-Paul', nom:'ALLOU'};
    const stagiaire2 = {prenom:'Kevin', nom:'JACQUET',age:25};
    // console.log(Object.entries(stagiaire2));
    console.log(stagiaire.age);
    console.log(stagiaire2.age);
    console.log(JSON.stringify([5,3]));
    let formateurEnTexte =  JSON.stringify(formateur) ;
    console.log(JSON.parse(formateurEnTexte))
    console.log(formateur.constructor.name);

})