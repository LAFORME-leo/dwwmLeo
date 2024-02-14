class Animal
{
    nom;
    espece;
    constructor(pNom,pEspece)
    {
        this.nom = pNom;
        this.espece = pEspece;
    }
    afficher()
    {
        return `${this.nom} (${this.espece})`
    }
}