class Personne
{
    prenom;
    nom;
    constructor(pPrenom,pNom)
    {
            this.prenom  = pPrenom;
            this.nom  = pNom;
    }
    afficherInfo()
    {
        console.log('afficherInfo()');
        return `vous regardez les infos de ${this.prenom} ${this.nom}`;
    }
    toString()
    {
        return JSON.stringify(this);
    }
}