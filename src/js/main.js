// Import our custom CSS
import '../scss/styles.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Definicion de las constantes del local server y el id del section donde se imprimira el contenido
const URL_DATABASE = 'http://localhost:3000'
const generos = document.getElementById("generos-musica")


// dandole clases a la seccion
generos.classList.add("gap-5")


// botonGeneros.addEventListener('submit', async (event) => {
//     event.preventDefault()    
// })





// funcion para imprimir el contenido
async function categorias(generos) {
    const response = await fetch(`${URL_DATABASE}/generosCategorias`)
    const generosDatabase = await response.json()
    for (const genero of generosDatabase) {

        // impresion de contenido por medio de un innerHTML dentro de un for
        generos.innerHTML += `
            <article class="text-center">
                <div class="circle-img-container" value="${genero.idGenre}">
                    <a class="a-genero" href="./artistasPorGenero.html?tipoMusica=${genero.tipoMusica}">
                        <img src="${genero.route}" alt="${genero.tipoMusica}" class="img-fluid circle-img" id="${genero.idGenre}">
                    </a>
                </div>
                <button type="button" class="btn btn-primary image-caption">${genero.tipoMusica}</button>
            </article>
        `
    }
}


// llamado de la funcion
categorias(generos)