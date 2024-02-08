function clickSaisie(event) {
    console.log('clickSaisie:' + event.target.value);
    if (event.target.value == '.')
        event.target.disabled = true;
    majEcranCalcul(event.target.value);
}
function keyboardSaisie(event)
{
    console.log(event.key);

    if (isNaN(event.key))
    {
        if ((event.key =='.')&&(!valeurDepart.value.includes('.')))
            {
                majEcranCalcul(event.key);
            }
    }
    else
    {
        majEcranCalcul(event.key);   
    }
    // if (event.key)
}
function majEcranCalcul(pValeur) {
    valeurDepart.value +=pValeur;
    calculerConversion();
}

function calculerConversion(event) {
    console.log('calculerConversion');
    const depart = document.querySelector('input[name=monnaieDepart]:checked').value
    const arrivee = document.querySelector('input[name=monnaieArrivee]:checked').value
    let tempoDollars = 0;
    if (depart == 'USD')
        tempoDollars = valeurDepart.value;
    else
        tempoDollars = valeurDepart.value / tauxConversion[depart];
   valeurArrivee.value = tempoDollars*tauxConversion[arrivee];
}

