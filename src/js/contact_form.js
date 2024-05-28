// Function to reset the values of the form fields
function clearForm() {
    document.getElementById('event-type').value = '';
    document.getElementById('event-date').value = '';
    document.getElementById('event-description').value = '';
    document.getElementById('attendees-number').value = '';
    document.getElementById('event-time').value = '';
}

// Listen for the click event on the "Contact via WhatsApp" button
document.getElementById('contact-btn').addEventListener('click', function() {
    const eventType = document.getElementById('event-type').value;
    const eventDate = document.getElementById('event-date').value;
    const eventDescription = document.getElementById('event-description').value;
    const attendeesNumber = document.getElementById('attendees-number').value;
    const eventTime = document.getElementById('event-time').value;

    // Validate mandatory fields
    if (!eventType || !eventDate || !eventDescription || !attendeesNumber || !eventTime) {
        alert('Por favor complete todos los campos del formulario');
        return;
    }

    // Create the message with the form information
    const message = `Hola, estoy interesado en tu servicio. Aquí está la información del evento:\nTipo de evento: ${eventType}\nFecha: ${eventDate}\nDescripción: ${eventDescription}\nNúmero de asistentes:${attendeesNumber}\nHora: ${eventTime}`;

    // Create the WhatsApp link with the pre-filled message
    const whatsappLink = `https://wa.me/573041117216?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');   
    clearForm();
});

// Listen for the click event on the "Cancel" button
document.getElementById('cancel-btn').addEventListener('click', function() {
    clearForm();
});
