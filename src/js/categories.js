// Definition of the local server constants and the id of the section where the content will be printed.
const URL_DATABASE = 'http://localhost:3000'
const genres = document.getElementById("genres-music")


// function to print the content
async function categories(genres) {
    const response = await fetch(`${URL_DATABASE}/genresCategories`)
    const genresDatabase = await response.json()
    for (const genre of genresDatabase) {

        // printing of content by means of an innerHTML within a for
        genres.innerHTML += `
            <article class="text-center">
                <div class="circle-img-container" value="${genre.idGenre}">
                    <a class="a-genre" href="./artistasPorGenero.html?musicGenre=${genre.musicGenre}">
                        <img src="${genre.route}" alt="${genre.musicGenre}" class="img-fluid circle-img" id="${genre.idGenre}">
                    </a>
                </div>
                <button type="button" class="btn btn-primary image-caption">${genre.musicGenre}</button>
            </article>
        `
    }
}

// calling the function
categories(genres)