function afficherCitation()
{ 
    
    let n = Math.floor(Math.random()*citations.length);
    citation.textContent=citations[n];

}
function changerCouleur()
{
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    citation.style.backgroundColor="rgb("+r+","+g+","+b+")";
}