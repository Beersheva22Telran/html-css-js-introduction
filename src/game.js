//configuration
const nMoves = 3;
const questionAnswers = [["Many elements in one object", "array"]]
//elements
const inputElement = document.getElementById('input-id');
const goButtonElement = document.getElementById("go-id");
const squareElement = document.getElementById("square-id");
const resultMessageElement = document.getElementById("game-result");
const playAgainButtonElement = document.getElementById("play-again-id");
const wordSectionElement = document.getElementById("word-section-id");
let lettersElements;
//global variables
let count = 0;
//functions
function game() {
    const color = inputElement.value;
    
    squareElement.style.backgroundColor = color;
    count++;
    if (count == nMoves) {
        finishGame();
    }
    inputElement.value = '';
}
function startGame() {
    count = 0;
    goButtonElement.disabled = false;
    inputElement.readOnly = false;
    squareElement.style.backgroundColor = "white";
    resultMessageElement.innerHTML = '';
    playAgainButtonElement.hidden = true;
    const wordArray = /*questionAnswers[0][1].split('')*/ Array.from(questionAnswers[0][1]);
    const divsArray = wordArray.map(letter => 
        `<div class="letter">${letter}<div`);
        wordSectionElement.innerHTML=divsArray.join('');
        lettersElements = document.querySelectorAll(".letter");

}
function finishGame() {
    goButtonElement.disabled = true;
    inputElement.readOnly = true;
    playAgainButtonElement.hidden = false;
    resultMessageElement.innerHTML = "Congratulation, fgame is over"
}
//Actions
goButtonElement.addEventListener("click", game );
playAgainButtonElement.addEventListener("click", startGame )
startGame();
