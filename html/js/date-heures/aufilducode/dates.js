let aujourdhuis= new Date();
console.log(aujourdhuis.get);
console.log(aujourdhuis.getUTCHours());
console.log(`nous sommes le ${aujourdhuis.getMonth()+1}eme mois de l'année`)

let firstDate = new Date(aujourdhuis);
firstDate.setDate(1);
console.log(`le premier jour du mois était: ${firstDate.toISOString()}`);
console.log(`la date du jour: ${aujourdhuis.toLocaleString('fr-FR',{year:'numeric', month: 'numeric', day: 'numeric',hour:'numeric',minute:"numeric",weekday:'long'})}`);
console.log(`le premier jour du mois était: ${firstDate.toLocaleString('fr-FR',{year:'numeric', month: 'numeric', day: 'numeric',hour:'numeric',minute:"numeric",weekday:'long'})}`);

const dateNaissanceFreddy = new Date('1946-09-05');
const dateMortFreddy = new Date('1991-11-24');
const lifeTime = dateMortFreddy-dateNaissanceFreddy;
console.log(lifeTime/(1000*60*60*24*365));
console.log('fuseaux horaires');
const date = new Date();
const offset = date.getTimezoneOffset();
console.log(offset);
const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
console.log(timezone); 
const dateEvent = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
console.log(dateEvent);
console.log(`la date est: ${dateEvent.toLocaleString('fr-FR',{year:'numeric', month: 'numeric', day: 'numeric',hour:'numeric',minute:"numeric",weekday:'long'})}`);

