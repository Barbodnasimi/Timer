let timer;
let ELtimer = document.querySelector('#timer');
let ELminutes = document.querySelector("#min");
let ELseconds = document.querySelector("#sec");
const Startbtn = document.querySelector('#Start');
const Stopbtn = document.querySelector('#Stop');
let initialMinutes, initialSeconds, minutes, seconds;

function startTimer() {
    // Get the input values
    let inputMinutes = parseInt(ELminutes.value);
    let inputSeconds = parseInt(ELseconds.value);

    // Set the initial values for minutes and seconds if not already set
    if (initialMinutes === undefined && initialSeconds === undefined) {
        initialMinutes = inputMinutes;
        initialSeconds = inputSeconds;
    }

    // Set the initial values for minutes and seconds
    minutes = inputMinutes;
    seconds = inputSeconds;

    // If the timer is already running, clear the existing interval
    if (timer) {
        clearInterval(timer);
    }

    // Update the timer display
    updateTimer();

    // Start the timer
    timer = setInterval(() => {
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(timer);
                alert('Time up!');
                return;
            }
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }

        // Update the timer display
        updateTimer();
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function updateTimer() {
    const displayMinutes = minutes < 10 ? '0' + minutes : minutes;
    const displaySeconds = seconds < 10 ? '0' + seconds : seconds;
    ELtimer.textContent = `${displayMinutes}:${displaySeconds}`;
}

Startbtn.addEventListener('click', startTimer);
Stopbtn.addEventListener('click', stopTimer);