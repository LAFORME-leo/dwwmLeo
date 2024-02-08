let images = document.querySelectorAll('img');
images.forEach(image => {
    console.log("ajout d'une image");
    image.addEventListener('dblclick',changeVisibility);
    image.addEventListener('click',changeDisplay);
});
let btn_showAll =document.querySelector('#btn_showAll')
btn_showAll.addEventListener('click',showAll)
let btn_hideAll = document.querySelector('#btn_hideAll')
btn_hideAll.addEventListener('click',hideAll)