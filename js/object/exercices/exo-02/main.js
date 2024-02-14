document.addEventListener('DOMContentLoaded',()=>{
    let longueur = prompt('Longeur=?');
    let largeur = prompt('Largeur=?')
    let rectangle = new Rectangle(longueur,largeur);
    console.log(rectangle.getSurface());
    console.log(rectangle.getPerimetre());

    let rayon = prompt('rayon=?')
    let cercle = new Cercle(rayon);
    console.log(cercle.getSurface());
    console.log(cercle.getPerimetre());
})