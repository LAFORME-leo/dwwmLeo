
// // console.log(pRayon); la variable est privée
// let rayonA=parseInt(prompt('Saisir un rayon'));
// let surfaceA = surfaceCercle(rayonA);
// // let surfaceA = Math.PI*Math.pow(rayonA,2);
// console.log(surfaceA);

// let rayonB=parseInt(prompt('Saisir un rayon'));
// // let surfaceB =Math.PI*Math.pow(rayonB,2);
// let surfaceB = surfaceCercle(rayonB);
// console.log(surfaceB);

// if (surfaceB>surfaceA)
// {
//     console.log('le plus grand cercle fait '+surfaceB+' de surface');
// }
// else
// {
//     console.log('le plus grand cercle fait '+surfaceA+' de surface');
// }

// //
let rayonA2=parseInt(prompt('Saisir un rayon'));
let rayonB2=parseInt(prompt('Saisir un rayon'));
if (surfaceCercle(rayonB2)>surfaceCercle(rayonA2))
{
    console.log('le plus grand cercle fait '+surfaceB+' de surface');
}
else
{
    console.log('le plus grand cercle fait '+surfaceA+' de surface');
}
