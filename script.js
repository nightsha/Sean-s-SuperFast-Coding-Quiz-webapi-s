//selecting element on HTML with startbut class
// ## timer is a  and we are selecting the class 'timer'
var timer = document.querySelector(".timer")  
// ## startBtn is a identifier and we are selecting the class 'startBtn                          
var startBtn = document.querySelector(".startbut")
// ## answContainer is a identifier                     
var answContainer = document.querySelector(".answContainer")
var initialContainer = document.querySelector(".initialContainer")
// ## reserved words cannot be used as identifiers            
var submit = document.querySelector(".send-answ")
var container = document.querySelector(".container")
var initialInput = document.querySelector(".initialInput")                      
var timeInterval;
var timesLeft = 10
var score = 0
//uestionIndex begins at the first question and starts at 0 in the array 
var questionIndex = 0;
// there are three objects in this array
var questionArray = [

  {
    question: "What is 1 + 1?",
    choices: [1, 2, 3, 4],
    correctAnswer: 2
  },
  {
    question: "What is 1 + 2?",
    // how do you return the 2 in choices using console.log?
    choices: [4, 3, 2, 1],  
    correctAnswer: 3
  },
  {
    question: "What is a integer?",
    choices: ["(a) A fraction", "(b) A whole number", "(c) A home invasion", "(d) none of the above"],
    correctAnswer: "b"
  }
]
function startTimer() {
  //creat a timer interval here
  timer.textContent = timesLeft
  timeInterval = setInterval(function () {
    timesLeft--
    timer.textContent = timesLeft
    if (timesLeft <= 0) {
      gameOver()
    }
  }, 1000)
}
// console.log (questionArray)
console.log (questionArray[questionIndex])
// console.log (questionArray[questionIndex].question)
// console.log (questionArray[questionIndex].choices,)
console.log (questionArray[questionIndex,2] .correctAnswer)
function displayQuestions() {
  var questionh3 = document.querySelector(".questionh3")
  var answer1 = document.querySelector(".answer1")
  var answer2 = document.querySelector(".answer2")
  var answer3 = document.querySelector(".answer3")
  var answer4 = document.querySelector(".answer4")

  questionh3.textContent = questionArray[questionIndex].question
  answer1.textContent = questionArray[questionIndex].choices[0]
  answer2.textContent = questionArray[questionIndex].choices[1]
  answer3.textContent = questionArray[questionIndex].choices[2]
  answer4.textContent = questionArray[questionIndex].choices[3]

}
console.log(displayQuestions)
// var a = "1"
// var b =  1
function checkAnswer(event) {
  console.log(event.target.tagName)
  if (event.target.tagName === "BUTTON") {
    var selectAnswer = event.target.innerText
    console.log(selectAnswer)
    if (selectAnswer == questionArray[questionIndex].correctAnswer) {
      score += 5
    } else {
      //subtract time
      timesLeft -= 5
    }
// Is this saying if a question left continue if not game over 
    if (questionIndex < questionArray.length - 1) {
      questionIndex++
      displayQuestions()
    } else{
      gameOver()
    }
  }
}
function gameOver(){
  clearInterval(timeInterval)
  timesLeft = 0
  timer.textContent = timesLeft

  initialContainer.classList.remove("hide")
  container.classList.add("hide")
}
//create click event for startbutton
startBtn.addEventListener("click", function () {
  console.log("startBut click");
  startBtn.classList.add("hide")
  container.classList.remove("hide")
  startTimer()
  displayQuestions()
})
submit.addEventListener("click",function(){
var initialValue = initialInput.value
var localHighscore = JSON.parse(localStorage.getItem("highScore")) || []
var highScoreObj = {
  name:initialValue,
  highscore:score
}
localHighscore.push(highScoreObj)
localStorage.setItem("highScore", JSON.stringify(localHighscore))
location.href="./highscore.html"
})

//create click event for answer button
answContainer.addEventListener("click", checkAnswer)

// timer code copied from codepen.io
class Timer {
  constructor(root) {
    root.innerHTML = Timer.getHTML();

    this.el = {
      minutes: root.querySelector(".timer__part--minutes"),
      seconds: root.querySelector(".timer__part--seconds"),
      control: root.querySelector(".timer__btn--control"),
      reset: root.querySelector(".timer__btn--reset")
    };

    this.interval = null;
    this.remainingSeconds = 0;

    this.el.control.addEventListener("click", () => {
      if (this.interval === null) {
        this.start();
      } else {
        this.stop();
      }
    });

    this.el.reset.addEventListener("click", () => {
      const inputMinutes = prompt("Enter number of minutes:");

      if (inputMinutes < 60) {
        this.stop();
        this.remainingSeconds = inputMinutes * 60;
        this.updateInterfaceTime();
      }
    });
  }

  updateInterfaceTime() {
    const minutes = Math.floor(this.remainingSeconds / 60);
    const seconds = this.remainingSeconds % 60;

    this.el.minutes.textContent = minutes.toString().padStart(2, "0");
    this.el.seconds.textContent = seconds.toString().padStart(2, "0");
  }

  updateInterfaceControls() {
    if (this.interval === null) {
      this.el.control.innerHTML = `<span class="material-icons">play_arrow</span>`;
      this.el.control.classList.add("timer__btn--start");
      this.el.control.classList.remove("timer__btn--stop");
    } else {
      this.el.control.innerHTML = `<span class="material-icons">pause</span>`;
      this.el.control.classList.add("timer__btn--stop");
      this.el.control.classList.remove("timer__btn--start");
    }
  }

  start() {
    if (this.remainingSeconds === 0) return;

    this.interval = setInterval(() => {
      this.remainingSeconds--;
      this.updateInterfaceTime();

      if (this.remainingSeconds === 0) {
        this.stop();
      }
    }, 1000);

    this.updateInterfaceControls();
  }

  stop() {
    clearInterval(this.interval);

    this.interval = null;

    this.updateInterfaceControls();
  }

  static getHTML() {
    return `
              <span class="timer__part timer__part--minutes">00</span>
              <span class="timer__part">:</span>
              <span class="timer__part timer__part--seconds">00</span>
              <button type="button" class="timer__btn timer__btn--control timer__btn--start">
                  <span class="material-icons">play_arrow</span>
              </button>
              <button type="button" class="timer__btn timer__btn--reset">
                  <span class="material-icons">timer</span>
              </button>
          `;
  }
}

new Timer(
  document.querySelector(".timer")
);



