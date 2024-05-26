// Import our custom CSS
import '../scss/registerMusic.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

//sections
const form=document.querySelector('form')
const artform=form.querySelectorAll('section')
const sect0= form.querySelector('#band-info')
const sect1= form.querySelector('#band-description')
const sect2= form.querySelector('#accout-info')
const btnSec=form.querySelector('.nxt-bck-btns')
console.log(artform);
let cont=0


btnSec.addEventListener('click',(event)=>{
    if (event.target.type=='submit') {
        cont++
        artform[cont].classList.replace('d-none','visible')
        artform[--cont].classList.replace('visible','d-none')
        
        
        
        
    }
    if (event.target.type=='button') {
        artform[cont].classList.replace('visible','d-none')
        
        cont--
        artform[cont].classList.replace('d-none','visible')
        
    }

})

