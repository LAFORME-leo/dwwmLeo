//exercice 1

function afficherLesNombres(pNombre)
{
    let texte=""
    for(let i=1;i<=pNombre;i++)
    {
        texte+=i;
    }
    return texte;
}
//exercice 2
function afficherLesNombresRebours(pNombre)
{
    let texte=""
    for(let i=pNombre;i>=1;i--)
    {
        texte+=i;
    }
    return texte;
}
//exercice 3
function afficherLesNombresPairs(pNombre)
{
    let texte="";
    for(let i=2;i<=pNombre;i+=2)
    {
        // texte+=i+"-";
        texte+=i;
        if (i<pNombre-1)
            texte+="-";
    }
    return texte;
}
function afficherNombresPairsJP(nombre){
    //#region code
 let texte="";
     for(let u=1;u<=nombre;u++){
        let pair = u*2;
        if(u == nombre){
            texte += `${pair}`;
        } else {
            texte += `${pair} - `;
        }
    }
    return texte;
    //#endregion
}
function bidouilleAleatoire()
{
    texte+="lulu";
}
function afficherPuissancesDeDeux(pNombre)
{
    let texte= "";
    for(let i=0;i<=pNombre;i++)
    {
        texte+=`2^${i}=${2**i}\n`;
    }
    return texte;
}
function afficherPuissancesDeDeuxWhile(pNombre)
{
    let texte= "";
    let i =0;
   while(i<=pNombre)
    {
        texte+=`2^${i}=${2**i}\n`;
        i++;
    }
    return texte;
}