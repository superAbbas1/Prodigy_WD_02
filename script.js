let startTime, updatedTime, difference, tInterval;
let running = false;
const display = document.getElementById('display');
const laps = document.getElementById('laps');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');

function startStop() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(updateTime, 1);
        running = true;
        startStopBtn.textContent = 'Stop';
        lapBtn.disabled = false;
    } else {
        clearInterval(tInterval);
        running = false;
        startStopBtn.textContent = 'Start';
        lapBtn.disabled = true;
    }
}

function reset() {
    clearInterval(tInterval);
    running = false;
    display.textContent = '00:00:00';
    startStopBtn.textContent = 'Start';
    lapBtn.disabled = true;
    laps.innerHTML = '';
}

function lap() {
    const li = document.createElement('li');
    li.textContent = display.textContent;
    laps.appendChild(li);
}

function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    const hours = Math.floor(difference / (1000 * 60 * 60)).toString().padStart(2, '0');
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
    const seconds = Math.floor((difference % (1000 * 60)) / 1000).toString().padStart(2, '0');
    display.textContent = `${hours}:${minutes}:${seconds}`;
}

startStopBtn.addEventListener('click', startStop);
resetBtn.addEventListener('click', reset);
lapBtn.addEventListener('click', lap);
lapBtn.disabled = true;
