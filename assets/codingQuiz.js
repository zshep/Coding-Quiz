// variables for buttons
var startBtn = document.getElementById("start_button");
var restartBtn = document.getElementById("restart_button");
var optBtn1 = document.querySelector("#option1");
var optBtn2 = document.querySelector("#option2");
var optBtn3 = document.querySelector("#option3");
var optBtn4 = document.querySelector("#option4");


//list of main containers
var quest = document.querySelector("#question");
var quizCon = document.querySelector(".Quiz");
var welcomeCon = document.querySelector(".Welcome");
var scoresCon = document.querySelector(".High-Scores");
var timeEl = document.querySelector(".timer");
var mainEl = document.querySelector(".main");
var headerCon = document.querySelector(".header");
var leaderBoard = document.querySelector(".leader-board");
var submitBtn = document.querySelector("#restart_button");
var initials = document.querySelector(".submit_score");
var results = document.querySelector("#results");
var scoreNum = document.querySelector(".scoreShown");



//local storage set up
var scores = localStorage.getItem("scores");
var timerInterval;
var counter= 0;
var sL;


//setting defualt hidden/visisble
welcomeCon.style.display = "block";
quizCon.style.display = "none";
scoresCon.style.display = "none";
headerCon.style.display = "none";

var high_scores = []


// make array filled with objects for Questions and Answers 
var questions = [
        {
                prompt: "How are you?",
                options: ["good", "bad", "terrible", "great"],
                ans: "good"
        },
        {
                prompt: "Where are you?",
                options: ["here", "there", "everywhere", "nowhere"],
                ans: "there"
        },
        {
                prompt: "When are you?",
                options: ["Now", "then", "Later", "IDK"],
                ans: "Later"

        }
]
// variable to keep track of current Q
var currentQ;

//To do: Make function to play game
function game() {
        console.log("the game has started");

        
        // change display for welcome to hidden and quiz to visible
        welcomeCon.style.display = "none";
        quizCon.style.display = "block";
        headerCon.style.display = "block";
        scoresCon.style.display = "none";

        //Sets currentQ to first question in array of questions      
        currentQ = 0;
        console.log(currentQ);
        
        sL = 30;

        timerInterval = setInterval(function () {

                sL--;
                timeEl.textContent = `Time Remaining:${sL}`;

                if (sL === 0) {
                        clearInterval(timerInterval);
                        console.log("The timer has ended");
                        gameOver();
                }
        }, 1000);
        timeEl.textContent = `Time Remaining:${sL}`;
        console.log("Timer has started");
        //displays question and answer choices
        nextQuestion();

        return;
}

function nextQuestion() {
        quest.textContent = questions[currentQ].prompt
        optBtn1.textContent = questions[currentQ].options[0]
        optBtn2.textContent = questions[currentQ].options[1]
        optBtn3.textContent = questions[currentQ].options[2]
        optBtn4.textContent = questions[currentQ].options[3]
}


//function to check if user answer is correct or incorrect
function checkAnswer(event) {
        var userPick = event.target.textContent;
        if (userPick == questions[currentQ].ans) {
                console.log("correct")
                counter++;
                // put in code to add to score
        } else {
                console.log("incorrect")
                sL-=10;
                //put in code to subtract time from timer
        }

        currentQ++
        if (currentQ < questions.length) {
                nextQuestion()
        }
        else {
                //    
                console.log("Out of questions");
                console.log("the game is over");
                gameOver();
        }
}


//when submit button clicks, take user input and put it to High scores
function submit_score() {
        // put value of user initials into variable
       
        var userInitials = document.querySelector("#initials").value;

        console.log(userInitials);
        // create li element
        scoreList = document.createElement("li");
        scoreList.textContent = userInitials;
        leaderBoard.appendChild(scoreList); // add to leaderboard

        //code to prevent empty Initials
        if (userInitials = "") {
                window.alert("that is not a valid response");
                return;
        } else {
                // create li element
                scoreList = document.createElement("li");
                scoreList.textContent = userInitials;
                leaderBoard.appendChild(scoreList); // add to leaderboard
                localStorage.setItem("scores", userInitials);
                //input goes away and clear the userInitials
                
                userInitials.value = "";
                initials.style.display = "none";
                
        }
}


// function for Game over - give initials, play again
function gameOver() {

        clearInterval(timerInterval);

        //change visibility for the containers
        welcomeCon.style.display = "none";
        quizCon.style.display = "none";
        scoresCon.style.display = "block";
        headerCon.style.display = "none";
        initials.style.display = "block";
        userInitials = "";
        text = document.createTextNode(counter);
        console.log(text)
        scoreNum.append(text);
        //set text for when time ran out
        //set text for when all questions are answered


        // var to grab users initials


        //User enter in initials and submits score



}


//save score into local.storage
//Show List of high scores (retrieve from local storag








// Action Code:

//listen for click to start game
startBtn.addEventListener("click", game);
restartBtn.addEventListener("click", game);
optBtn1.addEventListener("click", checkAnswer);
optBtn2.addEventListener("click", checkAnswer);
optBtn3.addEventListener("click", checkAnswer);
optBtn4.addEventListener("click", checkAnswer);

// add listen event for the input
submitBtn.addEventListener("click", submit_score());