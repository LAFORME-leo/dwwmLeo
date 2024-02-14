var listeClasses = new Array();
document.addEventListener('DOMContentLoaded', () => {
    // let stagiaire1 = ['Martin','DUPONT']
    // let stagiaire2 = ['Kevin','JACQUET']
    // let stagiaire3 = ['Kevin','JACQUET',42]
    // let stagiaires = [stagiaire1,stagiaire2,stagiaire3]
    // console.log(stagiaires);
    // console.log(stagiaires[1][1]);
    // stagiaires[1][0]=42
    // console.log(stagiaires[1][0]);
    // console.log(stagiaires);
    // console.log(stagiaires[1][2]);
    // console.log(stagiaires[2][2]);
    // let stagiaire1 = new Stagiaire();
    // stagiaire1.nom="ALLOU"
    // stagiaire1.prenom="Jean-Paul"
    // let stagiaire2 = new Stagiaire();
    // stagiaire2.nom = "PLAZZOTTA"
    // stagiaire2.prenom ="Aurelien"
    // let autreStagiaire = { prenom: 'dudule' }
    // let stagiaire1 = new Stagiaire("jean-Paul", "allou", 35)
    // let stagiaire2 = new Stagiaire("aurelien", "plazzota", 25)
    // let stagiaires = [stagiaire1, stagiaire2]
    // // stagiaires.push(autreStagiaire);
    // console.table(stagiaires);
    // stagiaires.forEach(stagiaire => {
    //     console.log(stagiaire.constructor.name)
    //     console.log(stagiaire.saluer())
    //     console.log(JSON.stringify(stagiaire))
    // });
    // console.log(new Stagiaire())
    //     ;
    // lesStagiairesEnClasse = new Classe('DWWM2024lesmeilleurs',new Date(2024,0,3),new Date(2024,8,9));
    // lesStagiairesEnClasse.ajouterStagiaire(stagiaire1)
    // lesStagiairesEnClasse.ajouterStagiaire(stagiaire2)
    // //    lesStagiairesEnClasse.listeStagiaires.push(stagiaire2);
    // //    lesStagiairesEnClasse.listeStagiaires.push(autreStagiaire);
    // //    console.log(lesStagiairesEnClasse);
    // console.log(lesStagiairesEnClasse.afficher());
    // lesStagiairesEnClasse.ajouterStagiaire(autreStagiaire)
    // lesStagiairesEnClasse.getListe().forEach(stagiaire => {
    //     console.log(stagiaire.constructor.name)
    //     console.log(stagiaire.saluer())
    // });

    const btn_ajouter = document.querySelector('#btn_ajout')
    const btn_log = document.querySelector('#btn_log')
    const txt_intitule = document.querySelector('#txt_intitule')
    const date_debut = document.querySelector('#date_debut')
    const date_fin = document.querySelector('#date_fin')
    btn_ajouter.addEventListener('click',ajouterClasse)
    btn_log.addEventListener('click',()=>{
        console.log(listeClasses);

    })
})