function changeVisibility(event){
    console.log('changeVisibility');
    event.target.style.visibility = 'hidden';
}
function changeDisplay(event){
    console.log('changeDisplay');
    event.target.style.display = 'none';
}
function showAll(event)
{
    let images = document.querySelectorAll('img');
    images.forEach(image => {
        image.style.display = 'block';
        image.style.visibility ="visible";
    });
}
function hideAll(event)
{
    let images = document.querySelectorAll('img');
    images.forEach(image => {
        image.style.display = 'none';
    });
}