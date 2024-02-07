//abonnement des boutons
const btn_open = document.getElementById('btn_open');
const btn_resizeBy = document.querySelector('#btn_resizeBy');
const btn_resizeTo = document.querySelector('#btn_resizeTo');
const btn_close = document.querySelector('#btn_close');
let openWindow;

// gestion des événements des boutons
btn_open.addEventListener('click',
    () => {
        openWindow = window.open('1.html', '_blank', 'location=no,height=150,width=150,resizable')
    })
btn_resizeBy.addEventListener('click',  () =>{
    console.log('btn_resizeBy');
    openWindow.resizeBy(300, 300); //bloqué par le navigateur quand la fenetre vient d'un autre site
})
btn_resizeTo.addEventListener('click', function () {
    console.log('btn_resizeTo');
    openWindow.resizeTo(300, 200); //bloqué par le navigateur quand la fenetre vient d'un autre site

})
btn_close.addEventListener('click', function () {
    console.log('btn_close');
    openWindow.close(); //bloqué par le navigateur quand la fenetre vient d'un autre site

})
