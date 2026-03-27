console.log("welcome to spotify");

let songindex = 0;
let masterplay = document.getElementById("masterplay");
let myprogressbar = document.getElementById("myprogressbar");
let songitem = Array.from(document.getElementsByClassName("songitem"));
let timestamp = Array.from(document.getElementsByClassName("timestamp"));
let footer_song = document.querySelector(".song-name #song-name");
let previous = document.getElementById("previous");
let forward = document.getElementById("forward");

// footer_song.addEventListener("click", () => {
//     footer_song.innerText = "om";
// });

let audioElement = new Audio("audio/1.mp3");
let songs = [
  { songname: "jay hanuman0", filepath: "audio/1.mp3", timestamp: "2:00" },
  { songname: "jay hanuman1", filepath: "audio/2.mp3", timestamp: "3:00" },
  { songname: "jay hanuman2", filepath: "audio/3.mp3", timestamp: "4:00" },
  { songname: "jay hanuman3", filepath: "audio/4.mp3", timestamp: "3:00" },
  { songname: "jay hanuman4", filepath: "audio/5.mp3", timestamp: "2:00" },
  { songname: "jay hanuman5", filepath: "audio/6.mp3", timestamp: "3:00" },
  { songname: "jay hanuman6", filepath: "audio/7.mp3", timestamp: "4:00" },
];

//handle play/pause click
masterplay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterplay.classList.remove("ri-play-circle-line");
    masterplay.classList.add("ri-play-pause-line");
    masterplay.src = "assets/pause.png";
  } else {
    audioElement.pause();
    masterplay.classList.remove("ri-pause-circle-line");
    masterplay.classList.add("ri-play-play-line");
    masterplay.src = "assets/play.png";
  }
});

//listen to events
audioElement.addEventListener("timeupdate", () => {
  // update seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myprogressbar.value = progress;
});

myprogressbar.addEventListener("change", () => {
  audioElement.currentTime =
    (myprogressbar.value * audioElement.duration) / 100;
});

songitem.forEach((element, i) => {
  element.getElementsByClassName("songname")[0].innerHTML = songs[i].songname;
  element.getElementsByClassName("timestamp")[0].innerHTML = songs[i].timestamp;
});

const makeallplays = () => {
  Array.from(document.getElementsByClassName("songitemplay")).forEach(
    (element) => {
      element.classList.remove("ri-pause-circle-line");
      element.classList.add("ri-play-circle-line");
    }
  );
};

Array.from(document.getElementsByClassName("songitemplay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeallplays();
      songindex = parseInt(e.target.id);
      e.target.classList.remove("ri-play-circle-line");
      e.target.classList.add("ri-pause-circle-line");
      console.log(e.target.classList.value)
      audioElement.src = `audio/${songindex}.mp3`;
      audioElement.currentTime = 0;
      audioElement.play();
      masterplay.src = "assets/pause.png";
      masterplay.classList.add("ri-pause-circle-line");

      // console.log(songs[`${index}`.songname]);
      const x = songs[`${songindex}`].songname;
      footer_song.innerText = x;
    });
  }
);

previous.addEventListener("click", () => {
  console.log("clicked");
  if (songindex <= 0) {
    songindex = 1;
  } else {
    songindex -= 1;
  }
  audioElement.src = `audio/${songindex}.mp3`;

  audioElement.currentTime = 0;
  audioElement.play();
  masterplay.src = "assets/pause.png";
  masterplay.classList.add("ri-pause-circle-line");

  // console.log(songs[`${index}`.songname]);
  const x = songs[`${songindex}`].songname;
  footer_song.innerText = x;
});

forward.addEventListener("click", () => {
  console.log("clicked");
  if (songindex >= 7) {
    songindex = 1;
  } else {
    songindex += 1;
  }
  audioElement.src = `audio/${songindex}.mp3`;

  audioElement.currentTime = 0;
  audioElement.play();
  masterplay.src = "assets/pause.png";
  masterplay.classList.add("ri-pause-circle-line");

  // console.log(songs[`${index}`.songname]);
  const x = songs[`${songindex}`].songname;
  footer_song.innerText = x;
});
