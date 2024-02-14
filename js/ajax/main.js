function fetchUserData(userId) {
    fetch(`https://example.com/api/users/${userId}`)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Erreur:', error));
  }
  async function fetchUserData(userId) {
    try {
      const response = await fetch(`https://example.com/api/users/${userId}`);
      const data = await response.json(); // Attend la résolution de la conversion en JSON
      console.log(data);
    } catch (error) {
      console.error('Erreur:', error);
    }
  }
  $.ajax({
    url: 'https://exemple.com/api/data', // L'URL du serveur
    type: 'GET', // Le type de la requête HTTP, GET ou POST
    dataType: 'json', // Le type de données attendu en réponse
    success: function(data) {
      // Ce code est exécuté en cas de succès de la requête
      console.log(data);
    },
    error: function(xhr, status, error) {
      // Ce code est exécuté en cas d'erreur de la requête
      console.error("Erreur lors de la requête : ", error);
    }
  });
  $.get('https://exemple.com/api/data', function(data) {
  console.log(data);
}).fail(function(xhr, status, error) {
  console.error("Erreur lors de la requête : ", error);
});

  