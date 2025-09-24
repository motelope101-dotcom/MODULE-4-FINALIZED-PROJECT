async function fetchMovies() {
  try {
    const response = await fetch('https://www.omdbapi.com/?apikey=c2123f42&s=fast');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
}


fetchMovies();


async function searchMovies() {
  const query = document.getElementById("searchInput").value.trim();
  if (!query) return;

  const apiKey = 'https://www.omdbapi.com/?apikey=c2123f42&s=fast'
  const url = `https://www.omdbapi.com/?apikey=${c2123f42}&s=${encodeURIComponent(query)}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.Response === "True") {
      displayMovies(data.Search);
    } else {
      document.getElementById("movie-container").innerHTML = `<p>No results found.</p>`;
    }
  } catch (error) {
    console.error("Error fetching movies:", error);
    document.getElementById("movie-container").innerHTML = `<p>Something went wrong. Please try again.</p>`;
  }
}



function searchMovie() {
  const query = document.getElementById("movieInput").value.trim();

  if (!query) {
    alert("Please enter a movie title.");
    return;
  }

  const apiUrl = `https://www.omdbapi.com/?apikey=c2123f42&s=${encodeURIComponent(query)}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.Response === "True") {
        displayResults(data.Search);
      } else {
        displayError(data.Error);
      }
    })
    .catch(error => {
      console.error("Fetch error:", error);
      displayError("Something went wrong. Please try again.");
    });
}

function displayResults(movies) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  movies.forEach(movie => {
    const movieCard = document.createElement("div");
    movieCard.className = "movie-card";
    movieCard.innerHTML = `
      <h3>${movie.Title}</h3>
      <p>Year: ${movie.Year}</p>
      <img src="${movie.Poster !== "N/A" ? movie.Poster : "placeholder.jpg"}" alt="${movie.Title}" width="150"/>
    `;
    resultsDiv.appendChild(movieCard);
  });
}

function displayError(message) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = `<p style="color:red;">${message}</p>`;
}





