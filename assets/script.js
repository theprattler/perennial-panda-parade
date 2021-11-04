var timerEl = document.getElementById("timer");





// timer counts down from 60
function countdown() {
    var timeRemaining = 60;

    var timeInterval = setInterval(function () {
        if (timeRemaining > 1) {
            timerEl.textContent = "Time Remaining: " + timeRemaining + " seconds";
            timeRemaining--;
        } else if (timeRemaining === 1) {
            timerEl.textContent = "Time Remaining: " + timeRemaining + " second";
            timeRemaining--;
        } else {
            timerEl.textContent = "Time is up!";
            clearInterval(timeInterval);
        }
    }, 1000);
};

countdown();