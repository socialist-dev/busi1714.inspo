const startBtn = document.getElementById("start-btn");
const timeDisplay = document.getElementById("time");
const alarmSound = document.getElementById("alarm-sound");
const body = document.body;
const tabs = document.querySelectorAll(".tab");

let timeInSeconds = 25 * 60; // 25 minutes
let timerInterval = null;
let isDarkMode = false;
let initialTimeInSeconds = timeInSeconds; // Save initial time for reset

// Function to update the timer display
function updateTimerDisplay() {
  const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, "0");
  const seconds = (timeInSeconds % 60).toString().padStart(2, "0");
  timeDisplay.textContent = `${minutes}:${seconds}`;
}

// Function to start or stop the timer
function toggleTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
    startBtn.textContent = "START";
  } else {
    startBtn.textContent = "STOP";
    switchToDarkMode();
    timerInterval = setInterval(() => {
      if (timeInSeconds > 0) {
        timeInSeconds--;
        updateTimerDisplay();
      } else {
        clearInterval(timerInterval);
        timerInterval = null;
        startBtn.textContent = "START";
        alarmSound.play();
        alert("Time's up! Press RESET to start a new session.");
      }
    }, 1000);
  }
}

// Function to toggle dark mode
function switchToDarkMode() {
  if (!isDarkMode) {
    body.classList.add("dark-mode");
    isDarkMode = true;
  }
}

// Function to reset dark mode
function resetDarkMode() {
  body.classList.remove("dark-mode");
  isDarkMode = false;
}

// Function to reset the timer
function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  timeInSeconds = initialTimeInSeconds;
  updateTimerDisplay();
  startBtn.textContent = "START";
  resetDarkMode();
}

// Function to switch tabs
function switchTab(event) {
  const selectedTab = event.target.id;
  tabs.forEach((tab) => tab.classList.remove("active"));
  event.target.classList.add("active");

  if (selectedTab === "pomodoro") {
    timeInSeconds = 25 * 60;
  } else if (selectedTab === "short-break") {
    timeInSeconds = 5 * 60;
  } else if (selectedTab === "long-break") {
    timeInSeconds = 15 * 60;
  }
  initialTimeInSeconds = timeInSeconds; // Update initial time for reset
  updateTimerDisplay();
  clearInterval(timerInterval);
  timerInterval = null;
  startBtn.textContent = "START";
  resetDarkMode();
}

// Event listeners
startBtn.addEventListener("click", toggleTimer);

// Add Reset Button Functionality
const resetBtn = document.createElement("button");
resetBtn.textContent = "RESET";
resetBtn.classList.add("reset-btn");
resetBtn.addEventListener("click", resetTimer);
document.querySelector(".timer-box").appendChild(resetBtn);

tabs.forEach((tab) => tab.addEventListener("click", switchTab));

// Initialize timer display
updateTimerDisplay();
