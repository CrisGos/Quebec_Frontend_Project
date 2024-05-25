// Import our custom CSS
import '../scss/styles.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'


const container = document.querySelector('.container');



const genresDatabase = [
    {
        tipoMusica: 'Urbano',
        route: '../../public/img/urbano-genre.webp',
        idGenre: 1
    },
    {
        tipoMusica: 'Pop',
        route: '../../public/img/pop-genre.webp',
        idGenre: 2
    },
    {
        tipoMusica: 'Popular',
        route: '../../public/img/popular-genre.webp',
        idGenre: 3
    },
    {
        tipoMusica: 'Tropical',
        route: '../../public/img/tropical-genre.webp',
        idGenre: 4
    },
    {
        tipoMusica: 'Rock',
        route: '../../public/img/rock-genre.webp',
        idGenre: 5
    },
    {
        tipoMusica: 'Electronica',
        route: '../../public/img/electronica-genre.webp',
        idGenre: 6
    }
];

const genres = document.getElementById("generos-musica")

genres.classList.add("d-flex")
genres.classList.add("justify-content-center")
genres.classList.add("flex-wrap")
genres.classList.add("flex-row")
genres.classList.add("gap-5")

for (const genero of genresDatabase) {
    // genres.innerHTML += `
    //     <article>
    //     <a href="" class="d-flex justify-content-center flex-column align-items-center"><img src=${genero.route} id="genero-${genero.idGenre}" class="rounded-circle border-info" alt="${genero.tipoMusica}" style="width: 45vh; height: 45vh;">
    //         <h3 class="texto-h3-generos">${genero.tipoMusica}</h3></a>
    //     </article>
    // `

    genres.innerHTML += `
        <article class="text-center">
            <div class="circle-img-container">
                <a href="">
                    <img src="${genero.route}" alt="${genero.tipoMusica}" class="img-fluid circle-img" value="${genero.idGenre}">
                </a>
            </div>
            <a href="" class="image-caption">${genero.tipoMusica}</a>
        </article>
    `
}