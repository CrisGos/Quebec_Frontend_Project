
const sect0= document.querySelector('#band-info')
const sect1= document.querySelector('#band-description')
const sect2= document.querySelector('#accout-info')
const sections=[sect0,sect1,sect2]
const btnNB=document.querySelector('#nxt-bck-btns')
const regisForm=document.querySelector('form')
let count=0

regisForm.addEventListener('submit',()=>{
    alert('Bienvenido a Music market')
})

btnNB.addEventListener('click',(event)=>{

    //condition to change 
    // if (count==2) {
    //     const btnSubmit= btnNB.querySelector(".btn.btn-primary")
    //     btnSubmit.textContent='submit'
    //     btnSubmit.setAttribute('type','submit')
        
    // }
    
    // if (count == 0) {
        
    // }
    if (sections[0].hasAttribute('d-none')) {
            
        
        invisible(btnBck)
    }
    

    //buttons actions
    if(event.target.classList.contains("btn-primary")){
        sections[count].classList.replace('visible','d-none')
        count+=1
        sections[count].classList.replace('d-none','visible')
        console.log(count);

        if (count==2 ) {
            const btnSubmit= btnNB.querySelector(".btn.btn-primary")
        btnSubmit.textContent='submit'
        btnSubmit.setAttribute('type','submit')
        btnSubmit.addEventListener('submit',()=>{

        })
        count+=0
        }    
        
        
    }
    if(event.target.classList.contains("btn-dark")){
        visible(sections[count])
        count-=1
        invisible(sections[count])
        const btnBck= btnNB.querySelector(".btn.btn-dark")
        
    }

})
function visible(obj) {
    obj.classList.replace('d-none','visible')
    
}
function invisible(obj) {
    obj.classList.replace('visible','d-none')
    
}