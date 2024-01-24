// for
for (let i = 0; i < 10; i++) {
   console.log(i);
    
}
// non défini, le fonctionne pas, en dehors de la portée
// console.log(i);
let i=0;
while( i<10)
{
    console.log(i);
    i++; // i=i+1 ou i+=1
}
console.log(i);

do
{
    console.log(i);
    i++; // i=i+1 ou i+=1
}
while( i<10)
let reponse = prompt("Tu es content? oui ou non?");
switch (reponse) {
    case "oui": console.log("trop bien");
        
        break;
    case "non": console.log("courage!");
        console.log("soit fort scarabée");
        break;
    default:
            console.log("j'ai rin compris");
        break;
}