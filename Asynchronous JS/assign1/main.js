let timerDisplay = document.getElementById('timer');
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');

let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

function startTimer() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1000);
        running = true;
    }
}

function stopTimer() {
    if (running) {
        clearInterval(tInterval);
        running = false;
    }
}

function resetTimer() {
    clearInterval(tInterval);
    running = false;
    timerDisplay.textContent = "00:00";
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    seconds = (seconds < 10) ? "0" + seconds : seconds;
    minutes = (minutes < 10) ? "0" + minutes : minutes;

    timerDisplay.textContent = minutes + ":" + seconds;
}
