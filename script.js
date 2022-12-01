//Global variables
const time_el = document.querySelector(".watch .time");
const start_btn = document.getElementById("start");
const stop_btn = document.getElementById("stop");
const reset_btn = document.getElementById("reset");
const lap_btn = document.getElementById("lap");
const lapRecord = document.getElementById("lapRecord");

let counter = 0;
let interval = null;

let laps = null;
let lapNow = null;
let hours = 0;
let minutes = 0;
let seconds = 0;
let centiseconds = 0;

let displayCentisec = centiseconds;
let displaySec = seconds;
let displayMins = minutes;
let displayHours = hours;

let status = "stopped";

//Event listeners
start_btn.addEventListener("click", start);
stop_btn.addEventListener("click", stop);
reset_btn.addEventListener("click", reset);
lap_btn.addEventListener("click", lap);

//Update the timer
function timer() {
  counter++;

  //Format our time
  let hrs = Math.floor(counter / 3600);
  let mins = Math.floor((counter - hrs * 3600) / 60);
  let secs = counter % 60;
  let centisecs = counter % 60/ 100;

  if (centisecs < 10)centisecs = "0" + centisecs;
  if (secs < 10) secs = "0" + secs;
  if (mins < 10) mins = "0" + mins;
  if (hrs < 10) hrs = "0" + hrs;

  time_el.innerText = `${hrs}:${mins}:${secs}:${centisecs}`;
}

function start() {
  if (interval) {
    return;
  }

  interval = setInterval(timer, 100);
}

function stop() {
  clearInterval(interval);
  interval = null;
}

function reset() {
  stop();
  counter = 0;
  time_el.innerText = "00:00:00";
  lapRecord.innerHTML = "";
}

function lap() {
  lapNow = `<div class="lap">${time_el.innerText}</div>`;
  lapRecord.innerHTML += lapNow;
}

// function lap() {

//     lapNow = hours + " : " + minutes + " : " + seconds + " : " + centiseconds;
//     laps = document.getElementById('lapRecord').innerHTML + lapNow;

//     document.getElementById('lapRecord').innerHTML = laps;
//}
