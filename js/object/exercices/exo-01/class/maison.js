class Maison
{
    numeroRue;
    typeVoie;
    nomVoie;
    codePostal;
    ville;
    constructor(pNumeroRue="1",pTypeVoie="avenue",pNomVoie="Marechal Joffre",pCodePostal=3600,pVille="Vierzon")
    {
        this.numeroRue = pNumeroRue
        this.nomVoie = pNomVoie
        this.typeVoie = pTypeVoie
        this.codePostal = pCodePostal
        this.ville = pVille
    }
    afficher()
    {
        return `${this.numeroRue} ${this.typeVoie} ${this.nomVoie} - ${this.codePostal} ${this.ville}`
    }
} 