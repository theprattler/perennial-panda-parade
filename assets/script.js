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
quizEl.append(questionEl);
quizEl.append(answerOptionsLi);

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
        }
    }, 1000);
};

function questionOne() {
    questionEl.textContent = "What is the first letter of the alphabet?";
    answerOptionButton1.textContent = "A";
    answerOptionButton2.textContent = "N";
    answerOptionButton3.textContent = "P";
    answerOptionButton4.textContent = "Z";
    var q1a1 = answerOptionButton1;
    var q1a2 = answerOptionButton2;
    var q1a3 = answerOptionButton3;
    var q1a4 = answerOptionButton4;
    q1a1.addEventListener("click", function() {
        body.appendChild(answerCorrectConfirmationEl);
        currentScoreEl.textContent = "Your Score: " + (currentScore += 5);
        quizEl.remove();
        
        //answerOptionButton1.remove();
        //answerOptionButton2.remove();
        //answerOptionButton3.remove();
        //answerOptionButton4.remove();
        questionTwo();
    })
    q1a2.addEventListener("click", function() {
        body.appendChild(answerIncorrectConfirmationEl);
        timeRemaining -= 5;
        quizEl.remove();
        
        //answerOptionButton1.remove();
        //answerOptionButton2.remove();
        //answerOptionButton3.remove();
        //answerOptionButton4.remove();
        questionTwo();
    })
    q1a3.addEventListener("click", function() {
        body.appendChild(answerIncorrectConfirmationEl);
        timeRemaining -= 5;
        quizEl.remove();
        
        //answerOptionButton1.remove();
        //answerOptionButton2.remove();
        //answerOptionButton3.remove();
        //answerOptionButton4.remove();
        questionTwo();
    })
    q1a4.addEventListener("click", function() {
        body.appendChild(answerIncorrectConfirmationEl);
        timeRemaining -= 5;
        quizEl.remove();
        
        //answerOptionButton1.remove();
        //answerOptionButton2.remove();
        //answerOptionButton3.remove();
        //answerOptionButton4.remove();
        questionTwo();
    })
};

function questionTwo() {
    var quiz2El = document.createElement("div");
    var question2El = document.createElement("h2");
    var answerOptions2Li = document.createElement("ul");
    var q2a1 = document.createElement("button");
    var q2a2 = document.createElement("button");
    var q2a3 = document.createElement("button");
    var q2a4 = document.createElement("button");
    answerOptions2Li.append(q2a1, q2a2, q2a3, q2a4);
    quiz2El.append(question2El);
    quiz2El.append(answerOptions2Li);
    question2El.textContent = "What is the last letter of the alphabet?";
    q2a1.textContent = "A";
    q2a2.textContent = "N";
    q2a3.textContent = "P";
    q2a4.textContent = "Z";
    
    
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
    var quiz3El = document.createElement("div");
    var question3El = document.createElement("h2");
    var answerOptions3Li = document.createElement("ul");
    var q3a1 = document.createElement("button");
    var q3a2 = document.createElement("button");
    var q3a3 = document.createElement("button");
    var q3a4 = document.createElement("button");
    answerOptions3Li.append(q3a1, q3a2, q3a3, q3a4);
    quiz3El.append(question3El);
    quiz3El.append(answerOptions3Li);
    question3El.textContent = "How old are you?";
    q3a1.textContent = "38";
    q3a2.textContent = "42";
    q3a3.textContent = "58";
    q3a4.textContent = "17";
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
    var quiz4El = document.createElement("div");
    var question4El = document.createElement("h2");
    var answerOptions4Li = document.createElement("ul");
    var q4a1 = document.createElement("button");
    var q4a2 = document.createElement("button");
    var q4a3 = document.createElement("button");
    var q4a4 = document.createElement("button");
    answerOptions4Li.append(q4a1, q4a2, q4a3, q4a4);
    quiz4El.append(question4El);
    quiz4El.append(answerOptions4Li);
    question4El.textContent = "What is the capital of Nebraska?";
    q4a1.textContent = "Omaha";
    q4a2.textContent = "Grand Island";
    q4a3.textContent = "Lincoln";
    q4a4.textContent = "Brunswick";
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
    var quiz5El = document.createElement("div");
    var question5El = document.createElement("h2");
    var answerOptions5Li = document.createElement("ul");
    var q5a1 = document.createElement("button");
    var q5a2 = document.createElement("button");
    var q5a3 = document.createElement("button");
    var q5a4 = document.createElement("button");
    answerOptions5Li.append(q5a1, q5a2, q5a3, q5a4);
    quiz5El.append(question5El);
    quiz5El.append(answerOptions5Li);
    question5El.textContent = "What is the first letter of the alphabet?";
    q5a1.textContent = "A";
    q5a2.textContent = "N";
    q5a3.textContent = "P";
    q5a4.textContent = "Z";
    body.appendChild(quiz5El);
    
    q5a1.addEventListener("click", function() {
        body.appendChild(answerCorrectConfirmationEl);
        currentScoreEl.textContent = "Your Score: " + (currentScore += 5);
        quiz5El.remove();
        
    })
    q5a2.addEventListener("click", function() {
        body.appendChild(answerIncorrectConfirmationEl);
        timeRemaining -= 5;
        quiz5El.remove();
        
    })
    q5a3.addEventListener("click", function() {
        body.appendChild(answerIncorrectConfirmationEl);
        timeRemaining -= 5;
        quiz5El.remove();
        
    })
    q5a4.addEventListener("click", function() {
        body.appendChild(answerIncorrectConfirmationEl);
        timeRemaining -= 5;
        quiz5El.remove();
        
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




