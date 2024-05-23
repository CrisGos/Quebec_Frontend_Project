// Import our custom CSS
import '../scss/colors.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

//sections
const sect0= document.querySelector('#band-info')
const sect1= document.querySelector('#band-description')
const sect2= document.querySelector('#accout-info')
const btnSec=document.querySelector('.nxt-bck-btns')
const regisForm=document.querySelector('form')
// const btnNext=btnSec.querySelector('#to-band-desc')
// const btnBack=btnSec.querySelector('.btn-dark')



regisForm.addEventListener('submit',()=>{
    alert('Bienvenido a Music market')
})

btnSec.addEventListener('click',(event)=>{
    if (event.target.id=='to-band-desc') {
        let there=btnSec.parentNode
        console.log(there.);
        
    }

})

