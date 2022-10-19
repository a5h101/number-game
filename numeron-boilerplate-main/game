// Iteration 2: Generate 2 random number and display it on the screen
var num1 = document.getElementById("number1");
var num2 = document.getElementById("number2");
var button = document.getElementById("buttons");

button.onclick = () =>{
    n1=Math.floor(Math.random()*100);
    n2=Math.floor(Math.random()*100);
    num1.innerHTML=n1
    num2.innerHTML=n2
}
// Iteration 3: Make the options button functional
let greater = document.getElementById("greater-than")
let smaller = document.getElementById("lesser-than")
let equal = document.getElementById("equal-to")

var score=0;

greater.onclick=() => {
if(n1>n2){
score++;
n1=Math.floor(Math.random()*100);
    n2=Math.floor(Math.random()*100);
    num1.innerHTML=n1
    num2.innerHTML=n2

    console.log(score);
    resetTime(timerId);
}
else{
     location.href="./gameover.html";
}

};
equal.onclick=() => {
if(n1<n2){
score++;
n1=Math.floor(Math.random()*100);
    n2=Math.floor(Math.random()*100);
    num1.innerHTML=n1
    num2.innerHTML=n2

    console.log(score);
    resetTime(timerId);
}
else{
    location.href="./gameover.html";
}

};
smaller.onclick=() => {
if(n1==n2){
score++;
n1=Math.floor(Math.random()*100);
    n2=Math.floor(Math.random()*100);
    num1.innerHTML=n1
    num2.innerHTML=n2

    console.log(score);
    resetTime(timerId);
}
else{
    location.href="./gameover.html";
}

};






// Iteration 4: Build a timer for the game
let timer = document.getElementById("timer");
var timerId;
var t=5;
  function startTimer(){
    timer.innerHTML = t;
    timerId = setInterval(() => {
        t--;
     if(t==0){
        location.href = "./gameover.html";
     }
     timer.innerHTML = t;
    },1000);
localStorage.setItem("score",score)
  }
  function resetTime(intervalId){
    clearInterval(intervalId);
    startTimer();
  }
  startTimer();