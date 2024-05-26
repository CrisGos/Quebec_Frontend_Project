const URL_DATABASE = 'http://localhost:3000';
const artistasContainer = document.getElementById("artistas-por-genero");

async function cargarArtistasPorGenero() {
  const urlParams = new URLSearchParams(window.location.search);
  const tipoMusica = urlParams.get('tipoMusica');
  
  const response = await fetch(`${URL_DATABASE}/artistas`);
  const artistasDatabase = await response.json();
  
  
  artistasDatabase.filter(artista => 
    artista.genero1 === tipoMusica || 
    artista.genero2 === tipoMusica || 
    artista.genero3 === tipoMusica
  ).forEach(artista => {
    artistasContainer.innerHTML += `
      <article class="text-center">
        <div class="card mb-3">
        <img src="${artista.fotografia}" class="card-img-top" alt="${artista.nombre}" height="200px">
        <div class="card-body">
            <h5 class="card-title">${artista.nombre}</h5>
            <p class="card-text">${artista.biografia}</p>
            <p class="card-text"><small class="text-body-secondary">${artista.genero1}  ${artista.genero2}  ${artista.genero3}</small></p>
        </div>
        </div>
      </article>
    `;
  });
}

cargarArtistasPorGenero();
