class Stagiaire
{
    #nom;
    #prenom;
    age;
    saluer()
    {
        return `salut ${this.#prenom} ${this.#nom}`;
    }
    constructor (pPrenom="jane", pNom="doe",pAge=45)
    {
        // this.prenom = pPrenom
        // this.nom = pNom.toUpperCase()
        this.setNom(pNom)
        this.setPrenom(pPrenom)
        this.age = pAge;
    }
    setNom(pNom)
    {
        this.#nom = pNom.toUpperCase()      
    }
    setPrenom(pPrenom)
    {
        
        this.#prenom = pPrenom.charAt(0).toUpperCase() + pPrenom.slice(1);     
    }
    getPrenom()
    {
        return this.#prenom
    }
    getNom()
    {
        return this.#nom
    }
}