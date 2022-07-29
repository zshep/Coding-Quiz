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
]
var currentQ;

//To do: Make function to play game
function game() {
        // window.alert("HellO");
        console.log("the game has started");
        //Displays question -grab question and insert into
        // quest.
        currentQ = 0;
        nextQuestion()
        // timerBegins()
        //Displays Answer Choices
        return;
}


function nextQuestion(){
        quest.textContent = questions[currentQ].prompt
        optBtn1.textContent = questions[currentQ].options[0]
        optBtn2.textContent = questions[currentQ].options[1]
}
//TO do: make score counter

function checkAnswer(event) {
        var userPick = event.target.textContent;
        if(userPick == questions[currentQ].ans){
                console.log("right")
        } else {
                console.log("wrong")
        }

        currentQ++
        if(currentQ< questions.length) {
                nextQuestion()
        }
}
//To do: Make function to work time
        //  set to count down each second

        // set to lose a chunk of time for wrong answers


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