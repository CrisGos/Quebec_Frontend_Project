// Definition of the local server constants and the id of the section where the content will be printed.
const URL_DATABASE = 'http://localhost:3000/artists'
const profileContainer = document.getElementById("account-main")
const form = document.querySelector("form")
const username = document.getElementById("username")
const fullname = document.getElementById("fullname")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirm-password")
const bio = document.getElementById("bio")
const genre1 = document.getElementById("genre1")
const genre2 = document.getElementById("genre2")
const genre3 = document.getElementById("genre3")
const imageUrl = document.getElementById("image-url")
const video = document.getElementById("video")
const phone = document.getElementById("phone")
const instagramUrl = document.getElementById("instagram-url")
const youtubeUrl = document.getElementById("youtube-url")
const facebookUrl = document.getElementById("facebook-url")
const spotifyUrl = document.getElementById("spotify-url")
const tiktokUrl = document.getElementById("tiktok-url")




// Function to populate the form and get the response of json serer
async function accountMod() {
    const response = await fetch(URL_DATABASE);
    const database = await response.json();

    const getData = localStorage.getItem("userOnline");
    const exmp = JSON.parse(getData);
    const artist = database.find(singer => singer.username === exmp.username);
    console.log(artist);

    
    // Populate the form with the artist's data
    username.value = artist.username;
    fullname.value = artist.mainInfo.name;
    email.value = artist.logInfo.email;
    password.value = artist.logInfo.password;
    bio.value = artist.mainInfo.biography;
    genre1.value = artist.genres.genre1;
    genre2.value = artist.genres.genre2;
    genre3.value = artist.genres.genre3;
    imageUrl.value = artist.mainInfo.photo;
    video.value = artist.info.video;
    phone.value = artist.info.phoneNumber;
    instagramUrl.value = artist.socialMedia.instagram;
    youtubeUrl.value = artist.socialMedia.youtube;
    facebookUrl.value = artist.socialMedia.facebook;
    spotifyUrl.value = artist.socialMedia.spotify;
    tiktokUrl.value = artist.socialMedia.tiktok;

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        if (password.value !== confirmPassword.value) {
            alert("Passwords do not match!");
            return;
        }
        await updateArtist(artist);
    });
}

// function to modify the artist data
async function updateArtist(artist) {
    const updatedArtist = {
        "username": username.value,
        "logInfo": {
            "email": email.value,
            "password": password.value
        },
        "mainInfo": {
            "name": fullname.value,
            "photo": imageUrl.value,
            "biography": bio.value
        },
        "genres": {
            "genre1": genre1.value,
            "genre2": genre2.value,
            "genre3": genre3.value
        },
        "info": {
            "video": video.value,
            "phoneNumber": phone.value
        },
        "socialMedia": {
            "instagram": instagramUrl.value,
            "facebook": facebookUrl.value,
            "spotify": spotifyUrl.value,
            "tiktok": tiktokUrl.value,
            "youtube": youtubeUrl.value
        }
    };

    const response = await fetch(`${URL_DATABASE}/${artist.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedArtist),
    });

    if (response.ok) {
        alert("Profile updated successfully!");
    } else {
        alert("Failed to update profile.");
    }
}

accountMod();

