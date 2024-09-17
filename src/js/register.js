//extract the form
const form = document.getElementById("register-form")
//extract the input
const username = document.getElementById("username")
const fullName = document.getElementById("fullname")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirmPasword = document.getElementById("confirm-password")

form.addEventListener("submit", async (event) => {
    event.preventDefault()
    const checkPasswords = validatePassword(password, confirmPasword)
    const checkEmail = await validateEmail(email)

    if (checkPasswords === true && checkEmail == true) {
          //here we call the function that saves us a new user
        await registerUser(username, fullName, email, password)
        window.location.href = "./login.html"
    }
})

//validates that the passwords are the same
function validatePassword(password, confirmPasword) {
    if (password.value === confirmPasword.value) {
        return true
    } else {
        return false
    }
}
//validates mail that does not exist
async function validateEmail(email) {
    const response = await fetch(`http://localhost:3000/users?email=${email.value}`)
    const data = await response.json()

    if (data.length === 0) {
        return true
    } else {
        return false
    }

}

async function registerUser(username, fullName, email, password) {
    const newUser = {
        username: username.value.toLowerCase(),
        fullName: fullName.value.toLowerCase(),
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