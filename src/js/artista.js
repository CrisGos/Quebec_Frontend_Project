const URL_DATABASE = 'http://localhost:3000';
const perfilContainer = document.getElementById("perfil-artista");

window.addEventListener('DOMContentLoaded', async () => {
    async function cargarPerfilArtista() {
        // Código para cargar el perfil del artista y agregar el formulario aquí
        const urlParams = new URLSearchParams(window.location.search);
        const nombreArtista = urlParams.get('nombre');

        const response = await fetch(`${URL_DATABASE}/artistas`);
        const artistasDatabase = await response.json();

        const artista = artistasDatabase.find(artista => artista.nombre === nombreArtista);

        let socialLinks = '';

        if (artista.instagram) {
            socialLinks += `<a href="${artista.instagram}" target="_blank" class="me-2"><i class="bi bi-instagram"></i></a>`;
        }
        if (artista.redes.facebook) {
            socialLinks += `<a href="${artista.redes.facebook}" target="_blank" class="me-2"><i class="bi bi-facebook"></i></a>`;
        }
        if (artista.redes.spotify) {
            socialLinks += `<a href="${artista.redes.spotify}" target="_blank" class="me-2"><i class="bi bi-spotify"></i></a>`;
        }
        if (artista.redes.tiktok) {
            socialLinks += `<a href="${artista.redes.tiktok}" target="_blank" class="me-2"><i class="bi bi-tiktok"></i></a>`;
        }
        if (artista.redes.youtube) {
            socialLinks += `<a href="${artista.redes.youtube}" target="_blank" class="me-2"><i class="bi bi-youtube"></i></a>`;
        }

        let genresArtist = '';

        if (artista.genero1) {
            genresArtist += `
        <article>
                <button class="btn btn-secondary" id="genero1-btn">${artista.genero1}</button>
            </article>
        `;
        }

        if (artista.genero2) {
            genresArtist += `
        <article>
                <button class="btn btn-secondary" id="genero2-btn">${artista.genero2}</button>
            </article>
        `;
        }

        if (artista.genero3) {
            genresArtist += `
        <article>
                <button class="btn btn-secondary" id="genero3-btn">${artista.genero3}</button>
            </article>
        `;
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
    `;

        // Agregar el formulario de contacto al final del perfil del artista
        perfilContainer.innerHTML += `
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

        // Lógica del formulario de contacto
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

            const message = `Hola, estoy interesado en tu servicio. Aquí está la información del evento:\nTipo de evento: ${eventType}\nFecha: ${eventDate}\nDescripción: ${eventDescription}\nNúmero de asistentes:${attendeesNumber}\nHora: ${eventTime}`;
            const whatsappLink = `https://wa.me/573041117216?text=${encodeURIComponent(message)}`;
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

            const message = `Hola, estoy interesado en tu servicio. Aquí está la información del evento:\nTipo de evento: ${eventType}\nFecha: ${eventDate}\nDescripción: ${eventDescription}\nNúmero de asistentes:${attendeesNumber}\nHora: ${eventTime}`;
            const whatsappLink = `https://wa.me/573041117216?text=${encodeURIComponent(message)}`;
            window.open(whatsappLink, '_blank');
            clearForm();
        });
    };

    cargarPerfilArtista();
});

