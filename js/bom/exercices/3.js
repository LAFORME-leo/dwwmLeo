document.addEventListener('DOMContentLoaded',()=>
{
    // ainsi, pas besoin de DEFER
    console.log('DOMContentLoaded');
    const p1 = document.querySelector('#p1')
    navigator.geolocation.getCurrentPosition(afficherPosition,afficherErreurPosition)
})

function afficherPosition(pPosition)
{
    p1.textContent = `${pPosition.coords.latitude}:${pPosition.coords.longitude}`;
}
function afficherErreurPosition(pError)
{
    console.log(pError);
}