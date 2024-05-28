// form
const form = document.querySelector('form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const user = await validateUser(email);
    const artist = await validateArtist(email);

    if (user === false && artist === false) {
        alert("Usuario aún no registrado");
    } else {
        if (user && user.password === password.value) {
            localStorage.setItem("userOnline", JSON.stringify(user));
            window.location.href = "/";
        } else if (artist && artist.logInfo.password === password.value) {
            localStorage.setItem("userOnline", JSON.stringify(artist));
            window.location.href = "/";
        } else {
            alert("La contraseña es incorrecta");
        }
    }
});

// Validates that the email does not exist for users
async function validateUser(email) {
    const response = await fetch(`http://localhost:3000/users?email=${email.value}`);
    const data = await response.json();

    if (data.length > 0) {
        return data[0];
    } else {
        return false;
    }
}

// Validates that the email does not exist for artists
async function validateArtist(email) {
    const response = await fetch(`http://localhost:3000/artists?logInfo.email=${email.value}`);
    const data = await response.json();

    if (data.length > 0) {
        return data[0];
    } else {
        return false;
    }
}