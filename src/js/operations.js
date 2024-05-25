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
window.onscroll = function () {
  if (window.scrollY > window.innerHeight) {
    nav.classList.add("change");
  } else {
    nav.classList.remove("change");
  }
}


 