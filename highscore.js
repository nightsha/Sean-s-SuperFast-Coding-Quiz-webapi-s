

var highScoreBoard = document.querySelector(".highScoreBoard")
var localHighscore = JSON.parse(localStorage.getItem("highScore")) || []
function diplayScore(){
    for (var i = 0; i<localHighscore.length;i ++){
        var li = document.createElement("li")
        li.innerText = localHighscore[i].name + " - " + localHighscore[i].highscore
highScoreBoard.appendChild(li)

    }
}
diplayScore()