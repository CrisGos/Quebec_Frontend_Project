// Function to control header buttons
function controlHeader() {
  // Check for data in localStorage to determine if a user is online
  const userOnline = localStorage.getItem("userOnline");
  if (userOnline) {

    // Validate the existence of elements with specific IDs and hide them if found
    const loginElement = document.getElementById("login");
    if (loginElement) {
      loginElement.style.display = "none";
    }

    const dropdownElement = document.getElementById("dropdown");
    if (dropdownElement) {
      dropdownElement.style.display = "none";
    }

    const contractorElement = document.getElementById("the-contractor");
    if (contractorElement) {
      contractorElement.style.display = "none";
    }

    const artistElement = document.getElementById("the-artist");
    if (artistElement) {
      artistElement.style.display = "none";
    }

    const userData = JSON.parse(userOnline);
    const username = userData.username;
    const userDropdown = document.getElementById("user-dropdown");
    userDropdown.style.display = "block";
    const userDropdownLink = userDropdown.querySelector(".dropdown-toggle");
    userDropdownLink.textContent = username;

    // Add event to logout
    document.getElementById("logout").addEventListener("click", function () {
      // Clear localStorage and reload the page to simulate a logoff
      localStorage.removeItem("userOnline");
      location.reload();
      window.location.href = "/"
    });
  }
}

// Execute the function when loading the DOM
document.addEventListener("DOMContentLoaded", controlHeader);