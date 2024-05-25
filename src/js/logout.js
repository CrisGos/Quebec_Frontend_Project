const user = localStorage.getItem("userOnline")
if (user === undefined) {
    window.location.href = "../../pages/auth/login.html"
}

const btnLogout = document.getElementById("btn-logout")
btnLogout.addEventListener("click", () => {
    localStorage.removeItem("userOnline")
    window.location.href = "../../pages/auth/login.html"
})