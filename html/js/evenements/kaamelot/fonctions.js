async function afficherCitationKaamelott() {
    // L'URL de l'API

    // Faire une requête HTTP vers l'API
    // $.ajax({
    //     url: 'https://kaamelott.chaudie.re/api/random',
    //     type: 'GET',
    //     // headers:{'Access-Control-Allow-Origin:':'*','Access-Control-Allow-Methods': 'GET'},

    //     success: function(data) {
    //         $('#citationKaamelott').text(data.citation.citation); // Supposons que vous avez un paragraphe avec l'ID "citationKaamelott"
    //     },
    //     error: function(error) {
    //         console.log('Erreur:', error);
    //     }
    // });
    const url = 'https://kaamelott.chaudie.re/api/random';

    // Faire une requête HTTP vers l'API
    // const response = await fetch(url, { headers: { 'Access-Control-Allow-Origin:': '*', 'Access-Control-Allow-Methods': 'GET', "Content-Type": "application/json" } })
    //     .then(response => {
    //         // Vérifier si la réponse est valide
    //         if (!response.ok) {
    //             throw new Error('Réponse réseau non valide');
    //         }
    //         data = response.json();
    //         console.log(data);
    //         document.querySelector('citationKaamelott').textContent = data.citation.citation;
    //         return ; // Convertir la réponse en JSON
    //     })

    //     .catch(error => {
    //         console.error('Erreur lors de la récupération de la citation:', error);
    //     });
    async function afficherCitationKaamelott() {
        const response = await fetch("https://kaamelott.chaudie.re/api/random").then(reponse=>{console.log();}).catch(error => {
                     console.log('Erreur lors de la récupération de la citation:', error);
                });
        const movies = await response.json();
        console.log(movies);
      }
}