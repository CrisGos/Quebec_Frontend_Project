// Import our custom CSS
import '../scss/registerMusic.scss'


// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
let formRegister = document.querySelector("form")
let secCounter = 1
let arrsection = formRegister.querySelectorAll('section')

arrsection.forEach(section => {
    let divNxtBck = section.querySelector('.nxt-bck-btn')
    let nxtBtn = divNxtBck.querySelector('.btn-primary')
    let bckBtn = divNxtBck.querySelector(".btn-secondary")
    
    if (divNxtBck.contains(divNxtBck.querySelector('.btn-primary'))) {
        nxtBtn = divNxtBck.querySelector('.btn-primary')
        nxtBtn.addEventListener('click', () => {

            nextSection(secCounter)
            if(validateSection(section)){secCounter++}
            
            console.log(secCounter, "avanza");

        })
    }
    bckBtn = divNxtBck.querySelector(".btn-secondary")

    bckBtn.addEventListener('click', () => {
        prevSection(secCounter)
        secCounter--

        console.log(secCounter, "retrocede")
        

    })
});



function nextSection(currentSection) {
    currentSection = Number(currentSection)
    const section = document.querySelector(`#section${currentSection}`)
    if (validateSection(section)) {
        section.classList.add('slide-out-left')
        section.addEventListener('animationend', function () {
            section.classList.add('hidden')
            section.classList.remove('slide-out-left')
            const nextSection = document.querySelector(`#section${currentSection + 1}`)
            nextSection.classList.remove('hidden')
            nextSection.classList.add('slide-in-right')
            nextSection.addEventListener('animationend', function () {
                nextSection.classList.remove('slide-in-right')
            }, { once: true })
        }, { once: true })
    }

}


function prevSection(currentSection) {
    currentSection = Number(currentSection)
    const section = document.querySelector(`#section${currentSection}`)
    section.classList.add('slide-out-right')
    section.addEventListener('animationend', function () {
        section.classList.add('hidden')
        section.classList.remove('slide-out-right')
        const prevSection = document.querySelector(`#section${currentSection - 1}`)
        prevSection.classList.remove('hidden')
        prevSection.classList.add('slide-in-left')
        prevSection.addEventListener('animationend', function () {
            prevSection.classList.remove('slide-in-left')
        }, { once: true })
    }, { once: true })

}

function validateSection(section) {
    const inputs = section.querySelectorAll('input[required]')
    for (let input of inputs) {
        if (!input.checkValidity()) {
            input.reportValidity()
            return false
        }
    }
    return true
}


//image validator and dysplay
document.querySelector('#imageUpload').addEventListener('change', function (event) {
    const file = event.target.files[0]
    if (file && file.type === 'image/jpeg' || file && file.type === 'image/png') {
        const reader = new FileReader()
        reader.onload = function (e) {
            document.querySelector('#imagePreview').src = e.target.result
        }
        reader.readAsDataURL(file)
    } else {
        alert('Por favor, seleccione una imagen en formato JPG.')
    }
})


//variblesForJason
//artist
const name=formRegister.querySelector('#artistic-name')
// genres
const genrero=formRegister.querySelector('#artistic-genre')
const genrero2=formRegister.querySelector('#artistic-genre-2')
const genrero3=formRegister.querySelector('#artistic-genre-3')
//image
const img=formRegister.querySelector('#imageUpload') // la ultima en organizar
//description
const bandDesc=formRegister.querySelector('#music-description')
//iframe
const iframe=formRegister.querySelector('#iframe')
//networks
const insta=formRegister.querySelector('#insta')
const spoty=formRegister.querySelector('#spoty')
const face=formRegister.querySelector('#face')
const tik=formRegister.querySelector('#tik')
const ytb=formRegister.querySelector('#ytb')
//nick
const nik=formRegister.querySelector('#nickname')
//email
const mail=formRegister.querySelector('#mail')
const mailConfi=formRegister.querySelector('#confi-mail')

const psw=formRegister.querySelector('#psw')
const pswConfi=formRegister.querySelector('#psw-verifier')

function lookForDefault(section) {
    if(section.value=== null || section.value=== undefined){

    }

}



// creacion json
formRegister.addEventListener('submit',async(event)=>{
    event.preventDefault()
    console.log(name,genrero,genrero2,genrero3,img,bandDesc,iframe,insta,spoty,nik,mail,psw)
    // await registerUser(username, fullName, email, password)
    //     window.location.href="./login.html"

})

// async function registerMusician(username, email, password, bandName, photo,biography,g1,g2,g3,iframe,phone,insta,spoty,face,tik, ) {
//     const newMusician = {
        
//         username: username.value,
//         logInfo: {
//             email: email.value,
//             password: password.value
//         },
//         mainInfo: {
//             name:bandName,
//             photo: ,
//             biography: 
//         },
//         genres: {
//             genre1: ,
//             genre2: ,
//             genre3: 
//         },
//         info: {
//             video: ,
//             phoneNumber: 
//         },
//         socialMedia: {
//         instagram: ,
//         facebook: ,
//         spotify: ,
//         tiktok: ,
//         youtube: 
//     }

// }
//     await fetch("http://localhost:3000/artists", {
//         method: 'POST',
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(newMusician),
//     })
// }