function searchCityMeteo(event)
{
    console.log('call:searchCityMeteo');
    console.log(event);
    const city = $('#txt_city').val()
    console.log('city searched:'+city);
    const langue = localStorage.getItem('language')
    const units = localStorage.getItem('units')
    let params = `appid=fa36db5e87babab2d66fd8c6fd057c0e&q=${city}&lang=${langue}&units=${units}`;
    getMeteoParams(params);
    console.log('end:searchCityMeteo');
}

function searchCityGeoloc(pPosition)
{
    console.log('call:searchCityGeoloc');
    const langue = localStorage.getItem('language')
    const units = localStorage.getItem('units')
    let params = `appid=fa36db5e87babab2d66fd8c6fd057c0e&lat=${pPosition.latitude}&lon=${pPosition.longitude}&lang=${langue}&units=${units}`;
    getMeteoParams(params);
    console.log('end:searchCityGeoloc');
}

function getMeteoParams(params) {
    $.get('https://api.openweathermap.org/data/2.5/weather?' + params, (data) => {
        console.log(data);
        const iconUrl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        const card = createCardWithList(iconUrl,data.name,data.weather[0].description,data.main)
        $('#result').empty()
        $('#result').append(card)
        // on a récuperé la position gps de l'endroit cherché!
        // on change bien le nom lat -> latitude pour que cela donne les mêmes parametres qu'avec
        // geolocation.getCurrentPosition()
        localStorage.setItem('coords',JSON.stringify({latitude:data.coord.lat,longitude:data.coord.lon}));
    }).fail((request, status, errr) => {
        console.log(request);
        console.log(status);
        console.log(errr);
    });
}
