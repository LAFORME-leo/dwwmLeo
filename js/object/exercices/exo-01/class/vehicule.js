class Vehicule
{
    marque;
    modele ="4l";
    nombrePlace;
    constructor(pMarque,pModele,pNombrePlace)
    {
        this.marque = pMarque
        this.modele = pModele;
        this.nombrePlace = pNombrePlace;
    }
    afficher()
    {
        return JSON.stringify(this);
    }
}