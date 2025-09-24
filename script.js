const moviesWrapper= document.querySelector('movies')


function searchChange(event) {
    console.log (event.target.value)
}

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

function displayMovies(movies) {
  const html = movies.map(movie => `
    <div class="movie">
      <figure class="movie__img--wrapper">
        <img class="movie__img" src="${movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Image'}" alt="${movie.Title}">
      </figure>
      <div class="movie__title">${movie.Title}</div>
      <div class="movie__description">Year: ${movie.Year}</div>
    </div>
  `).join('');

  document.getElementById("movie-container").innerHTML = html;
}





const movies = [
  {
    title: "ACT",
    genre: "Action",
    poster: "https://images.unsplash.com/photo-1561149877-84d268ba65b8?w=500&auto=format&fit=crop&q=60",
    description: "*READY *RISE UP *RIGHT",
    originalPrice: "14.00",
    discountedPrice: "10.00"
  },
  {
    title: "REALITIES",
    genre: "Documentary",
    poster: "https://static0.colliderimages.com/wordpress/wp-content/uploads/sharedimages/2024/04/the-deepest-breath-movie-poster.jpg?q=49&fit=contain&w=480&dpr=2",
    description: "*REAL EVENTS *PEOPLE & LIFE *REALITY",
    originalPrice: "11.00",
    discountedPrice: "9.00"
  },
  {
    title: "ADVENTURES",
    genre: "Adventure",
    poster: "https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/04/terminator-2_-judgment-day-1991-4-1.jpg?q=70&fit=crop&w=825&dpr=1",
    description: "*DISCOVERY *JOURNEY INTO UNKNOWN *PERSONAL GROWTH",
    originalPrice: "10.00",
    discountedPrice: "7.00"
  },
  {
    title: "COMEDIES",
    genre: "Comedy",
    poster: "https://static0.colliderimages.com/wordpress/wp-content/uploads/2024/08/ted-striker-robert-hays-heavily-sweating-airplane.jpg?q=70&fit=crop&w=825&dpr=1",
    description: "*IDENTITY *SOCIAL *LIFE SITUATIONS",
    originalPrice: "14.00",
    discountedPrice: "10.00"
  },
  {
    title: "DRAMA",
    genre: "Drama",
    poster: "https://static0.colliderimages.com/wordpress/wp-content/uploads/2023/05/leonardo-dicaprio-joseph-gordon-levitt-inception-christopher-nolan.jpg?q=70&fit=crop&w=825&dpr=1",
    description: "*SUSPENSE *EXCITEMENT *EXPERIENCES",
    originalPrice: "9.00",
    discountedPrice: "5.00"
  }
];


 


function displayMovies(filteredMovies) {
  const html = filteredMovies.map(movie => `
    <div class="movie">
      <figure class="movie__img--wrapper">
        <img class="movie__img" src="${movie.poster}" alt="${movie.title}">
      </figure>
      <div class="movie__title">${movie.title}</div>
      <div class="movie__ratings">
        <i class="fas fa-star"></i><i class="fas fa-star"></i>
        <i class="fas fa-star"></i><i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
      <div class="movie__description">${movie.description}</div>
      <div class="movie__price">
        <span class="movie__price--normal">$${movie.originalPrice}</span> $${movie.discountedPrice}
      </div>
    </div>
  `).join('');
  document.getElementById("movie-container").innerHTML = html;
}

function filterMovies() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const genre = document.getElementById("genreFilter").value;

  const filtered = movies.filter(movie =>
    (movie.title.toLowerCase().includes(query) || movie.description.toLowerCase().includes(query)) &&
    (genre === "" || movie.genre === genre)
  );

  displayMovies(filtered);
}

document.getElementById("searchInput").addEventListener("input", filterMovies);
document.getElementById("genreFilter").addEventListener("change", filterMovies);

displayMovies(movies);





function displayMovies(filteredMovies) {
  const html = filteredMovies.map(movie => `
    <div class="movie">
      <figure class="movie__img--wrapper">
        <img class="movie__img" src="${movie.poster}" alt="${movie.title}">
      </figure>
      <div class="movie__title">${movie.title}</div>
      <div class="movie__ratings">
        <i class="fas fa-star"></i><i class="fas fa-star"></i>
        <i class="fas fa-star"></i><i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
      <div class="movie__description">${movie.description}</div>
      <div class="movie__price">
        <span class="movie__price--normal">$${movie.originalPrice}</span> $${movie.discountedPrice}
      </div>
    </div>
  `).join('');
  document.getElementById("movie-container").innerHTML = html;
}

document.getElementById("searchInput").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const filtered = movies.filter(movie =>
    movie.title.toLowerCase().includes(query) ||
    movie.genre.toLowerCase().includes(query)
  );
  displayMovies(filtered);
});




TopMovies()
function TopMovies() {
  const html = movies.map(movie => `
    <div class="movie">
      <figure class="movie__img--wrapper">
        <img class="movie__img" src="${movie.poster}" alt="${movie.title}">
      </figure>
      <div class="movie__title">${movie.title}</div>
      <div class="movie__ratings">
        <i class="fas fa-star"></i><i class="fas fa-star"></i>
        <i class="fas fa-star"></i><i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
      <div class="movie__description">${movie.description}</div>
      <div class="movie__price">
        <span class="movie__price--normal">$${movie.originalPrice}</span> $${movie.discountedPrice}
      </div>
    </div>
  `).join('');

  document.getElementById("movie-container").innerHTML = html;
}

document.addEventListener("DOMContentLoaded", () => {TopMovies();});







function openMenu() {
    document.body.classList.add("menu--open");
}

function closeMenu() {
    document.body.classList.remove("menu--open");
}
