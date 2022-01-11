// const button.red=document.getElementById("red");
// const button.green=document.getElementById("green");
// const button.blue=document.getElementById("blue");
// const button.yellow=document.getElementById("yellow");
// const highScore=document.getElementById("high-score");
//

var button = {
  red = document.getElementById("red");
  green = document.getElementById("green");
  blue = document.getElementById("blue");
  yellow = document.getElementById("yellow");
  highScore = document.getElementById("high-score");
}
var tally=0,seqNum=1;
var arr=[];
button.red.addEventListener("click",clicked);
button.green.addEventListener("click",clicked);
button.blue.addEventListener("click",clicked);
button.yellow.addEventListener("click",clicked);
if(window.localStorage.highScore!==undefined){
    highScore.innerHTML="Your High Score: "+window.localStorage.highScore;
} else{
    highScore.innerHTML="Your High Score: 0";
}
document.getElementById("start").addEventListener("click",);

function checkMoveValidityOnClick(){
    if(this.id=="red"){
        if(arr[seqNum-1]==1){
            if(seqNum<tally){
                seqNum++;
            } else{
                setTimeout(()=>{runLevel(tally+1)},1000);
            }
        } else{
            alert("You failed on stage "+tally+"!!!!!!!!");
            updateHighScore();
        }
    } else if(this.id=="green"){
        if(arr[seqNum-1]==2){
            if(seqNum<tally){
                seqNum++;
            } else{
                setTimeout(()=>{runLevel(tally+1)},1000);
            }
        } else{
            alert("You failed on stage "+tally+"!!!!!!!!");
            updateHighScore();
        }
    } else if(this.id=="blue"){
        if(arr[seqNum-1]==3){
            if(seqNum<tally){
                seqNum++;
            } else{
                setTimeout(()=>{runLevel(tally+1)},1000);
            }
        } else{
            alert("You failed on stage "+tally+"!!!!!!!!");
            updateHighScore();
        }
    } else if(this.id=="yellow"){
        if(arr[seqNum-1]==4){
            if(seqNum<tally){
                seqNum++;
            } else{
                setTimeout(()=>{runLevel(tally+1)},1000);
            }
        } else{
            alert("You failed on stage "+tally+"!!!!!!!!");
            updateHighScore();
        }
    }
    updateHighScore();
}
function blinkButton(num){
    if(num==1){
        button.red.classList.add("litUp");
        setTimeout(()=>{button.red.classList.remove("litUp")},400);
    } else if(num==2){
        button.green.classList.add("litUp");
        setTimeout(()=>{button.green.classList.remove("litUp")},400);
    } else if(num==3){
        button.blue.classList.add("litUp")
        setTimeout(()=>{button.blue.classList.remove("litUp")},400);
    } else if(num==4){
        button.yellow.classList.add("litUp");
        setTimeout(()=>{button.yellow.classList.remove("litUp")},400);
    }
}
function runLevel(){
    var num;
    seqNum=1;
    tally++;
    arr.push(Math.floor(Math.random()*4)+1);
    console.log("Level sequence: "+arr);
    for(var i=0;i<tally;i++){
        num=arr[i];
        setTimeout(()=>{blinkButton(num)},400);
    }
}
function updateHighScore(){
    if((tally==1&&window.localStorage.highScore==undefined)||(tally>window.localStorage.highScore)){
        window.localStorage.highScore=tally;
        highScore.innerHTML="Your High Score: "+window.localStorage.highScore;
    }
}
function beginGame(){
    tally=0;
    arr=[];
    runLevel();
}
