// Definition of the local server constants and the id of the section where the content will be printed.
const URL_DATABASE = 'http://localhost:3000'
const artistsContainer = document.getElementById("artists-per-genre")


// function to print the content
async function displayArtistsPerGenre() {
  const urlParams = new URLSearchParams(window.location.search)
  const musicGenre = urlParams.get('musicGenre')
  
  const response = await fetch(`${URL_DATABASE}/artists`)
  const artistasDatabase = await response.json()
  
  
  artistasDatabase.filter(artist => 
    artist.genres.genre1 === musicGenre || 
    artist.genres.genre2 === musicGenre || 
    artist.genres.genre3 === musicGenre
  ).forEach(artist => {
    artistsContainer.innerHTML += `
    <article class="text-center">
        <a class="artist" href="./artistaProfile.html?id=${artist.id}">
            <div class="card custom-card mb-3">
                <img src="${artist.mainInfo.photo}" class="card-img-top custom-img" alt="${artist.mainInfo.name}">
                <div class="card-body">
                <h5 class="card-title">${artist.mainInfo.name}</h5>
                <p class="card-text biografia-text">${artist.mainInfo.biography}</p>
                <p class="card-text"><small class="text-body-secondary">${artist.genres.genre1} ${artist.genres.genre2} ${artist.genres.genre3}</small></p>
                </div>
            </div>
        </a>
    </article>
    `
  })
}

displayArtistsPerGenre()
