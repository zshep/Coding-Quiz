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

var high_scores = [];


// make array filled with objects for Questions and Answers 
var questions = [
        {
                prompt: "Inside the HTML document, where do you place your JavaScript code?",
                options: ["Inside the <script> element", "Inside the <link> element", "In the <footer> element", "Inside the <head> element"],
                ans: "Inside the <script> element"
        },
        {
                prompt: "What operator is used to assign a value to a declared variable?",
                options: ["Equal sign (=)", "Colon (:)", "Double-equal (==)", "Question mark (?)"],
                ans: "Equal sign (=)"
        },
        {
                prompt: "What are the six primitive data types in JavaScript?",
                options: ["string, number, boolean, bigInt, symbol, undefined", "sentence, int, truthy, bigInt, symbol, undefined", "sentence, float, data, bigInt, symbol, undefined", "string, num, falsy, bigInt, symbol, undefined"],
                ans: "string, number, boolean, bigInt, symbol, undefined"

        }
]
// variable to keep track of current Q
var currentQ;

//To do: Make function to play game
function game() {
        console.log("the game has started");

        //Rest all the things
        // change display for welcome to hidden and quiz to visible
        welcomeCon.style.display = "none";
        quizCon.style.display = "block";
        headerCon.style.display = "block";
        scoresCon.style.display = "none";
        //Sets currentQ to first question in array of questions      
        currentQ = 0;
        counter= 0;
        sL = 30;
        //starts timer
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
        //checking outputs that I want
        console.log(`user: ${userInitials}`);
        console.log(`count:${counter}`);
        let winner = {name:userInitials, score:counter}

        high_scores.push(winner);

        // create li element
        
        for (var i =0; i < high_scores.length; i++){
                scoreList = document.createElement("li");
                scoreList.textContent =`${high_scores[i].name} ${high_scores[i].score}`;
                
                
        }

        leaderBoard.appendChild(scoreList); // add to leaderboard
        var highscoreobject ={ leaderBoard: high_scores};
       // console.log((highscoreobject));
        //console.log(JSON.stringify(highscoreobject));
        localStorage.setItem("scores", JSON.stringify(highscoreobject));
        //input goes away and clear the userInitials
        

        userInitials.value = "";
        initials.style.display = "none";

        // To Do: code to prevent empty Initials
        //if (userInitials = "") {
        //        window.alert("that is not a valid response");
        //        return;
        //} else {                  }
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
        var savedHighscores = localStorage.getItem("scores");
        var savedhighsObject = JSON.parse(savedHighscores);
        console.log(savedHighscores, savedhighsObject );
         //User enter in initials and submits score
        userInitials = "";
        text = document.createTextNode(counter);
        scoreNum.append(text);
                
       

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
submitBtn.addEventListener("click", submit_score);