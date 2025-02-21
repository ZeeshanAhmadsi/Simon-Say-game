let gameseq= [];
let userseq= [];
let gamestart = false;
let level = 0;
let highestscore=0;
let btns = ["yellow","green","red","pink"];
let h2 = document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(gamestart == false){
        console.log("game started");
        gamestart = true;
        levelup();
    }
});
function gameflash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
    btn.classList.remove("gameflash");
    },250)
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
function levelup(){
    userseq =[];
    level++;
    h2.innerText = `LEVEL ${level}`;

    let randidx = Math.floor(Math.random()*4);
    let randcolor = btns[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameflash(randbtn);
}

function matchAns(idx){
// console.log(`level is ${level}`);
// let idx = level-1;
// console.log(idx);
if(userseq[idx] === gameseq[idx]){
    if(userseq.length == gameseq.length){
        setTimeout(levelup,1000);
    }
}else{
    h2.innerHTML = `Game Over! Your Score is <b>${level}<b> <br> Press any key to start.`;
    highestScore(level);
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
    document.querySelector("body").style.backgroundColor = "white";  
    },150)
    reset();
}
}
function highestScore(){
    let h3 = document.querySelector("h3");
    if(level>highestscore){
        highestscore=level;
        h3.innerHTML = `Highest Score : ${level}`;
    }
    
}
function buttonpress(){
    let btn = this;
    userflash(btn);
    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    matchAns(userseq.length-1);
}
let allbtn = document.querySelectorAll(".button");
for(btn of allbtn){
    btn.addEventListener("click",buttonpress);
}

function reset(){
    gamestart = false;
    gameseq = [];
    userseq = [];
    level = 0 ;
}