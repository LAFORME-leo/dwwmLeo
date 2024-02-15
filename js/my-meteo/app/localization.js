function changeLanguage(event)
{
    console.log('call:changeLanguage');
    console.log(event.target.getAttribute('value'));
    localStorage.setItem('language',event.target.getAttribute('value'))
}
function changeUnits(event)
{
    console.log('call:changeUnits');
    console.log(event.target.getAttribute('value'));
    localStorage.setItem('units',event.target.getAttribute('value'))
}