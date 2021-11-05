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
var answerOptionsLi = document.createElement("ul");
var answerOptionButton1 = document.createElement("button");
var answerOptionButton2 = document.createElement("button");
var answerOptionButton3 = document.createElement("button");
var answerOptionButton4 = document.createElement("button");
answerOptionsLi.append(answerOptionButton1, answerOptionButton2, answerOptionButton3, answerOptionButton4);
// current score
var currentScoreEl = document.createElement("p");
// display whether answer is correct or incorrect
var answerCorrectConfirmationEl = document.createElement("p");
var answerIncorrectConfirmationEl = document.createElement("p");


// current score
var currentScore = 0;

// timer
var timerEl = document.getElementById("timer");


viewHighScoresEl.textContent = "View High Scores";
startQuizEl.textContent = "Start the Quiz";
returnToStartEl.textContent = "Return to the Start Screen";
answerCorrectConfirmationEl.textContent = "Correct! +5 Points!";
answerIncorrectConfirmationEl.textContent = "Incorrect! -5 Seconds!";

// start page
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
    returnToStartEl.remove();
    // need to figure out how to reset the clock
    //document.getElementById(timerEl).reset();

    timerEl.remove();
    
    body.appendChild(startEl);
});

// add event listener to start quiz
startQuizEl.addEventListener("click", function() {
    // clear startEl screen, append quizEl screen
    startEl.remove();
    body.appendChild(quizEl);
    body.appendChild(timerEl);
    countdown();
    questionOne();
    body.appendChild(currentScoreEl);
    //quizEl.appendChild(questions);
    body.appendChild(returnToStartEl);
    
});

function questionOne() {
    questionEl.textContent = "What is the first letter of the alphabet?";
    answerOptionButton1.textContent = "A";
    answerOptionButton2.textContent = "N";
    answerOptionButton3.textContent = "P";
    answerOptionButton4.textContent = "Z";
    body.appendChild(questionEl);
    body.appendChild(answerOptionsLi);
    answerOptionButton1.addEventListener("click", function() {
        body.appendChild(answerCorrectConfirmationEl);
    })
    
    
};

/*function quizLoop() {
    // questions and answers array
    var questions = [
        {
            question: questionEl.textContent = "dhjkajdhf",
            answers: {
                answer1: answerOptionButton1.textContent = "a",
                answer2: answerOptionButton2.textContent = "b",
                answer3: answerOptionButton3.textContent = "c",
                answer4: answerOptionButton4.textContent = "d"
            },
            correctAnswer: answerOptionButton2 = true
        },
        {   
            question: questionEl.textContent = "dajdfjhjk",
            answers: {
                answer1: answerOptionButton1.textContent = "a",
                answer2: answerOptionButton2.textContent = "b",
                answer3: answerOptionButton3.textContent = "c",
                answer4: answerOptionButton4.textContent = "d"
            },
            correctAnswer: answerOptionButton4 = true
        },
        {
            question: questionEl.textContent = "hfrydfk",
            answers: {
                answer1: answerOptionButton1.textContent = "a",
                answer2: answerOptionButton2.textContent = "b",
                answer3: answerOptionButton3.textContent = "c",
                answer4: answerOptionButton4.textContent = "d"
            },
            correctAnswer: answerOptionButton1 = true
        },
        {
            question: questionEl.textContent = "hhghgfdffk",
            answers: {
                answer1: answerOptionButton1.textContent = "a",
                answer2: answerOptionButton2.textContent = "b",
                answer3: answerOptionButton3.textContent = "c",
                answer4: answerOptionButton4.textContent = "d"
            },
            correctAnswer: answerOptionButton2 = true
        },
        {
            question: questionEl.textContent = "utffdfk",
            answers: {
                answer1: answerOptionButton1.textContent = "a",
                answer2: answerOptionButton2.textContent = "b",
                answer3: answerOptionButton3.textContent = "c",
                answer4: answerOptionButton4.textContent = "d"
            },
            correctAnswer: answerOptionButton3 = true
        },
        {
            question: questionEl.textContent = "wqwrydfk",
            answers: {
                answer1: answerOptionButton1.textContent = "a",
                answer2: answerOptionButton2.textContent = "b",
                answer3: answerOptionButton3.textContent = "c",
                answer4: answerOptionButton4.textContent = "d"
            },
            correctAnswer: answerOptionButton4 = true
        },
        {
            question: questionEl.textContent = "xdsrydfk",
            answers: {
                answer1: answerOptionButton1.textContent = "a",
                answer2: answerOptionButton2.textContent = "b",
                answer3: answerOptionButton3.textContent = "c",
                answer4: answerOptionButton4.textContent = "d"
            },
            correctAnswer: answerOptionButton1 = true
        },
        {
            question: questionEl.textContent = "bvxzrydfk",
            answers: {
                answer1: answerOptionButton1.textContent = "a",
                answer2: answerOptionButton2.textContent = "b",
                answer3: answerOptionButton3.textContent = "c",
                answer4: answerOptionButton4.textContent = "d"
            },
            correctAnswer: answerOptionButton3 = true
        },
    ];

    // for loop for the questions array
    for (i = 0; i < questions.length; i++) {
        // append questions onto quizEl, quizEl onto body
        body.appendChild(quizEl);
        // if correct answer button is clicked
        //if ()
        // display 'correct' messsage

        // add 5 points to the score

        // else incorrect button is clicked

        // display 'incorrect' message

        // subtract 5 seconds from timer

    };

    return questions;

};*/


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

