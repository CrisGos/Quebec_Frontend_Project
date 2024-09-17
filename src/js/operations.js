let nav = document.querySelector('#navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add("change");
  } else {
    nav.classList.remove("change");
  }
})







