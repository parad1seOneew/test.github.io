clicker = document.querySelector(".clicker");
clicker.onclick = inc;

var score = 0;
var levelNum = 0;
levels = [0,100,1000,10000,100000,1000000,10000000];
plus = 1;

if (localStorage.length!=0){
    score = Number(localStorage.getItem('score'));
    levelNum = Number(localStorage.getItem('level'));
}
else{
    localStorage.setItem('score', '0');
    localStorage.setItem('level', '0');
};  
scoreText = document.querySelector(".now-score");
scoreText.textContent = String(score);
levelNum = Number(localStorage.getItem('level'));
lvltxt = document.querySelector(".lvl-txt");


level = document.querySelector(".progress-bar-point");
lvltxt.textContent = String(levelNum+1)+ "/" +String(levels.length-1);

function inc(){
    score+=plus;
    level.style.width = String(((score/levels[levelNum+1])*100))+"%";  
    localStorage.setItem('score', String(score));
    
    scoreText.textContent = String(score);
    lvltxt.textContent = String(levelNum+1)+ "/" +String(levels.length-1);

    if (score==levels[levelNum+1]){
        levelNum++;
        localStorage.setItem('level', String(levelNum));
        level.style.width = "0%";
        plus++;
    }
}