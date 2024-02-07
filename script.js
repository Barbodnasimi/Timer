let timer;
let timerElem = document.querySelector('#timer');
let minutesInput = document.querySelector("#min");
let secondsInput = document.querySelector("#sec");

const startBtn = document.querySelector('#Start');
const stopBtn = document.querySelector('#Stop');
const resetBtn = document.querySelector('#reset');

let minutes = 25, seconds = 0;

(function addEventsToInputs() {
  minutesInput.addEventListener('input', (e) => {
    minutes = parseInt(e.target.value);
  });
  secondsInput.addEventListener('input', (e) => {
    seconds = parseInt(e.target.value);
  });
})();

function startTimer() {
  if (minutes === undefined || seconds === undefined) {
    alert('Please give me the right numbers !');
  } 
  
  updateTimerDisplay();

  // Start the timer
  timer = setInterval(() => {
    if (seconds === 0) {
      if (minutes === 0) {
        stopTimer();
        alert('Time up!');
      } else {
        minutes--;
        seconds = 59;
      }
    } else {
      seconds--;
    }

    updateTimerDisplay();
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function resetTimer() {
  minutesInput.value = 0;
  secondsInput.value = 0;

  minutes = 25;
  seconds = 0;
  
  stopTimer();
  resetTimerDisplay();
}

function resetTimerDisplay() {
  timerElem.textContent = `25:00`;
}

function updateTimerDisplay() {
  const displayMinutes = minutes < 10 ? '0' + minutes : minutes;
  const displaySeconds = seconds < 10 ? '0' + seconds : seconds;
  timerElem.textContent = `${displayMinutes}:${displaySeconds}`;
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
