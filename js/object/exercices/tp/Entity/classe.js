class Classe
{
    #intitule;
    #listeStagiaires;
    #dateDebut;
    #dateFin;
    constructor (pIntitule,pDateDebut,pDateFin)
    {
        this.#intitule = pIntitule;
        this.#listeStagiaires = new Array();
        this.#dateDebut = pDateDebut;
        this.#dateFin = pDateFin;
    }
    setDateDebut(pDate)
    {
        if (pDate instanceof Date)
            this.#dateDebut = pDate;
        else
            this.#dateDebut = new Date();
    }
    setDateFin(pDate)
    {
        if (pDate instanceof Date)
            this.#dateFin = pDate;
        else
            this.#dateFin = new Date();
    }
    ajouterStagiaire(pStagiaire)
    {
        if (pStagiaire instanceof Stagiaire)
        this.#listeStagiaires.push(pStagiaire)
    else
        console.log('pas un stagiaire:'+pStagiaire.constructor.name);
    }
    getListe()
    {
        return this.#listeStagiaires;
    }
    getIntitule()
    {
        return this.#intitule
    }
    
    afficher()
    {
        // toLocaleString('fr-FR',{year:'numeric', month: 'numeric', day: 'numeric',hour:'numeric',minute:"numeric",weekday:'long'})}`)
        return `${this.#intitule}: ${this.#dateDebut.toLocaleString(Config.codeLangue,Config.dateFormat)} au ${this.#dateFin.toLocaleString(Config.codeLangue,Config.dateFormat)}`;
    }
}