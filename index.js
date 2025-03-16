document.addEventListener("DOMContentLoaded",()=>{

    let table = document.getElementById('ping_pong_table');
    let ball = document.getElementById('ball');
    let handle = document.getElementById('handle1');
    let handle2=document.getElementById('handle2');


    //initiall co-ord of ball
    let ballx=350;
    let bally=250;
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


    let paddley1=250;
    let paddley2=250;
    let py=15;
    handle.style.top=`${paddley1}px`;
    handle2.style.top=`${paddley2}px`;

    document.addEventListener("keydown",(event)=>{
        event.preventDefault();
        if(event.keyCode==83 && paddley1<table.offsetHeight-handle.offsetHeight){
            //DOWN
            paddley1+=py;
        }
        else if(event.keyCode==87 && paddley1>0){
            //UP
            paddley1+=(-1)*py;    
        }
        handle.style.top=`${paddley1}px`;
    });

    document.addEventListener("keydown",(event)=>{
        event.preventDefault();
         if(event.keyCode==40 && paddley2<table.offsetHeight-handle2.offsetHeight){
            paddley2+=py;
        }
        else if(event.keyCode==38 && paddley2>0){
            paddley2+=(-1)*py;
        }
        handle2.style.top=`${paddley2}px`;
    });

})