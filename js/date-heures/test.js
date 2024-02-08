async function recupData()
{
    // creer un compte sur : https://app.currencyapi.com/latest
    // récupérer son API
    // mettre la valeur dans la variable apiKey
      const apiKey ='cur_live_buKrHvlUH1qDkvovNdLP7u25PAZPIGO3c7xPZ5eZ';
    const response = await fetch('https://api.currencyapi.com/v3/latest?apikey='+apiKey,
);
    console.log(await response.json());
}

recupData();

