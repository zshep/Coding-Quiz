// list of variable needed for various stuff
var startBtn = document.getElementById("start_button");
var optBtn1 = document.querySelector("#option1");
var optBtn2 = document.querySelector("#option2");
var optBtn3 = document.querySelector("#option3");
var optBtn4 = document.querySelector("#option4");
var quest = document.querySelector("#question")

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
        //Displays question -grab question and insert into
       
        currentQ = 0;
        console.log(currentQ);
        // timerBegins()
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

        //  set to count down each second

        // set to lose a chunk of time for wrong answers
        return;
}

//To do: Make function for Game over
        //set text for when time ran out
        //set text for when all questions are answered
        //User enter in initials and posts score
        //save score into local.storage
        //Show List of high scores (retrieve from local storag

// to do: make function for play again 




// Action Code:

        //listen for click to start game
startBtn.addEventListener("click", game);
optBtn1.addEventListener("click", checkAnswer);
optBtn2.addEventListener("click", checkAnswer);
optBtn3.addEventListener("click", checkAnswer);
optBtn4.addEventListener("click", checkAnswer);