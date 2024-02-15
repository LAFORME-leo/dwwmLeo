function getGeoLocation()
{
    navigator.geolocation.getCurrentPosition(onPositionFound,onError)
}
function onError()
{
    console.log('errooooor');
}
function onPositionFound(pCoords)
{
    searchCityGeoloc(pCoords.coords)
}