// Definition of the local server constants and the id of the section where the content will be printed.
const URL_DATABASE = 'http://localhost:3000';
const profileContainer = document.getElementById("artist-profile");

// Event listener to sync the Dom content loaded when the HTML document has been completely parsed
window.addEventListener('DOMContentLoaded', async () => {
    // function to print the content
    async function displayArtistProfile() {
        // Code to get the name of the artist selected
        const urlParams = new URLSearchParams(window.location.search);
        const artistId = urlParams.get('id');

        // calling the data base
        const response = await fetch(`${URL_DATABASE}/artists`);
        const artistsDatabase = await response.json();

        // finding the position of the artist into de database (json file)
        const artist = artistsDatabase.find(artist => artist.id === artistId);


        // here the program checks the social media that the artist have
        let socialLinks = '';

        if (artist.socialMedia.instagram) {
            socialLinks += `<a href="${artist.socialMedia.instagram}" target="_blank" class="me-2"><i class="bi bi-instagram"></i></a>`;
        }
        if (artist.socialMedia.facebook) {
            socialLinks += `<a href="${artist.socialMedia.facebook}" target="_blank" class="me-2"><i class="bi bi-facebook"></i></a>`;
        }
        if (artist.socialMedia.spotify) {
            socialLinks += `<a href="${artist.socialMedia.spotify}" target="_blank" class="me-2"><i class="bi bi-spotify"></i></a>`;
        }
        if (artist.socialMedia.tiktok) {
            socialLinks += `<a href="${artist.socialMedia.tiktok}" target="_blank" class="me-2"><i class="bi bi-tiktok"></i></a>`;
        }
        if (artist.socialMedia.youtube) {
            socialLinks += `<a href="${artist.socialMedia.youtube}" target="_blank" class="me-2"><i class="bi bi-youtube"></i></a>`;
        }

        // Here it checks the genres
        let genresArtist = '';

        if (artist.genres.genre1) {
            genresArtist += `
        <article>
                <button class="btn btn-secondary" id="genero1-btn">${artist.genres.genre1}</button>
            </article>
        `;
        }

        if (artist.genres.genre2) {
            genresArtist += `
        <article>
                <button class="btn btn-secondary" id="genero2-btn">${artist.genres.genre2}</button>
            </article>
        `;
        }

        if (artist.genres.genre3) {
            genresArtist += `
        <article>
                <button class="btn btn-secondary" id="genero3-btn">${artist.genres.genre3}</button>
            </article>
        `;
        }

        // Here we print the initial content of the artist profile
        profileContainer.innerHTML = `
        <!-- Primera Sección -->
        <section class="position-relative w-100">
            <img src="${artist.mainInfo.photo}" alt="${artist.mainInfo.name}" class="w-100 h-50" id="artist-image">
            <h2 class="position-absolute bottom-0 start-0 text-white p-3" id="artist-name">${artist.mainInfo.name}</h2>
        </section>

        <!-- Segunda Sección -->
        <section class="d-flex flex-row flex-wrap gap-5 align-items-center justify-content-center w-100">
            <article class="w-50">
                <h3>Biografía:</h3>
                <p id="artist-biografia">${artist.mainInfo.biography}</p>
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
            <div id="artist-video">${artist.info.video}</div>
        </section>
    `;

        // Add the Fifth Section only if the user is logged in.
        const userOnline = localStorage.getItem("userOnline");
        if (userOnline) {
            profileContainer.innerHTML += `
            <!-- Quinta Sección -->
            <section class="w-100 text-center">
                <h3>Redes Sociales</h3>
                ${socialLinks}
            </section>
            `;
        }
         // Continue printting
        profileContainer.innerHTML += `
        <!-- Sexta Sección -->
        <section id="contratar" class="w-100 text-center">
            <h3>Formulario de Contratación</h3>
            <!-- Formulario de contratación aquí -->
        </section>
    `;

        // Add contact form at the end of the artist profile
        profileContainer.innerHTML += `
        <!-- Formulario de contratación aquí -->
        <div class="container mt-4 pb-5">
            <div class="card bg-dark text-white">
                <div class="card-body">
                    <form id="contactForm">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="eventType">Tipo de evento</label>
                                    <select class="form-control" id="event-type">
                                        <option value="">Elegir evento</option>
                                        <option value="private">Privado</option>
                                        <option value="public">Público</option>
                                        <option value="business">Empresarial</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="eventDate">Fecha de evento</label>
                                    <input type="date" class="form-control" id="event-date">
                                </div>
                                <div class="form-group">
                                    <label for="eventDescription">Descripción del evento</label>
                                    <textarea class="form-control" id="event-description" rows="3"></textarea>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="attendeeNumber">Número de asistentes</label>
                                    <input type="number" class="form-control" id="attendees-number">
                                </div>
                                <div class="form-group">
                                    <label for="eventTime">Hora del evento</label>
                                    <input type="time" class="form-control" id="event-time">
                                </div>
                            </div>
                            <div class="col-md-12 mt-3 d-flex justify-content-end">
                                <button type="button" class="btn btn-secondary mx-2" id="cancel-btn">Cancelar</button>

                                <button type="button" class="btn btn-primary mx-2" id="contact-btn">Contactar por
                                    WhatsApp</button>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;

        // Logic of the contact form
        const clearForm = () => {
            document.getElementById('event-type').value = '';
            document.getElementById('event-date').value = '';
            document.getElementById('event-description').value = '';
            document.getElementById('attendees-number').value = '';
            document.getElementById('event-time').value = '';
        };

        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const eventType = document.getElementById('event-type').value;
            const eventDate = document.getElementById('event-date').value;
            const eventDescription = document.getElementById('event-description').value;
            const attendeesNumber = document.getElementById('attendees-number').value;
            const eventTime = document.getElementById('event-time').value;

            if (!eventType || !eventDate || !eventDescription || !attendeesNumber || !eventTime) {
                alert('Por favor complete todos los campos del formulario');
                return;
            }

            const message = `Hola ${artist.mainInfo.name}! te contacto de Music Market, estoy interesado(a) en tu servicio. Aquí está la información del evento:\nTipo de evento: ${eventType}\nFecha: ${eventDate}\nDescripción: ${eventDescription}\nNúmero de asistentes:${attendeesNumber}\nHora: ${eventTime}`;
            const whatsappLink = `https://wa.me/57${artist.info.phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappLink, '_blank');
            clearForm();
        });

        document.getElementById('cancel-btn').addEventListener('click', () => {
            clearForm();
        });

        document.getElementById('contact-btn').addEventListener('click', () => {
            const eventType = document.getElementById('event-type').value;
            const eventDate = document.getElementById('event-date').value;
            const eventDescription = document.getElementById('event-description').value;
            const attendeesNumber = document.getElementById('attendees-number').value;
            const eventTime = document.getElementById('event-time').value;

            if (!eventType || !eventDate || !eventDescription || !attendeesNumber || !eventTime) {
                alert('Por favor complete todos los campos del formulario');
                return;
            }

            const message = `Hola ${artist.mainInfo.name}! te contacto de Music Market, estoy interesado(a) en tu servicio. Aquí está la información del evento:\nTipo de evento: ${eventType}\nFecha: ${eventDate}\nDescripción: ${eventDescription}\nNúmero de asistentes: ${attendeesNumber}\nHora: ${eventTime}`;
            const whatsappLink = `https://wa.me/57${artist.info.phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappLink, '_blank');
            clearForm();
        });
    }

    displayArtistProfile();
});

export default profileContainer;
