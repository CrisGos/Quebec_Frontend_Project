//formulario
const form = document.querySelector('form')
const email = document.querySelector('#email')
const password = document.querySelector('#password')

form.addEventListener('submit', async (event) => {

    event.preventDefault()
    const user = await validateEmail(email)
    if (user === false) {
        alert("usuario aún no registrado")
    } else {
        if (user.password === password.value) {
            localStorage.setItem("userOnline",JSON.stringify(user))
            window.location.href="/"
        } else {
            alert("la contraseña es incorrecta")
        }
    }
})

//valida que el correo que no exista
async function validateEmail(email) {
    const response = await fetch(`http://localhost:3000/users?email=${email.value}`)//traemos todos lo usuarios o el dato específico que requerimos
    const data = await response.json()//pasamos de json a javaScript

    if (data.length > 0) {
        return data[0]
    } else {
        return false
    }
}