let rayon = parseFloat(prompt('rayon=?'));

if (!isNaN(rayon))
{
    let surface = Math.PI *rayon**2; // Math.pow(rayon,2)
    alert(`le cercle de rayon ${rayon} a comme surface ${surface}`);

}