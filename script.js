///Global variables
const time_el = document.querySelector(".watch .time");
const start_btn = document.getElementById("start");
const stop_btn = document.getElementById("stop");
const reset_btn = document.getElementById("reset");
const lap_btn = document.getElementById("lap");
const lapRecord = document.getElementById("lapRecord");
// const lapStorage = JSON.parse(localStorage.getItem("lapStorage")) || []
// if (!counter) {
//     start_btn.addEventListener("click", (event) => {
//         lapRecord.push
//         localStorage.setItem('lapStorage', JSON.stringify(lapStorage))
//         event.target.parentNode.replaceChildren(counter);
//     });


let counter = 0;
let interval = null;

let laps = null;
let lapNow = null;
let hours = 0;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;

let displayMilisec = miliseconds;
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
  console.log("cs:", counter);

  let centis = counter % 100;
  let secs = Math.floor(counter / 100) % 60;
  let mins = Math.floor(counter / (60 * 100)) % 60;
  let hrs = Math.floor(counter / (60 * 60 * 100));

  if (centis < 10) centis = "0" + centis;
  if (secs < 10) secs = "0" + secs;
  if (mins < 10) mins = "0" + mins;
  if (hrs < 10) hrs = "0" + hrs;

  time_el.innerText = `${hrs}:${mins}:${secs}.${centis}`;
}


function start() {
  if (interval) {
    return;
  }

  console.log("interval set");
  interval = setInterval(timer, 10);
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
  lapNow = `<div class="lap">${time_el.innerText}</div>;`
  lapRecord.innerHTML += lapNow;
}

function getLaps(){
lapNow.innerHTML= localStorage.getItem("lap");
}

function clearStoredLaps(){
  localStorage.clear();
}
getLaps;

// function lap() {

//     lapNow = hours + " : " + minutes + " : " + seconds + " : " + centiseconds;
//     laps = document.getElementById('lapRecord').innerHTML + lapNow;

//     document.getElementById('lapRecord').innerHTML = laps;
//}
