async function afficherNomPrenom(pIndice) {
  const response = await fetch("personnages.json");
  const data = await response.json();
  if (response.ok) {
    let n = data.length;
     prenom.textContent = data[pIndice].prenom;
     nom.textContent = data[pIndice].nom;
   //console.log(data);
  } else {
    quote.textContent = "Enfer et damnation, une erreur!";
    console.log(data);
  }
}
// Fonction asynchrone

async function tauxChange() {
  const response = await fetch("https://cdn.taux.live/api/latest.json");
  const data = await response.json();
  if (response.ok) {
    let n = data.length;
    // prenom.textContent = data[pIndice].prenom;
//nom.textContent = data[pIndice].nom;
   console.log(data);
  } else {
    quote.textContent = "Enfer et damnation, une erreur!";
    console.log(data);
  }
}


