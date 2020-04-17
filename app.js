//Define variables for difficulty
const easyMode = document.querySelector('#easy'),
      medMode = document.querySelector('#med'),
      impossibleMode = document.querySelector('#impossible');
// Define variable for options
   let  rockBtn = document.querySelector('#rock'),
        paperBtn = document.querySelector('#paper'),
        scissorsBtn = document.querySelector('#scissors');
// Define variable for play again
const playAgain= document.querySelector('#playAgain');
//Define constant for paragraph input
const computerAnswer= document.querySelector('#answer');
// number of trials and game values

let gameValues = Math.floor(Math.random() * 3);
console.log(gameValues)
//To show RPS btns
easyMode.addEventListener('click', (e) => {
let trialsNumber = 10;
let RPSdiv = document.querySelector('#buttonDiv');
RPSdiv.style.display = "contents";
document.querySelector('#easyInstruct').style.display ="contents";
//to lose playing rock
rockBtn.addEventListener('click', (e)=> {
if(gameValues === 1){
let computerPlay= document.createElement('h3');
computerPlay.appendChild(document.createTextNode('COMPUTER plays PAPER, and beats you'));
computerPlay.style.color="red";
computerAnswer.appendChild(computerPlay);
trialsNumber-=1
if(trialsNumber===0){
let gameOver=document.createElement('h3');
gameOver.style.color="darkred";
gameOver.appendChild(document.createTextNode('Game Over, you lost'));
computerAnswer.appendChild(gameOver);
rockBtn.disabled=true;
paperBtn.disabled=true;
scissorsBtn.disabled = true;
document.querySelector('#playDiv').style.display="contents";
}
}
//to win playing rock
gameValues = Math.floor(Math.random() * 3);
if(gameValues === 2){
let computerPlay= document.createElement('h3');
computerPlay.appendChild(document.createTextNode('COMPUTER plays SCISSORS, and losses to you'));
computerPlay.style.color="green";
computerAnswer.appendChild(computerPlay);
trialsNumber-=1
if(trialsNumber===0){
let gameOver=document.createElement('h3');
gameOver.style.color="darkred";
gameOver.appendChild(document.createTextNode('Game Over, you lost'));
computerAnswer.appendChild(gameOver);
rockBtn.disabled=true;
paperBtn.disabled=true;
scissorsBtn.disabled = true;
document.querySelector('#playDiv').style.display="contents";
}

}
//to draw playing rock
gameValues = Math.floor(Math.random() * 3);
if(gameValues === 0){
let computerPlay= document.createElement('h3');
computerPlay.appendChild(document.createTextNode('COMPUTER plays ROCK, and draws with you'));
computerPlay.style.color="white";
computerAnswer.appendChild(computerPlay);
e.preventDefault();
trialsNumber-=1
if(trialsNumber===0){
let gameOver=document.createElement('h3');
gameOver.style.color="darkred";
gameOver.appendChild(document.createTextNode('Game Over, you lost'));
computerAnswer.appendChild(gameOver);
rockBtn.disabled=true;
paperBtn.disabled=true;
scissorsBtn.disabled = true;
document.querySelector('#playDiv').style.display="contents";
}
}
});
//to lose playing paper
gameValues = Math.floor(Math.random() * 3);
console.log(gameValues)
paperBtn.addEventListener('click', (e)=> {
if(gameValues === 2){
let computerPlay= document.createElement('h3');
computerPlay.appendChild(document.createTextNode('COMPUTER plays SCISSORS, and beats you'));
computerPlay.style.color="red";
computerAnswer.appendChild(computerPlay);
trialsNumber-=1
if(trialsNumber===0){
let gameOver=document.createElement('h3');
gameOver.style.color="darkred";
gameOver.appendChild(document.createTextNode('Game Over, you lost'));
computerAnswer.appendChild(gameOver);
rockBtn.disabled=true;
paperBtn.disabled=true;
scissorsBtn.disabled = true;
document.querySelector('#playDiv').style.display="contents";
}
}
//to win playing paper
gameValues = Math.floor(Math.random() * 3);
if(gameValues === 0){
let computerPlay= document.createElement('h3');
computerPlay.appendChild(document.createTextNode('COMPUTER plays ROCK, and losses to you'));
computerPlay.style.color="green";
computerAnswer.appendChild(computerPlay);
trialsNumber-=1
if(trialsNumber===0){
let gameOver=document.createElement('h3');
gameOver.style.color="darkred";
gameOver.appendChild(document.createTextNode('Game Over, you lost'));
computerAnswer.appendChild(gameOver);
rockBtn.disabled=true;
paperBtn.disabled=true;
scissorsBtn.disabled = true;
document.querySelector('#playDiv').style.display="contents";
}
}
//to draw playing rock
gameValues = Math.floor(Math.random() * 3);
if(gameValues === 1){
let computerPlay= document.createElement('h3');
computerPlay.appendChild(document.createTextNode('COMPUTER plays PAPER, and draws with you'));
computerPlay.style.color="white";
computerAnswer.appendChild(computerPlay);
e.preventDefault();
trialsNumber-=1
if(trialsNumber===0){
let gameOver=document.createElement('h3');
gameOver.style.color="darkred";
gameOver.appendChild(document.createTextNode('Game Over, you lost'));
computerAnswer.appendChild(gameOver);
rockBtn.disabled=true;
paperBtn.disabled=true;
scissorsBtn.disabled = true;
document.querySelector('#playDiv').style.display="contents";
}
}
});
//to lose playing scissors
gameValues = Math.floor(Math.random() * 3);
scissorsBtn.addEventListener('click', (e)=> {
if(gameValues === 0){
let computerPlay= document.createElement('h3');
computerPlay.appendChild(document.createTextNode('COMPUTER plays ROCK, and beats you'));
computerPlay.style.color="red";
computerAnswer.appendChild(computerPlay);
trialsNumber-=1
if(trialsNumber===0){
let gameOver=document.createElement('h3');
gameOver.style.color="darkred";
gameOver.appendChild(document.createTextNode('Game Over, you lost'));
computerAnswer.appendChild(gameOver);
rockBtn.disabled=true;
paperBtn.disabled=true;
scissorsBtn.disabled = true;
document.querySelector('#playDiv').style.display="contents";
}
}
//to win playing scissors
gameValues = Math.floor(Math.random() * 3);
if(gameValues === 1){
let computerPlay= document.createElement('h3');
computerPlay.appendChild(document.createTextNode('COMPUTER plays PAPER, and losses to you'));
computerPlay.style.color="green";
computerAnswer.appendChild(computerPlay);
trialsNumber-=1
if(trialsNumber===0){
let gameOver=document.createElement('h3');
gameOver.style.color="darkred";
gameOver.appendChild(document.createTextNode('Game Over, you lost'));
computerAnswer.appendChild(gameOver);
rockBtn.disabled=true;
paperBtn.disabled=true;
scissorsBtn.disabled = true;
document.querySelector('#playDiv').style.display="contents";
}
}
//to draw playing scissors
gameValues = Math.floor(Math.random() * 3);
if(gameValues === 2){
let computerPlay= document.createElement('h3');
computerPlay.appendChild(document.createTextNode('COMPUTER plays SCISSORS, and draws with you'));
computerPlay.style.color="white";
computerAnswer.appendChild(computerPlay);
trialsNumber-=1
if(trialsNumber===0){
let gameOver=document.createElement('h3');
gameOver.style.color="darkred";
gameOver.appendChild(document.createTextNode('Game Over, you lost'));
computerAnswer.appendChild(gameOver);
rockBtn.disabled=true;
paperBtn.disabled=true;
scissorsBtn.disabled = true;
document.querySelector('#playDiv').style.display="contents";
}
e.preventDefault();
}
});
});
medMode.addEventListener('click', (e) => {
let trialsNumber = 7;
let RPSdiv = document.querySelector('#buttonDiv');
RPSdiv.style.display = "contents";
document.querySelector('#medInstruct').style.display ="contents";
//to lose playing rock
rockBtn.addEventListener('click', (e)=> {
if(gameValues === 1){
let computerPlay= document.createElement('h3');
computerPlay.appendChild(document.createTextNode('COMPUTER plays PAPER, and beats you'));
computerPlay.style.color="red";
computerAnswer.appendChild(computerPlay);
trialsNumber-=1
if(trialsNumber===0){
let gameOver=document.createElement('h3');
gameOver.style.color="darkred";
gameOver.appendChild(document.createTextNode('Game Over, you lost'));
computerAnswer.appendChild(gameOver);
rockBtn.disabled=true;
paperBtn.disabled=true;
scissorsBtn.disabled = true;
document.querySelector('#playDiv').style.display="contents";
}
}
//to win playing rock
gameValues = Math.floor(Math.random() * 3);
if(gameValues === 2){
let computerPlay= document.createElement('h3');
computerPlay.appendChild(document.createTextNode('COMPUTER plays SCISSORS, and losses to you'));
computerPlay.style.color="green";
computerAnswer.appendChild(computerPlay);
trialsNumber-=1
if(trialsNumber===0){
let gameOver=document.createElement('h3');
gameOver.style.color="darkred";
gameOver.appendChild(document.createTextNode('Game Over, you lost'));
computerAnswer.appendChild(gameOver);
rockBtn.disabled=true;
paperBtn.disabled=true;
scissorsBtn.disabled = true;
document.querySelector('#playDiv').style.display="contents";
}

}
//to draw playing rock
gameValues = Math.floor(Math.random() * 3);
if(gameValues === 0){
let computerPlay= document.createElement('h3');
computerPlay.appendChild(document.createTextNode('COMPUTER plays ROCK, and draws with you'));
computerPlay.style.color="white";
computerAnswer.appendChild(computerPlay);
e.preventDefault();
trialsNumber-=1
if(trialsNumber===0){
let gameOver=document.createElement('h3');
gameOver.style.color="darkred";
gameOver.appendChild(document.createTextNode('Game Over, you lost'));
computerAnswer.appendChild(gameOver);
rockBtn.disabled=true;
paperBtn.disabled=true;
scissorsBtn.disabled = true;
document.querySelector('#playDiv').style.display="contents";
}
}
});
//to lose playing paper
gameValues = Math.floor(Math.random() * 3);
console.log(gameValues)
paperBtn.addEventListener('click', (e)=> {
if(gameValues === 2){
let computerPlay= document.createElement('h3');
computerPlay.appendChild(document.createTextNode('COMPUTER plays SCISSORS, and beats you'));
computerPlay.style.color="red";
computerAnswer.appendChild(computerPlay);
trialsNumber-=1
if(trialsNumber===0){
let gameOver=document.createElement('h3');
gameOver.style.color="darkred";
gameOver.appendChild(document.createTextNode('Game Over, you lost'));
computerAnswer.appendChild(gameOver);
rockBtn.disabled=true;
paperBtn.disabled=true;
scissorsBtn.disabled = true;
document.querySelector('#playDiv').style.display="contents";
}
}
//to win playing paper
gameValues = Math.floor(Math.random() * 3);
if(gameValues === 0){
let computerPlay= document.createElement('h3');
computerPlay.appendChild(document.createTextNode('COMPUTER plays ROCK, and losses to you'));
computerPlay.style.color="green";
computerAnswer.appendChild(computerPlay);
trialsNumber-=1
if(trialsNumber===0){
let gameOver=document.createElement('h3');
gameOver.style.color="darkred";
gameOver.appendChild(document.createTextNode('Game Over, you lost'));
computerAnswer.appendChild(gameOver);
rockBtn.disabled=true;
paperBtn.disabled=true;
scissorsBtn.disabled = true;
document.querySelector('#playDiv').style.display="contents";
}
}
//to draw playing rock
gameValues = Math.floor(Math.random() * 3);
if(gameValues === 1){
let computerPlay= document.createElement('h3');
computerPlay.appendChild(document.createTextNode('COMPUTER plays PAPER, and draws with you'));
computerPlay.style.color="white";
computerAnswer.appendChild(computerPlay);
e.preventDefault();
trialsNumber-=1
if(trialsNumber===0){
let gameOver=document.createElement('h3');
gameOver.style.color="darkred";
gameOver.appendChild(document.createTextNode('Game Over, you lost'));
computerAnswer.appendChild(gameOver);
rockBtn.disabled=true;
paperBtn.disabled=true;
scissorsBtn.disabled = true;
document.querySelector('#playDiv').style.display="contents";
}
}
});
//to lose playing scissors
gameValues = Math.floor(Math.random() * 3);
scissorsBtn.addEventListener('click', (e)=> {
if(gameValues === 0){
let computerPlay= document.createElement('h3');
computerPlay.appendChild(document.createTextNode('COMPUTER plays ROCK, and beats you'));
computerPlay.style.color="red";
computerAnswer.appendChild(computerPlay);
trialsNumber-=1
if(trialsNumber===0){
let gameOver=document.createElement('h3');
gameOver.style.color="darkred";
gameOver.appendChild(document.createTextNode('Game Over, you lost'));
computerAnswer.appendChild(gameOver);
rockBtn.disabled=true;
paperBtn.disabled=true;
scissorsBtn.disabled = true;
document.querySelector('#playDiv').style.display="contents";
}
}
//to win playing scissors
gameValues = Math.floor(Math.random() * 3);
if(gameValues === 1){
let computerPlay= document.createElement('h3');
computerPlay.appendChild(document.createTextNode('COMPUTER plays PAPER, and losses to you'));
computerPlay.style.color="green";
computerAnswer.appendChild(computerPlay);
trialsNumber-=1
if(trialsNumber===0){
let gameOver=document.createElement('h3');
gameOver.style.color="darkred";
gameOver.appendChild(document.createTextNode('Game Over, you lost'));
computerAnswer.appendChild(gameOver);
rockBtn.disabled=true;
paperBtn.disabled=true;
scissorsBtn.disabled = true;
document.querySelector('#playDiv').style.display="contents";
}
}
//to draw playing scissors
gameValues = Math.floor(Math.random() * 3);
if(gameValues === 2){
let computerPlay= document.createElement('h3');
computerPlay.appendChild(document.createTextNode('COMPUTER plays SCISSORS, and draws with you'));
computerPlay.style.color="white";
computerAnswer.appendChild(computerPlay);
trialsNumber-=1
if(trialsNumber===0){
let gameOver=document.createElement('h3');
gameOver.style.color="darkred";
gameOver.appendChild(document.createTextNode('Game Over, you lost'));
computerAnswer.appendChild(gameOver);
rockBtn.disabled=true;
paperBtn.disabled=true;
scissorsBtn.disabled = true;
document.querySelector('#playDiv').style.display="contents";
}
e.preventDefault();
}
});
});
impossibleMode.addEventListener('click', (e) => {
let trialsNumber = 3;
let RPSdiv = document.querySelector('#buttonDiv');
RPSdiv.style.display = "contents";
document.querySelector('#impInstruct').style.display ="contents";
//to lose playing rock
rockBtn.addEventListener('click', (e)=> {
if(gameValues === 1){
let computerPlay= document.createElement('h3');
computerPlay.appendChild(document.createTextNode('COMPUTER plays PAPER, and beats you'));
computerPlay.style.color="red";
computerAnswer.appendChild(computerPlay);
trialsNumber-=1
if(trialsNumber===0){
let gameOver=document.createElement('h3');
gameOver.style.color="darkred";
gameOver.appendChild(document.createTextNode('Game Over, you lost'));
computerAnswer.appendChild(gameOver);
rockBtn.disabled=true;
paperBtn.disabled=true;
scissorsBtn.disabled = true;
document.querySelector('#playDiv').style.display="contents";
}
}
//to win playing rock
gameValues = Math.floor(Math.random() * 3);
if(gameValues === 2){
let computerPlay= document.createElement('h3');
computerPlay.appendChild(document.createTextNode('COMPUTER plays SCISSORS, and losses to you'));
computerPlay.style.color="green";
computerAnswer.appendChild(computerPlay);
trialsNumber-=1
if(trialsNumber===0){
let gameOver=document.createElement('h3');
gameOver.style.color="darkred";
gameOver.appendChild(document.createTextNode('Game Over, you lost'));
computerAnswer.appendChild(gameOver);
rockBtn.disabled=true;
paperBtn.disabled=true;
scissorsBtn.disabled = true;
document.querySelector('#playDiv').style.display="contents";
}

}
//to draw playing rock
gameValues = Math.floor(Math.random() * 3);
if(gameValues === 0){
let computerPlay= document.createElement('h3');
computerPlay.appendChild(document.createTextNode('COMPUTER plays ROCK, and draws with you'));
computerPlay.style.color="white";
computerAnswer.appendChild(computerPlay);
e.preventDefault();
trialsNumber-=1
if(trialsNumber===0){
let gameOver=document.createElement('h3');
gameOver.style.color="darkred";
gameOver.appendChild(document.createTextNode('Game Over, you lost'));
computerAnswer.appendChild(gameOver);
rockBtn.disabled=true;
paperBtn.disabled=true;
scissorsBtn.disabled = true;
document.querySelector('#playDiv').style.display="contents";
}
}
});
//to lose playing paper
gameValues = Math.floor(Math.random() * 3);
console.log(gameValues)
paperBtn.addEventListener('click', (e)=> {
if(gameValues === 2){
let computerPlay= document.createElement('h3');
computerPlay.appendChild(document.createTextNode('COMPUTER plays SCISSORS, and beats you'));
computerPlay.style.color="red";
computerAnswer.appendChild(computerPlay);
trialsNumber-=1
if(trialsNumber===0){
let gameOver=document.createElement('h3');
gameOver.style.color="darkred";
gameOver.appendChild(document.createTextNode('Game Over, you lost'));
computerAnswer.appendChild(gameOver);
rockBtn.disabled=true;
paperBtn.disabled=true;
scissorsBtn.disabled = true;
document.querySelector('#playDiv').style.display="contents";
}
}
//to win playing paper
gameValues = Math.floor(Math.random() * 3);
if(gameValues === 0){
let computerPlay= document.createElement('h3');
computerPlay.appendChild(document.createTextNode('COMPUTER plays ROCK, and losses to you'));
computerPlay.style.color="green";
computerAnswer.appendChild(computerPlay);
trialsNumber-=1
if(trialsNumber===0){
let gameOver=document.createElement('h3');
gameOver.style.color="darkred";
gameOver.appendChild(document.createTextNode('Game Over, you lost'));
computerAnswer.appendChild(gameOver);
rockBtn.disabled=true;
paperBtn.disabled=true;
scissorsBtn.disabled = true;
document.querySelector('#playDiv').style.display="contents";
}
}
//to draw playing rock
gameValues = Math.floor(Math.random() * 3);
if(gameValues === 1){
let computerPlay= document.createElement('h3');
computerPlay.appendChild(document.createTextNode('COMPUTER plays PAPER, and draws with you'));
computerPlay.style.color="white";
computerAnswer.appendChild(computerPlay);
e.preventDefault();
trialsNumber-=1
if(trialsNumber===0){
let gameOver=document.createElement('h3');
gameOver.style.color="darkred";
gameOver.appendChild(document.createTextNode('Game Over, you lost'));
computerAnswer.appendChild(gameOver);
rockBtn.disabled=true;
paperBtn.disabled=true;
scissorsBtn.disabled = true;
document.querySelector('#playDiv').style.display="contents";
}
}
});
//to lose playing scissors
gameValues = Math.floor(Math.random() * 3);
scissorsBtn.addEventListener('click', (e)=> {
if(gameValues === 0){
let computerPlay= document.createElement('h3');
computerPlay.appendChild(document.createTextNode('COMPUTER plays ROCK, and beats you'));
computerPlay.style.color="red";
computerAnswer.appendChild(computerPlay);
trialsNumber-=1
if(trialsNumber===0){
let gameOver=document.createElement('h3');
gameOver.style.color="darkred";
gameOver.appendChild(document.createTextNode('Game Over, you lost'));
computerAnswer.appendChild(gameOver);
rockBtn.disabled=true;
paperBtn.disabled=true;
scissorsBtn.disabled = true;
document.querySelector('#playDiv').style.display="contents";
}
}
//to win playing scissors
gameValues = Math.floor(Math.random() * 3);
if(gameValues === 1){
let computerPlay= document.createElement('h3');
computerPlay.appendChild(document.createTextNode('COMPUTER plays PAPER, and losses to you'));
computerPlay.style.color="green";
computerAnswer.appendChild(computerPlay);
trialsNumber-=1
if(trialsNumber===0){
let gameOver=document.createElement('h3');
gameOver.style.color="darkred";
gameOver.appendChild(document.createTextNode('Game Over, you lost'));
computerAnswer.appendChild(gameOver);
rockBtn.disabled=true;
paperBtn.disabled=true;
scissorsBtn.disabled = true;
document.querySelector('#playDiv').style.display="contents";
}
}
//to draw playing scissors
gameValues = Math.floor(Math.random() * 3);
if(gameValues === 2){
let computerPlay= document.createElement('h3');
computerPlay.appendChild(document.createTextNode('COMPUTER plays SCISSORS, and draws with you'));
computerPlay.style.color="white";
computerAnswer.appendChild(computerPlay);
trialsNumber-=1
if(trialsNumber===0){
let gameOver=document.createElement('h3');
gameOver.style.color="darkred";
gameOver.appendChild(document.createTextNode('Game Over, you lost'));
computerAnswer.appendChild(gameOver);
rockBtn.disabled=true;
paperBtn.disabled=true;
scissorsBtn.disabled = true;
document.querySelector('#playDiv').style.display="contents";
}
e.preventDefault();
}
});
});
playAgain.addEventListener('click', (e)=> {
windows.location.reload();

})