// const user = localStorage.getItem("userOnline")
// if (user === undefined) {
//     window.location.href = "./src/pages/auth/login.html"
// }

// const btnLogout = document.getElementById("btn-logout")
// btnLogout.addEventListener("click", () => {
//     localStorage.removeItem("userOnline")
//     window.location.href = "./src/pages/auth/login.html"
// })

// Función para manejar el encabezado
function manejarEncabezado() {
    // Verificar si hay datos en localStorage para determinar si hay un usuario en línea
    const userOnline = localStorage.getItem("userOnline");
    if (userOnline) {
      // Ocultar botones de iniciar sesión y el menú de registro
      document.getElementById("login").style.display = "none";
      document.getElementById("dropdown").style.display = "none";
  
      // Mostrar el nuevo menú desplegable con el nombre de usuario
      const userData = JSON.parse(userOnline);
      const username = userData.username;
      const userDropdown = document.getElementById("user-dropdown");
      userDropdown.style.display = "block";
      const userDropdownLink = userDropdown.querySelector(".dropdown-toggle");
      userDropdownLink.textContent = username;
  
      // Agregar evento para cerrar sesión
      document.getElementById("logout").addEventListener("click", function() {
        // Limpiar localStorage y recargar la página para simular un cierre de sesión
        localStorage.removeItem("userOnline");
        location.reload();
        window.location.href = "/"
      });
    }
  }
  
  // Ejecutar la función al cargar el DOM
  document.addEventListener("DOMContentLoaded", manejarEncabezado);
  