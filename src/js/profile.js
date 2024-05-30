document.addEventListener("DOMContentLoaded", function() {
    const URL_DATABASE = 'http://localhost:3000/artists';
    const classTaken = document.getElementsByClassName("profile");
    const artistsContainer = classTaken[0]

    artistsContainer.addEventListener("click", async (event) => {
        event.preventDefault();
        alert("Hola");
        const response = await fetch(URL_DATABASE);
        const database = await response.json();

        const getData = localStorage.getItem("userOnline");
        const exmp = JSON.parse(getData);
        const artist = database.find(singer => singer.username === exmp.username);
        console.log(artist);
        window.location.href = `/src/pages/artistaProfile.html?id=${artist.id}`;
    });
});
