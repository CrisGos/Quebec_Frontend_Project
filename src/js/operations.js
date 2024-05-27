// page cotizar

// const navEL = document.querySelector('-navbar');

// window.addEventListener('scroll', ()=> {
//      if(window.scrollY >= 56){
//         navEL.classList.add("navbar-scrolled")
//      }else if(window.scrollY<56){
//         navEL.classList.remove('navbar-scrolled')
//      }
// })



let nav = document.querySelector('#navbar');
window.addEventListener('scroll', ()=>{ 
  if (window.scrollY >50) {
    nav.classList.add("change");
  } else {
    nav.classList.remove("change");
  }
}) 


// function arist by genre
const buttonSearchGenre = document.getElementById("genre-select")
const buttonHow = document.getElementById("funciona")
buttonSearchGenre.addEventListener('click', function(){
  window.location.href = "/src/pages/genero.html"
})

buttonHow.addEventListener('click', function(){
 window.location.href = "/src/pages/funciona.html"
})




