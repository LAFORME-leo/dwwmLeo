class Calcul
{
    #nombre1;
    #nombre2;
    constructor(pN1=0,pN2=0)
    {
        this.setNombre1(pN1)
        this.setNombre2(pN2)
    }
    setNombre1(pNombre)
    {
        console.log();
        // this.#nombre1 = parseFloat(pNombre)
        this.#nombre1 = isNaN(parseFloat(pNombre))?0:parseFloat(pNombre);
    }
    setNombre2(pNombre)
    {
        // this.#nombre2= parseFloat(pNombre)
        this.#nombre2 = isNaN(parseFloat(pNombre))?0:parseFloat(pNombre);
    }
    getNombre1()
    {
        return this.#nombre1
    }
    getNombre2()
    {
        return this.#nombre2
    }
    add()
    {
        return this.#nombre1+this.#nombre2
    }
    multiply()
    {
        return this.#nombre1*this.#nombre2
    }
}