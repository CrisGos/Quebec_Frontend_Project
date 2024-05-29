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

    const inputs = section.querySelectorAll('input')
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
const g1=formRegister.querySelector('#artistic-genre')
const g2=formRegister.querySelector('#artistic-genre-2')
const g3=formRegister.querySelector('#artistic-genre-3')
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
//phone
const phone=formRegister.querySelector('#phone')
//email
const mail=formRegister.querySelector('#mail')
const mailConfi=formRegister.querySelector('#confi-mail')

const psw=formRegister.querySelector('#psw')
const pswConfi=formRegister.querySelector('#psw-verifier')
function validation(secCounter) {
    if (secCounter==1) {

    }
    if (secCounter==2) {
        
    }
    if (secCounter==3) {
        
    }
    if (secCounter==4) {
        
    }
}

function genroVal(gen) {
    if (gen.value== "void") {
        alert('problema con generos')
    }
    
}

// creacion json
formRegister.addEventListener('submit',async(event)=>{
    event.preventDefault()
    const newMusician = {
        
        username: nik.value,
        logInfo: {
            email: mail.value,
            password: psw.value
        },
        mainInfo: {
            name:name.value,
            photo: img.value ,
            biography: bandDesc.value
        },
        genres: {
            genre1: g1.value,
            genre2: g2.value,
            genre3:g3.value 
        },
        info: {
            video:iframe.value ,
            phoneNumber: phone.value
        },
        socialMedia: {
        instagram: insta.value ,
        facebook: face.value ,
        spotify: spoty.value ,
        tiktok: tik.value ,
        youtube:ytb.value 
    }
}
    
    console.log(newMusician);
    registerMusician(newMusician)
    // await registerUser(username, fullName, email, password)
    //     window.location.href="./login.html"

})

// {
//     "username": "Kaligos",
//     "logInfo": {
//         "email": "castro@int",
//         "password": "123"
//     },
//     "mainInfo": {
//         "name": "tumba",
//         "photo": "C:\\fakepath\\Screenshot from 2024-05-28 14-36-20.png",
//         "biography": "213"
//     },
//     "genres": {
//         "genre1": "Género",
//         "genre2": "",
//         "genre3": "rock"
//     },
//     "info": {
//         "video": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/bxCsPVgwC5Y?si=yu28MrmpTtyUHdHZ\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>",
//         "phoneNumber": "3224495321"
//     },
//     "socialMedia": {
//         "instagram": "https://www.instagram.com/",
//         "facebook": "",
//         "spotify": "",
//         "tiktok": "",
//         "youtube": ""
//     }
// }

async function registerMusician(musician) {
    await fetch("http://localhost:3000/artists", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(musician),
    })

    
}
    