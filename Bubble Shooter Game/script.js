const bubble_container = document.querySelector('.bubble_container');
const timerdisplay = document.querySelector('#timer');
const targetdisplay = document.querySelector('#target');
const scoredisplay = document.querySelector('#score');

let lefttime = 10;
let score = 0;
let bubble_count = 84;

const originaltime = 10 ;

function createbubble() {
    bubble_container.innerHTML=''
    for (let i = 1; i <= bubble_count; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add("bubble");
        bubble.textContent = Math.floor(Math.random() * 10);
        bubble_container.appendChild(bubble);
    }
}


function generateTarget() {
    const target = Math.floor(Math.random() * 10);
    targetdisplay.textContent = target;
}

function StartTimer() {

    const timeinterval = setInterval(() => {
        
        lefttime--;
        timerdisplay.textContent=lefttime;
        if (lefttime === 0) {
            clearInterval(timeinterval);
            bubble_container.innerHTML = `
            <div class="append_container">
               <div class="game_over">Game Over</div>
               <div class="final_score">Your Score: ${score}</div>
               <button class="reset_btn" onclick="resetGame()">Restart</button>       
            </div>
            `
        }
    }, 1000)


}

function resetGame(){
lefttime=originaltime;
score=0;
timerdisplay.textContent=originaltime;
scoredisplay.textContent=0;
startGame();
}

function startGame(){
createbubble()
generateTarget();
StartTimer();
}

bubble_container.addEventListener('click',(event)=>{
    
    if(event.target.classList.contains('bubble')){
        
        if(event.target.textContent === targetdisplay.textContent){
            score+=10;
        }
        else{
            score -=10;
        }
        scoredisplay.textContent=score;
        generateTarget();
        createbubble();
    }
})

createbubble();
generateTarget();
StartTimer();


