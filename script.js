const songs = [
  {
    title: "Bittersweet",
    artist: "Madison Beer",
    cover: "https://t2.genius.com/unsafe/258x258/https%3A%2F%2Fimages.genius.com%2Fde71a615db1f95983b844612de982c3e.1000x1000x1.png",
    src: "songs/bittersweet.mp3"
  },
  {
    title: "Reckless",
    artist: "Madison Beer",
    cover: "https://i.pinimg.com/1200x/c1/24/f6/c124f616e67a7b01ab9d6298beaeee03.jpg",
    src: "songs/reckless.mp3"
  },
];

let currentSong = 0;
const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");
const playPauseBtn = document.getElementById("playPauseBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const volume = document.getElementById("volume");

function loadSong(index) {
  const song = songs[index];
  title.textContent = song.title;
  artist.textContent = song.artist;
  cover.src = song.cover;
  audio.src = song.src;
}

function playSong() {
  audio.play();
  playPauseBtn.textContent = "⏸";
}

function pauseSong() {
  audio.pause();
  playPauseBtn.textContent = "▶";
}

playPauseBtn.addEventListener("click", () => {
  if (audio.paused) {
    playSong();
  } else {
    pauseSong();
  }
});

nextBtn.addEventListener("click", () => {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(currentSong);
  playSong();
});

prevBtn.addEventListener("click", () => {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  loadSong(currentSong);
  playSong();
});

volume.addEventListener("input", (e) => {
  audio.volume = e.target.value;
});

loadSong(currentSong);
