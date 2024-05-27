// the url of the database is saved in a variable and the other variables are generated.
const URL_DATABASE = 'http://localhost:3000'
const perfilContainer = document.getElementById("perfil-artista")

// The asynchronous function is generated where it interacts with the database and prints the content of main
async function cargarPerfilArtista() {
    const urlParams = new URLSearchParams(window.location.search)
    const nombreArtista = urlParams.get('nombre')

    const response = await fetch(`${URL_DATABASE}/artistas`)
    const artistasDatabase = await response.json()

    const artista = artistasDatabase.find(artista => artista.nombre === nombreArtista);

    let socialLinks = ''

    if (artista.instagram) {
        socialLinks += `<a href="${artista.instagram}" target="_blank" class="me-2"><i class="bi bi-instagram"></i></a>`
    }
    if (artista.redes.facebook) {
        socialLinks += `<a href="${artista.redes.facebook}" target="_blank" class="me-2"><i class="bi bi-facebook"></i></a>`
    }
    if (artista.redes.spotify) {
        socialLinks += `<a href="${artista.redes.spotify}" target="_blank" class="me-2"><i class="bi bi-spotify"></i></a>`
    }
    if (artista.redes.tiktok) {
        socialLinks += `<a href="${artista.redes.tiktok}" target="_blank" class="me-2"><i class="bi bi-tiktok"></i></a>`
    }
    if (artista.redes.youtube) {
        socialLinks += `<a href="${artista.redes.youtube}" target="_blank" class="me-2"><i class="bi bi-youtube"></i></a>`
    }


    let genresArtist = ''

    if (artista.genero1) {
        genresArtist += `
        <article>
                <button class="btn btn-secondary" id="genero1-btn">${artista.genero1}</button>
            </article>
        `
    }

    if (artista.genero2) {
        genresArtist += `
        <article>
                <button class="btn btn-secondary" id="genero2-btn">${artista.genero2}</button>
            </article>
        `
    }

    if (artista.genero3) {
        genresArtist += `
        <article>
                <button class="btn btn-secondary" id="genero3-btn">${artista.genero3}</button>
            </article>
        `
    }



    perfilContainer.innerHTML = `
        
        <!-- Primera Sección -->
        <section class="position-relative w-100">
        <img src="${artista.fotografia}" alt="${artista.nombre}" class="w-100 h-50" id="artista-imagen">
        <h2 class="position-absolute bottom-0 start-0 text-white p-3" id="artista-nombre">${artista.nombre}</h2>
        </section>

        <!-- Segunda Sección -->
        <section class="d-flex flex-row flex-wrap gap-5 align-items-center justify-content-center w-100">
            <article class="w-50">
                <h3>Biografía:</h3>
                <p id="artista-biografia">${artista.biografia}</p>
            </article>
            <article class="w-25 d-flex justify-content-end">
                <a href="#contratar" class="btn btn-primary">Contratar</a>
            </article>
        </section>

        <!-- Tercera Sección -->
        <section class="d-flex flex-row flex-wrap gap-5 align-items-center justify-content-center w-100">
            ${genresArtist}
        </section>

        <!-- Cuarta Sección -->
        <section class="w-100 d-flex justify-content-center">
            <div id="artista-video">${artista.video}</div>
        </section>

        <!-- Quinta Sección -->
        <section class="w-100 text-center">
            <h3>Redes Sociales</h3>
            ${socialLinks}
        </section>

        <!-- Sexta Sección -->
        <section id="contratar" class="w-100 text-center">
            <h3>Formulario de Contratación</h3>
            <!-- Formulario de contratación aquí -->
            
        </section>
    `
}

cargarPerfilArtista()