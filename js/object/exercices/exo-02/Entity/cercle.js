class Cercle
{
    #rayon;
    constructor(pRayon)
    {

        this.#rayon = this.setRayon(pRayon)
    }
    setRayon(pRayon)
    {
        if (isNaN(pRayon)||pRayon<0)
        {
            this.#rayon =0;
            return;
        }
    this.#rayon = parseInt(pRayon)
    }
    getSurface()
    {
        return (Math.PI*Math.pow(this.#rayon,2))
    }
    getPerimetre()
    {
        return (2*Math.PI*this.#rayon)
    }
}