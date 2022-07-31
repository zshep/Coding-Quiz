// variables for buttons
var startBtn = document.getElementById("start_button");
var restartBtn =document.getElementById("restart_button");
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

//setting defualt hidden/visisble
welcomeCon.style.display = "block";
quizCon.style.display = "none";
scoresCon.style.display = "none";
headerCon.style.display = "none";

var secondsLeft = 10;

// make object for Questions and Answers 
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
        timeEl.content = `Time Remaining: + ${secondsLeft}`;
        // change display for welcome to hidden and quiz to visible
        welcomeCon.style.display = "none";
        quizCon.style.display = "block";
        headerCon.style.display = "block";

        //Sets currentQ to first question in array of questions      
        currentQ = 0;
        console.log(currentQ);
        timer();

        //displays question and answer choices
        nextQuestion();
        
        return;
}


function nextQuestion(){
        quest.textContent = questions[currentQ].prompt
        optBtn1.textContent = questions[currentQ].options[0]
        optBtn2.textContent = questions[currentQ].options[1]
        optBtn3.textContent = questions[currentQ].options[2]
        optBtn4.textContent = questions[currentQ].options[3]
}
//TO do: make score counter
function scoreCounter() {


        return;
}

//function to check if user answer is correct or incorrect
function checkAnswer(event) {
        var userPick = event.target.textContent;
        if(userPick == questions[currentQ].ans){
                console.log("right")
                // put in code to add to score
        } else {
                console.log("wrong")
                //put in code to subtract time from timer
        }

        currentQ++
        if(currentQ< questions.length) {
                nextQuestion()
        }
        else {
            //    
            console.log("Out of questions")
            console.log("the game is over")    
            gameOver()
        }
}
// function to work time
function timer() {
           
               
         console.log("Timer has started")
        
          var timerInterval = setInterval(function() {
           
            secondsLeft--;
            timeEl.textContent = `Time Remaining:${secondsLeft}`;;
        
            if(secondsLeft === 0) {
              clearInterval(timerInterval);
              console.log("The timer has ended");
              gameOver();
            }
          }, 1000);


        // set to lose a chunk of time for wrong answers

        }       
       


// function for Game over
function gameOver(){
        
        //change visibility for three containers
        welcomeCon.style.display = "none";
        quizCon.style.display = "none";
        scoresCon.style.display = "block";
        headerCon.style.display = "none";

        //set text for when time ran out
        //set text for when all questions are answered
       
        //User enter in initials and posts score
        //save score into local.storage
        //Show List of high scores (retrieve from local storag


}
// to do: make function for play again 




// Action Code:

        //listen for click to start game
startBtn.addEventListener("click", game);
restartBtn.addEventListener("click", game)
optBtn1.addEventListener("click", checkAnswer);
optBtn2.addEventListener("click", checkAnswer);
optBtn3.addEventListener("click", checkAnswer);
optBtn4.addEventListener("click", checkAnswer);

// add listen event for the input