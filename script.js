clicker = document.getElementById('log')
clicker.addEventListener('click',inc);
var score = 0;
if (localStorage.length!=0){
    score = Number(localStorage.getItem('score'))-1
}
else{
    localStorage.setItem('score', '0')
}
scoreText = document.getElementById('score');
scoreText.textContent = String(score);

function inc(){ 
    score = Number(localStorage.getItem('score'))
    console.log(score)

    localStorage.setItem('score', String(Number(score)+1))

    console.log(localStorage.getItem('score'),"+1 local st")

    scoreText.textContent = String(score);
}
