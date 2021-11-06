var body = document.body;

// start screen section
var startEl = document.createElement("div");
var viewHighScoresEl = document.createElement("button");
var startQuizEl = document.createElement("button");

// high scores screen
var highScoresEl = document.createElement("div");
var highScore = localStorage.getItem("highScore");;
var highScores = [];
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
quizEl.append(questionEl);
quizEl.append(answerOptionsLi);

// quiz questions section 2
var quiz2El = document.createElement("div");
var question2El = document.createElement("h2");
var answerOptions2Li = document.createElement("ul");
var q2a1 = document.createElement("button");
var q2a2 = document.createElement("button");
var q2a3 = document.createElement("button");
var q2a4 = document.createElement("button");

// quiz questions section 3
var quiz3El = document.createElement("div");
var question3El = document.createElement("h2");
var answerOptions3Li = document.createElement("ul");
var q3a1 = document.createElement("button");
var q3a2 = document.createElement("button");
var q3a3 = document.createElement("button");
var q3a4 = document.createElement("button");

// quiz questions section 4
var quiz4El = document.createElement("div");
var question4El = document.createElement("h2");
var answerOptions4Li = document.createElement("ul");
var q4a1 = document.createElement("button");
var q4a2 = document.createElement("button");
var q4a3 = document.createElement("button");
var q4a4 = document.createElement("button");

// quiz questions section 5
var quiz5El = document.createElement("div");
var question5El = document.createElement("h2");
var answerOptions5Li = document.createElement("ul");
var q5a1 = document.createElement("button");
var q5a2 = document.createElement("button");
var q5a3 = document.createElement("button");
var q5a4 = document.createElement("button");

// current score
var currentScoreEl = document.getElementById("score");
var currentScore = 0;

// display whether answer is correct or incorrect
var answerCorrectConfirmationEl = document.createElement("p");
var answerIncorrectConfirmationEl = document.createElement("p");

// timer
var timeRemaining = 60;
var timerEl = document.getElementById("timer");


viewHighScoresEl.textContent = "View High Scores";
startQuizEl.textContent = "Start the Quiz";
returnToStartEl.textContent = "Return to the Start Screen";
answerCorrectConfirmationEl.textContent = "Correct! +5 Points!";
answerIncorrectConfirmationEl.textContent = "Incorrect! -5 Seconds!";
currentScoreEl.textContent = "Your Score: " + currentScore;

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
    body.appendChild(timerEl);
    body.appendChild(quizEl);
    body.appendChild(currentScoreEl);
    countdown();
    questionOne();
    
    //quizEl.appendChild(questions);
    body.appendChild(returnToStartEl);
    
});



function questionOne() {
    questionEl.textContent = "Commonly used data types DO NOT include:";
    answerOptionButton1.textContent = "alerts";
    answerOptionButton2.textContent = "strings";
    answerOptionButton3.textContent = "booleans";
    answerOptionButton4.textContent = "numbers";
    var q1a1 = answerOptionButton1;
    var q1a2 = answerOptionButton2;
    var q1a3 = answerOptionButton3;
    var q1a4 = answerOptionButton4;
    q1a1.addEventListener("click", function() {
        body.appendChild(answerCorrectConfirmationEl);
        currentScoreEl.textContent = "Your Score: " + (currentScore += 5);
        quizEl.remove();
        
        
        questionTwo();
    })
    q1a2.addEventListener("click", function() {
        body.appendChild(answerIncorrectConfirmationEl);
        timeRemaining -= 5;
        quizEl.remove();
        
        
        questionTwo();
    })
    q1a3.addEventListener("click", function() {
        body.appendChild(answerIncorrectConfirmationEl);
        timeRemaining -= 5;
        quizEl.remove();
        
        
        questionTwo();
    })
    q1a4.addEventListener("click", function() {
        body.appendChild(answerIncorrectConfirmationEl);
        timeRemaining -= 5;
        quizEl.remove();
        
        
        questionTwo();
    })
};

function questionTwo() {
    
    answerOptions2Li.append(q2a1, q2a2, q2a3, q2a4);
    quiz2El.append(question2El);
    quiz2El.append(answerOptions2Li);
    question2El.textContent = "Arrays in JavaScript can be used to store ______.";
    q2a1.textContent = "numbers and strings";
    q2a2.textContent = "other arrays";
    q2a3.textContent = "booleans";
    q2a4.textContent = "all of the above";
    
    
    body.appendChild(quiz2El);
    q2a1.addEventListener("click", function() {
        body.appendChild(answerIncorrectConfirmationEl);
        timeRemaining -= 5;
        
        quiz2El.remove();
        
        questionThree();
    })
    q2a2.addEventListener("click", function() {
        body.appendChild(answerIncorrectConfirmationEl);
        timeRemaining -= 5;
        quiz2El.remove();
        
        questionThree();
    })
    q2a3.addEventListener("click", function() {
        body.appendChild(answerIncorrectConfirmationEl);
        timeRemaining -= 5;
        quiz2El.remove();
        
        questionThree();
    })
    q2a4.addEventListener("click", function() {
        body.appendChild(answerCorrectConfirmationEl);
        currentScoreEl.textContent = "Your Score: " + (currentScore += 5);
        
        quiz2El.remove();
        
        questionThree();
        console.log(currentScore);
    })
};

