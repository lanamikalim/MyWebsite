const buttonR=document.getElementById("red");
const buttonG=document.getElementById("green");
const buttonB=document.getElementById("blue");
const buttonY=document.getElementById("yellow");
const highScore=document.getElementById("high-score");
var tally=0,seqNum=1;
var arr=[];
buttonR.addEventListener("click",clicked);
buttonG.addEventListener("click",clicked);
buttonB.addEventListener("click",clicked);
buttonY.addEventListener("click",clicked);
if(window.localStorage.highScore!==undefined){
    highScore.innerHTML="Your High Score: "+window.localStorage.highScore;
} else{
    highScore.innerHTML="Your High Score: 0";
}
document.getElementById("start").addEventListener("click",begin);
function clicked(){
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
        buttonR.classList.add("litUp");
        setTimeout(()=>{buttonR.classList.remove("litUp")},400);
    } else if(num==2){
        buttonG.classList.add("litUp");
        setTimeout(()=>{buttonG.classList.remove("litUp")},400);
    } else if(num==3){
        buttonB.classList.add("litUp")
        setTimeout(()=>{buttonB.classList.remove("litUp")},400);
    } else if(num==4){
        buttonY.classList.add("litUp");
        setTimeout(()=>{buttonY.classList.remove("litUp")},400);
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
function begin(){
    tally=0;
    arr=[];
    runLevel();
}