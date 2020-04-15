const min = document.querySelector('#min'),
      max = document.querySelector('#max'),
      numberGuess = document.querySelector('#numberGuess'),
      minimumValue = 1,
      winningNumber=Math.floor(Math.random() * 100) + 1,
      maximumNumber= 100,
      guessBtn = document.querySelector('#submit');
      showAnswer = document.querySelector('#checkAnswer');
     let guessesLeft = 10;
   min.appendChild(document.createTextNode(minimumValue));
   max.appendChild(document.createTextNode(maximumNumber));
   
   loadEventListeners()
   
function loadEventListeners() {
numberGuess.addEventListener('keypress', (e) => {
if(e.keyCode=== 13){
if(numberGuess.value < minimumValue|| numberGuess.value > maximumNumber || numberGuess.value ==""){
alert(`Please give a proper Input from ${minimumValue} to ${maximumNumber} `)
numberGuess.value=""
}
if(numberGuess.value > winningNumber){
guessesLeft -=1;
if(guessesLeft === 0){
numberGuess.disabled = true;
const lifeOver = document.createElement('h1');
lifeOver.appendChild(document.createTextNode(`You LOST ${numberGuess.value} is wrong  and you are out of attempts`));
lifeOver.style.color="red";
numberGuess.style.borderColor="red";
showAnswer.appendChild(lifeOver);

}
const ifGreatLose = document.createElement('h1');
ifGreatLose.appendChild(document.createTextNode(`${numberGuess.value} is wrong and too big. Try Again!!`));
ifGreatLose.style.color="red";
numberGuess.style.borderColor="red";
showAnswer.appendChild(ifGreatLose);
numberGuess.value = "";
}
if(numberGuess.value < winningNumber || numberGuess.value !== ""){
guessesLeft -= 1;
if(guessesLeft === 0){
numberGuess.disabled = true;
const lifeOver = document.createElement('h1');
lifeOver.appendChild(document.createTextNode(`You LOST ${numberGuess.value} is wrong  and you are out of attempts`));
lifeOver.style.color="red";
numberGuess.style.borderColor="red";
showAnswer.appendChild(lifeOver);

}
const ifLessLose = document.createElement('h1');
ifLessLose.appendChild(document.createTextNode(`${numberGuess.value} is wrong and too small. Try Again!!`));
ifLessLose.style.color="red"
numberGuess.style.borderColor= "red"
showAnswer.appendChild(ifLessLose);
numberGuess.value = "";
}
if(numberGuess.value == winningNumber){
const ifWin = document.createElement('h1');
ifWin.appendChild(document.createTextNode(`${winningNumber} is correct. YOU WIN, Scholar!!!`));
showAnswer.appendChild(ifWin);
numberGuess.style.borderColor="darkgreen"
numberGuess.value = "";
numberGuess.disabled = true;



}
}
e.preventDefault();
})




guessBtn.addEventListener('click', (e) => {
if(numberGuess.value < minimumValue|| numberGuess.value > maximumNumber || numberGuess.value ==""){
alert(`Please give a proper Input from ${minimumValue} to ${maximumNumber} `)
numberGuess.value=""
}
if(numberGuess.value > winningNumber){
guessesLeft -=1;
if(guessesLeft === 0){
numberGuess.disabled = true;
const lifeOver = document.createElement('h1');
lifeOver.appendChild(document.createTextNode(`You LOST ${numberGuess.value} is wrong  and you are out of attempts`));
lifeOver.style.color="red";
numberGuess.style.borderColor="red";
showAnswer.appendChild(lifeOver);

}
const ifGreatLose = document.createElement('h1');
ifGreatLose.appendChild(document.createTextNode(`${numberGuess.value} is wrong and too big. Try Again!!`));
ifGreatLose.style.color="red";
numberGuess.style.borderColor="red";
showAnswer.appendChild(ifGreatLose);
guess = "";
}
if(numberGuess.value < winningNumber || numberGuess.value !== ""){
guessesLeft -= 1;
if(guessesLeft === 0){
numberGuess.disabled = true;
const lifeOver = document.createElement('h1');
lifeOver.appendChild(document.createTextNode(`You LOST ${numberGuess.value} is wrong  and you are out of attempts`));
lifeOver.style.color="red";
numberGuess.style.borderColor="red";
showAnswer.appendChild(lifeOver);

}
const ifLessLose = document.createElement('h1');
ifLessLose.appendChild(document.createTextNode(`${numberGuess.value} is wrong and too small. Try Again!!`));
ifLessLose.style.color="red"
numberGuess.style.borderColor= "red"
showAnswer.appendChild(ifLessLose);
numberGuess.value = "";
}
if(numberGuess.value == winningNumber){
const ifWin = document.createElement('h1');
ifWin.appendChild(document.createTextNode(`${winningNumber} is correct. YOU WIN, Scholar!!!`));
showAnswer.appendChild(ifWin);
numberGuess.style.borderColor="darkgreen"
numberGuess.value = "";
numberGuess.disabled = true;

}

e.preventDefault();
});

}


