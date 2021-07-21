const box = document.querySelectorAll('.box');
const mole = document.querySelectorAll('.mole');
// const time = document.querySelector('#time');
// let score = document.querySelector('#score');
let score = 0;
let time=60;

function generate() {
    box.forEach(index => {
        index.classList.remove('mole');
        index.classList.add('hole');
    })
    let r = box[Math.floor(Math.random() * 9)];
    r.classList.remove('hole');
    r.classList.add('mole');
    hit = r.id;
}


box.forEach(index => {
    index.addEventListener('click', () => {
        if (index.id === hit) {
            score++;
            document.getElementById('score').innerText = `${score}`;
            console.log("hello");
        }
    })
})


function move() {
    let timer = null;
    timer = setInterval(generate, 1000);
    setInterval(timeout,1000);
}

move();

function timeout(){
    document.getElementById('time').innerText=`${time}`;
    time--;
    if(time===0){
        alert("Your Score is : "+score);
        score=0;
        document.getElementById('score').innerText = `${score}`;
        time=60;
    }
}