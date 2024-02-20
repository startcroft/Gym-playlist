const nav = document.getElementById("nav");
const openButton = document.getElementById("openButton");
const closeButton = document.getElementById("closeButton");
const songsContainer = document.querySelector(".secondSection__demoSongs");
const songsContainerDemo = document.querySelector(".firstSection__demoSongs");

const songs = [

    {
        id: "1",
        name: "By The Rivers Of Babylon",
        author: "Boney",
        duration: "03:00",
        date: "10 oct, 1976",
        Image: "/images/song1.jpg"
    },
    {
        id: "2",
        name: "Lay All Your Love On Me",
        author: "Abba",
        duration: "04:40",
        date: "10 oct, 1989",
        Image: "/images/song2.jpg"
    },
    {
        id: "3",
        name: "Eat Them Apples",
        author: "Suzi Wu",
        duration: "04:20",
        date: "10 feb, 2023",
        Image: "/images/song3.jpg"
    }

];

const printSongs = (container, array) => {

    container.innerHTML = "";

    array.forEach(element => {
        
        container.innerHTML += `
        <div class="secondSection__card--demoSong">
          <h3 class="secondSection__h3--demoSong">${element.id}</h3>
          <img class="secondSection__img--demoSong" src=${element.Image} alt="album">
          <div class="secondSection__songTitle">
            <h2 class="secondSection__h2--songTitle">${element.name}</h2>
            <h3 class="secondSection__h3--songTitle">${element.author}</h3>
          </div>
          <div class="secondSection__songDuration">
            <p class="secondSection__p--songDuration">${element.duration}</p>
            <span class="secondSection__span--songDuration">${element.date}</span>
          </div>
        </div>
       `
    });
}

const printSongsDemo = (container, array) => {

    container.innerHTML = "";

    array.forEach(element => {
        
        container.innerHTML += `
        <div class="firstSection__card--demoSong">
          <h3 class="firstSection__h3--demoSong">${element.id}</h3>
          <img class="firstSection__img--demoSong" src=${element.Image}  alt="album">
          <div class="firstSection__songTitle">
            <h2 class="firstSection__h2--songTitle">${element.name}</h2>
            <h3 class="firstSection__h3--songTitle">${element.author}</h3>
          </div>
          <div class="firstSection__songDuration">
            <p class="firstSection__p--songDuration">${element.duration}</p>
            <span class="firstSection__span--songDuration">${element.date}</span>
          </div>
        </div>
       `
    });
}

document.addEventListener("DOMContentLoaded", () =>{
    printSongs(songsContainer, songs);
    printSongsDemo(songsContainerDemo, songs);
})

openButton.addEventListener("click", () => {
    nav.classList.add("visible");
})

closeButton.addEventListener("click", () => {
    nav.classList.remove("visible");
})