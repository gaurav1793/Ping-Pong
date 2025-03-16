document.addEventListener("DOMContentLoaded",()=>{

    let table = document.getElementById('ping_pong_table');
    let ball = document.getElementById('ball');

    //initiall co-ord of ball
    let ballx=10;
    let bally=30;
    ball.style.left=`${ballx}px`;
    ball.style.top=`${bally}px`;

    //displacemnt
    let dx=2;
    let dy=2;

    setInterval(function exec(){
        ballx+=dx;
        bally+=dy;

        ball.style.left=`${ballx}px`;
        ball.style.top=`${bally}px`;

        if(ballx>table.offsetWidth-ball.offsetWidth || ballx<=0)dx*=-1;
        if(bally>table.offsetHeight-ball.offsetHeight || bally<=0)dy*=-1;

    },1);






})