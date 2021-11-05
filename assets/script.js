var body = document.body;

// start screen section
var startEl = document.createElement("div");
var viewHighScoresEl = document.createElement("button");
var startQuizEl = document.createElement("button");

// high scores screen
var highScoresEl = document.createElement("div");
// high scores listed
var highScoresChartEl = document.createElement("ol");
var scoreLi1 = document.createElement("li");
var scoreLi2 = document.createElement("li");
var scoreLi3 = document.createElement("li");
var scoreLi4 = document.createElement("li");
var scoreLi5 = document.createElement("li");
// leave high score screen, return to start screen
var returnToStartEl = document.createElement("button");

// quiz questions section
var quizEl = document.createElement("div");
// question
var questionEl = document.createElement("h2");
// answer options listed
var answerOptionButton1 = document.createElement("button");
var answerOptionButton2 = document.createElement("button");
var answerOptionButton3 = document.createElement("button");
var answerOptionButton4 = document.createElement("button");
// current score
var currentScoreEl = document.getElementsByName("currentScore");
// display whether answer is correct or incorrect
var answerCorrectEl = document.createElement("p");
var answerIncorrectEl = document.createElement("p");

// timer
var timerEl = document.getElementById("timer");


viewHighScoresEl.textContent = "View High Scores";
startQuizEl.textContent = "Start the Quiz";
returnToStartEl.textContent = "Return to the Start Screen";


body.appendChild(startEl);
startEl.appendChild(viewHighScoresEl);
startEl.appendChild(startQuizEl);

// add event listener to view high scores
viewHighScoresEl.addEventListener("click", function() {
    // clear startEl screen, append highScoresEl screen
    startEl.remove();
    body.appendChild(highScoresEl);
    highScoresEl.appendChild(highScoresChartEl);
    highScoresChartEl.append(scoreLi1, scoreLi2, scoreLi3, scoreLi4, scoreLi5);
    highScoresEl.appendChild(returnToStartEl);
});

// add event listener to return to startEl screen
returnToStartEl.addEventListener("click", function() {
    // clear highScoresEl screen
    highScoresEl.remove();
    body.appendChild(startEl);
});

// add event listener to start quiz
startQuizEl.addEventListener("click", function() {
    // clear startEl screen, append quizEl screen
    startEl.remove();
    body.appendChild(quizEl);
});


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