$(document).ready(function () {
    $('#btn_search').click(searchCityMeteo)
    $('#btn_localize').click(getGeoLocation)
    $('#btn_forget').click(()=>{localStorage.clear()})
    $('.lang_choice').each(function (indexInArray) { 
        $(this).click(changeLanguage)
    });
    $('.units_choice').each(function (indexInArray) { 
        $(this).click(changeUnits)
    });

    if (localStorage.getItem('coords'))
    {
        console.log(JSON.parse(localStorage.getItem('coords')));
        searchCityGeoloc(JSON.parse(localStorage.getItem('coords')))
    }
    else
        console.log('coords est vide');
    console.log(localStorage.getItem('language'));
    console.log('yolo');
    if ((localStorage.getItem('language')==null)||(localStorage.getItem('language')==''))
        {
            console.log('localStorage-language est vide');
            localStorage.setItem('language','fr')
        }
        if ((localStorage.getItem('units')==null) ||(localStorage.getItem('units')==''))
        {
            console.log('localStorage-units est vide');
            localStorage.setItem('units','metric')
        }
    
});