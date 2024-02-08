document.getElementById('p1').innerHTML ='taille fenetre ext:' + window.outerWidth + ' x ' +window.outerHeight;

document.getElementById('p1').innerHTML +='taille fenetre in:'  + window.innerWidth + ' x '+window.innerHeight;
document.getElementById('p1').innerHTML +='taille screen:'  + screen.availWidth + ' x '+screen.availHeight;

const locationLI = document.createElement('li')
locationLI.textContent = window.location;
const userAgentLI = document.createElement('li')
userAgentLI.textContent =window.navigator.userAgent;
const languageLI = document.createElement('li')
languageLI.textContent =window.navigator.language;

const listeUL=document.getElementById('liste');
listeUL.appendChild(locationLI);
listeUL.appendChild(userAgentLI);
listeUL.appendChild(languageLI);

document.querySelector('#btn_open').addEventListener('click',()=>{
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=0,height=0,left=-1000,top=-1000`;
   let newWindow = window.open('https://www.laposte.net','','');
    // window.open('https://www.laposte.net',"_blank",'')
    console.log(newWindow);
})
document.querySelector('#btn_close').addEventListener('click',()=>{
    window.close()
})
document.querySelector('#btn_back').addEventListener('click',()=>{
    history.back
})

navigator.geolocation.getCurrentPosition(positionTrouvee)