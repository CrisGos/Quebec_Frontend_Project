//sacar el formulario
const form = document.getElementById("register-form")
//sacar los input
const username = document.getElementById("username")
const lastName = document.getElementById("last-name")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirmPasword = document.getElementById("confirm-password")

form.addEventListener("submit", async (event) => {
    event.preventDefault()
    const checkPasswords = validatePassword(password, confirmPasword)
    const checkEmail = await validateEmail(email)

    if (checkPasswords === true && checkEmail == true) {
        //acá llamamos a la función que nos guarda un nuevo usuario
        await registerUser(username, lastName, email, password)
        window.location.href="../auth/login.html"
    }
})

//valida que las contraseñas sean iguales
function validatePassword(password, confirmPasword) {
    if (password.value === confirmPasword.value) {
        return true
    } else {
        return false
    }
}
//valida que el correo que no exista
async function validateEmail(email) {
    const response = await fetch(`http://localhost:3000/users?email=${email.value}`)//traemos todos lo usuarios o el dato específico que requerimos
    const data = await response.json()//pasamos de json a javaScript

    if (data.length === 0) {
        return true
    } else {
        return false
    }

}

async function registerUser(username, lastName, email, password) {
    const newUser = {
        username: username.value.toLowerCase(),
        lastName: lastName.value.toLowerCase(),
        email: email.value,
        password: password.value
    }
    await fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser),
    })
}