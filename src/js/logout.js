// Function to control header buttons
function controlHeader() {
    // Check for data in localStorage to determine if a user is online
    const userOnline = localStorage.getItem("userOnline");
    if (userOnline) {
     // Hide login buttons and registration menu
      document.getElementById("login").style.display = "none";
      document.getElementById("dropdown").style.display = "none";
      document.getElementById("the-contractor").style.display = "none";
      document.getElementById("the-artist").style.display = "none";
     // Show new drop-down menu with user name
      const userData = JSON.parse(userOnline);
      const username = userData.username;
      const userDropdown = document.getElementById("user-dropdown");
      userDropdown.style.display = "block";
      const userDropdownLink = userDropdown.querySelector(".dropdown-toggle");
      userDropdownLink.textContent = username;
  
   // Add event to logout
      document.getElementById("logout").addEventListener("click", function() {
      // Clear localStorage and reload the page to simulate a logoff
        localStorage.removeItem("userOnline");
        location.reload();
        window.location.href = "/"
      });
    }
  }
  
  // Execute the function when loading the DOM
  document.addEventListener("DOMContentLoaded", controlHeader);
  