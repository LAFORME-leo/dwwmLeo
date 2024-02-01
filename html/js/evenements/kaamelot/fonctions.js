async function afficherCitation() {
  const response = await fetch("https://api.quotable.io/random");
  const data = await response.json();
  if (response.ok) {
    quote.textContent = data.content;
    cite.textContent = data.author;
    console.log(data);
  } else {
    quote.textContent = "An error occured";
    console.log(data);
  }
}

