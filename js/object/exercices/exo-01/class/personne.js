class Personne
{
    #prenom;
    nom;
    adresse;
    constructor(pNom,pPrenom, pAdresse)
    {
        this.nom = pNom;
        // this.prenom = pPrenom;
        this.setPrenom(pPrenom) ;
        this.adresse = pAdresse;
    }

    afficher()
    {

        return `${this.getPrenom()} ${this.nom} ${this.adresse.afficher()}`
    }
    getPrenom()
    {
        // if (this.prenom === undefined)
        //     return "John"
        // else
        //     return this.prenom
        let prenom = (this.#prenom === undefined)?"John":this.#prenom;
        return prenom;
    }
    setPrenom(pPrenom)


    {
        if (pPrenom===undefined|| pPrenom.length <5)
            this.#prenom = "Jane";
    }
}