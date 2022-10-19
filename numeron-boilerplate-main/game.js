// Iteration 2: Generate 2 random number and display it on the screen

 var r1 = Math.floor(Math.random()*100);
document.getElementById("number1").innerHTML=r1;
 var r2 = Math.floor(Math.random()*100);
document.getElementById("number2").innerHTML=r2;

// Iteration 3: Make the options button functional
const greater = document.getElementById("greater-than");
const less = document.getElementById("lesser-than");
const equal = document.getElementById("equal-to");

var score = 0;

greater.onclick=()=>{
    if(r1>r2){
    score++;
    console.log(score);
    resetTime(timerID);
    }
    else
    location.href=("./gameover.html");

     r1 = Math.floor(Math.random()*100);
    document.getElementById("number1").innerHTML=r1;
     r2 = Math.floor(Math.random()*100);
    document.getElementById("number2").innerHTML=r2;


}
less.onclick=()=>{
    if(r1<r2){
    score++;
    console.log(score);
    resetTime(timerID);
    }
    else 
    location.href=("./gameover.html");

     r1 = Math.floor(Math.random()*100);
    document.getElementById("number1").innerHTML=r1;
     r2 = Math.floor(Math.random()*100);
    document.getElementById("number2").innerHTML=r2;

}
equal.onclick=()=>{
    if(r1===r2){
    score++;
    console.log(score);
    resetTime(timerID);
    }
    else
    location.href=("./gameover.html");

     r1 = Math.floor(Math.random()*100);
    document.getElementById("number1").innerHTML=r1;
     r2 = Math.floor(Math.random()*100);
    document.getElementById("number2").innerHTML=r2;
}

// Iteration 4: Build a timer for the game
var time = 5;
var timer = document.getElementById("timer");
 var timerID;

function startTimer(){
     time = 5;
    timer.innerHTML= time;
    timerID=setInterval(()=>{
        time--;
        time.innerHTML= time;
        if(time===0){
        location.href=("./gameover.html");
        }
        
    },1000);
    localStorage.setItem("Score",score)
}

function resetTime(intervalID){
clearInterval(intervalID);
startTimer();
}
startTimer();

// Iteration 5

let score= localStorage.getItem("score");
var score_box = document.getElementById("score_box");
var playAgainButton = document.getElementById("play-again");
scorebox.innerHTML= score;

playAgainButton.onclick=(e)=>{
    location.href= "./game.html";
}


