let prev = document.querySelector(".prev");
let play = document.querySelector(".play");
let pause = document.querySelector(".pause");
let next = document.querySelector(".next");
let title = document.querySelector("h1");
let cover = document.querySelector(".img");
let music = document.querySelector("audio");


let songs = [{
        name: "1",
        title: "kun faya kun",
        cover: "1.jpg"
    },
    {
        name: "2",
        title: "Ao na(Haider)",
        cover: "2.jpg"
    },

    {
        name: "3",
        title: "Bhula dena",
        cover: "3.jpg"
    },

    {
        name: "4",
        title: "Chill gaye naina",
        cover: "4.jpg"
    },

    {
        name: "5",
        title: "muskarane",
        cover: "5.jpg"
    },

    {
        name: "6",
        title: "saavan bairi",
        cover: "6.jpg"
    },

    {
        name: "7",
        title: "Hoke majboor",
        cover: "7.jpg"
    },

    {
        name: "8",
        title: "kabhi jo badal",
        cover: "8.jpg"
    },
    {
        name: "9",
        title: "Milne hai mujhe aayi",
        cover: "9.jpg"
    },

    {
        name: "10",
        title: "jaroori tha",
        cover: "10.jpg"
    },
];


function myfunc() {
    music.play();
    play.style.display = "none";
    pause.style.display = "block";
}

function myfunc2() {
    music.pause();
    play.style.display = "block";
    pause.style.display = "none";
}

function loadSong(songs) {
    title.textContent = songs.title;
    cover.src = "images/" + songs.name + ".jfif";
    music.src = "songs/" + songs.name + ".mp3";
}
songsIndex = 0;

const nextSong = () => {

    songsIndex++;
    loadSong(songs[songsIndex]);
}
const prevSong = () => {

    songsIndex--;
    loadSong(songs[songsIndex]);
}

play.addEventListener("click", myfunc);
pause.addEventListener("click", myfunc2);
next.addEventListener("click", nextSong);
next.addEventListener("click", myfunc);
prev.addEventListener("click", prevSong);
prev.addEventListener("click", myfunc);