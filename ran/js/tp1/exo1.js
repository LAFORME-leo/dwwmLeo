let largeur = parseFloat(prompt('Largeur=?'));
let longueur = parseFloat(prompt('longueur=?'));

if ((!isNaN(longueur))&&(!isNaN(largeur)))
{
    let surface = longueur*largeur;
    alert(`Le rectangle de ${largeur}x${longueur} a pour surface ${surface}m².`);
}
else
{
alert(`Apprend à écrire wesh`);
}
