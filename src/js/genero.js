const URL_DATABASE = 'http://localhost:3000'
const artistasContainer = document.getElementById("artistas-por-genero")

async function cargarArtistasPorGenero() {
  const urlParams = new URLSearchParams(window.location.search)
  const tipoMusica = urlParams.get('tipoMusica')
  
  const response = await fetch(`${URL_DATABASE}/artistas`)
  const artistasDatabase = await response.json()
  
  
  artistasDatabase.filter(artista => 
    artista.genres.genre1 === tipoMusica || 
    artista.genres.genre2 === tipoMusica || 
    artista.genres.genre3 === tipoMusica
  ).forEach(artista => {
    artistasContainer.innerHTML += `
    <article class="text-center">
        <a class="artista" href="./artistaProfile.html?nombre=${artista.mainInfo.name}">
            <div class="card custom-card mb-3">
                <img src="${artista.mainInfo.photo}" class="card-img-top custom-img" alt="${artista.mainInfo.name}">
                <div class="card-body">
                <h5 class="card-title">${artista.mainInfo.name}</h5>
                <p class="card-text biografia-text">${artista.mainInfo.biography}</p>
                <p class="card-text"><small class="text-body-secondary">${artista.genres.genre1} ${artista.genres.genre2} ${artista.genres.genre3}</small></p>
                </div>
            </div>
        </a>
    </article>
    `
  })
}

cargarArtistasPorGenero()
