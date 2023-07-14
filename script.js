//selecting element on HTML with startbut class
var startBtn = document.querySelector(".startbut")
var questionIndex = 0;
var questionArray = [
    {
        question: "what is 1 + 1?",
        choices : [1,2,3,4],
        correctAnswer: 2
    },
    {
        question: "what is 1 + 2?",
        choices : [4,3,2,1],
        correctAnswer: 3
    }
]
function startTimer(){
    //creat a timer interval here
}

function displayQuestions(){
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

//create click event for startbutton
startBtn.addEventListener("click", function () {
    console.log("startBut click");
    startTimer()
    displayQuestions()
})
