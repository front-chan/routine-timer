let timer;
let time = 0;
let hours, minutes, sec;

const timeText = document.querySelector(".time-text");

const startBtn = document.querySelector(".start-btn");
const stopBtn = document.querySelector(".stop-btn");
const resetBtn = document.querySelector(".reset-btn");
const saveBtn = document.querySelector(".save-btn");
let recordList = document.querySelector(".record-list");

function printTime() {
  time++;
  timeText.innerText = getTimeString();
}

function startClock() {
  printTime();
  stopClock();
  timer = setTimeout(startClock, 1000);
}

function stopClock() {
  if (timer !== null) {
    clearTimeout(timer);
  }
}
startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  stopBtn.style.display = "inline";
  startClock();
});

stopBtn.addEventListener("click", () => {
  stopBtn.style.display = "none";
  startBtn.style.display = "inline";
  stopClock();
});

function getTimeString() {
  hours = parseInt(String(time / (60 * 60)));
  minutes = parseInt(String(time - hours * 60 * 60) / 60);
  sec = time % 60;

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}:${String(sec).padStart(2, "0")}`;
}

saveBtn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.innerText = timeText.textContent;
  recordList.append(li);
});

resetBtn.addEventListener("click", () => {
  stopBtn.style.display = "none";
  startBtn.style.display = "inline";
  stopClock();
  timeText.innerText = "00:00:00";
  time = 0;
  recordList.innerText = "";
});
