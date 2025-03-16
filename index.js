document.addEventListener("DOMContentLoaded",()=>{

    let table = document.getElementById('ping_pong_table');
    let ball = document.getElementById('ball');
    let handle = document.getElementById('handle');


    //initiall co-ord of ball
    let ballx=400;
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

        if(ballx<handle.offsetWidth && bally>=handle.offsetTop 
            && bally<=handle.offsetHeight+handle.offsetTop){
            dx*=-1;
        }

        if(ballx>table.offsetWidth-ball.offsetWidth || ballx<=0)dx*=-1;
        if(bally>table.offsetHeight-ball.offsetHeight || bally<=0)dy*=-1;

    },10);


    let paddley=250;
    let py=10;
    handle.style.top=`${paddley}px`;

    document.addEventListener("keydown",(event)=>{
        event.preventDefault();
        if(event.keyCode==40 && paddley<table.offsetHeight-handle.offsetHeight){
            //DOWN
            paddley+=py;
        }
        else if(event.keyCode==38 && paddley>0){
            //UP
            paddley+=(-1)*py;    
        }
        handle.style.top=`${paddley}px`;
    });

})