function questionThree() {
    
    answerOptions3Li.append(q3a1, q3a2, q3a3, q3a4);
    quiz3El.append(question3El);
    quiz3El.append(answerOptions3Li);
    question3El.textContent = "The condition of an if/else statement is enclosed within _______.";
    q3a1.textContent = "curly brackets";
    q3a2.textContent = "parentheses";
    q3a3.textContent = "quotes";
    q3a4.textContent = "square brackets";
    body.appendChild(quiz3El);
    
    q3a1.addEventListener("click", function() {
        body.appendChild(answerIncorrectConfirmationEl);
        timeRemaining -= 5;
        quiz3El.remove();
        
        questionFour();
    })
    q3a2.addEventListener("click", function() {
        body.appendChild(answerCorrectConfirmationEl);
        currentScoreEl.textContent = "Your Score: " + (currentScore += 5);
        
        quiz3El.remove();
        
        questionFour();
    })
    q3a3.addEventListener("click", function() {
        body.appendChild(answerIncorrectConfirmationEl);
        timeRemaining -= 5;
        quiz3El.remove();
        
        questionFour();
    })
    q3a4.addEventListener("click", function() {
        body.appendChild(answerIncorrectConfirmationEl);
        timeRemaining -= 5;
        quiz3El.remove();
        
        questionFour();
    })
};

function questionFour() {
    
    answerOptions4Li.append(q4a1, q4a2, q4a3, q4a4);
    quiz4El.append(question4El);
    quiz4El.append(answerOptions4Li);
    question4El.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";
    q4a1.textContent = "JavaScript";
    q4a2.textContent = "terminal / bash";
    q4a3.textContent = "console.log";
    q4a4.textContent = "for loops";
    body.appendChild(quiz4El);
    
    q4a1.addEventListener("click", function() {
        body.appendChild(answerIncorrectConfirmationEl);
        timeRemaining -= 5;
        quiz4El.remove();
        
        questionFive();
    })
    q4a2.addEventListener("click", function() {
        body.appendChild(answerIncorrectConfirmationEl);
        timeRemaining -= 5;
        quiz4El.remove();
        
        questionFive();
    })
    q4a3.addEventListener("click", function() {
        body.appendChild(answerCorrectConfirmationEl);
        currentScoreEl.textContent = "Your Score: " + (currentScore += 5);
        
        quiz4El.remove();
        
        questionFive();
    })
    q4a4.addEventListener("click", function() {
        body.appendChild(answerIncorrectConfirmationEl);
        timeRemaining -= 5;
        quiz4El.remove();
        
        questionFive();
    })
};



function questionFive() {
    
    answerOptions5Li.append(q5a1, q5a2, q5a3, q5a4);
    quiz5El.append(question5El);
    quiz5El.append(answerOptions5Li);
    question5El.textContent = "String values must be enclosed within ______ when being assigned to variables.";
    q5a1.textContent = "quotes";
    q5a2.textContent = "commas";
    q5a3.textContent = "curly brackets";
    q5a4.textContent = "parentheses";
    body.appendChild(quiz5El);
    
    q5a1.addEventListener("click", function() {
        body.appendChild(answerCorrectConfirmationEl);
        currentScoreEl.textContent = "Your Score: " + (currentScore += 5 + timeRemaining);
        quiz5El.remove();
        timerEl.remove();
        quizOver();
        
        
    })
    q5a2.addEventListener("click", function() {
        body.appendChild(answerIncorrectConfirmationEl);
        timeRemaining -= 5;
        currentScoreEl.textContent = "Your Score: " + (currentScore += 5 + timeRemaining);
        quiz5El.remove();
        timerEl.remove();
        quizOver();
        
    })
    q5a3.addEventListener("click", function() {
        body.appendChild(answerIncorrectConfirmationEl);
        timeRemaining -= 5;
        currentScoreEl.textContent = "Your Score: " + (currentScore += 5 + timeRemaining);
        quiz5El.remove();
        timerEl.remove();
        quizOver();
        
    })
    q5a4.addEventListener("click", function() {
        body.appendChild(answerIncorrectConfirmationEl);
        timeRemaining -= 5;
        currentScoreEl.textContent = "Your Score: " + (currentScore += 5 + timeRemaining);
        quiz5El.remove();
        timerEl.remove();
        quizOver();
        
    })
};

// timer counts down from 60
function countdown() {
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
            quizEl.remove();
            quiz2El.remove();
            quiz3El.remove();
            quiz4El.remove();
            quiz5El.remove();
            quizOver();
        }
    }, 1000);
};

function quizOver() {
    timerEl.remove();
    if (currentScore > highScore) {
        var congratsMessage = document.createElement("h2");
        congratsMessage.textContent = "Congratulations! Your score of " + currentScore + " is now the high score!";
        body.appendChild(congratsMessage);
        
        localStorage.setItem("highScore", JSON.stringify(currentScore));
        currentScore = JSON.parse(currentScore);
        scoreLi1.textContent = currentScore;
    }
};