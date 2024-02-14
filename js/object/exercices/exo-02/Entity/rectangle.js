class Rectangle
{
    #longeur;
    #largeur;
    constructor(pLongeur,pLargeur)
    {
        this.#largeur= parseInt(pLargeur);
        this.#longeur=parseInt(pLongeur)
    }
    getSurface()
    {
        console.log(this);
        return this.#largeur*this.#longeur
    }
    getPerimetre()
    {
        return (this.#largeur+this.#longeur)*2
    }
}