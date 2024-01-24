function surfaceCercle(pRayon)
{
    //surface = Math.PI*Math.pow(pRayon,2);
   //return surface;
   return Math.PI*Math.pow(pRayon,2);
}
function surfaceRectangle(pLongeur,pLargeur)
{
   return pLongeur*pLargeur
}
function surfaceCarre(pCote)
{
    //return pCote**2;
    // return Math.pow(pCote,2)
    return surfaceRectangle(pCote,pCote);
}




