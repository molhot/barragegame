var canvas = document.getElementById("Canvas");
var ctx = canvas.getContext("2d");

/*自機の動かしに対してキーボードの上下右左を対応させる*/
var rightPressed=false;
var leftPressed=false;
var upPressed=false;
var downPressed=false;
/*ここまで*/

/*自機スタート地点*/
var x = canvas.width/2;
var y = canvas.height-30;
/*ここまで*/

/*発射物の発射場所指定*/
var x_bullet = x;
var y_bullet = y;
/*ここまで*/

/*発射物のy方向の動きの始点を決定する*/
var y_move = y_bullet;
/*ここまで*/

document.addEventListener("keydown",keyDownHandler,false);
document.addEventListener("keyup",keyUpHandle,false);

function keyDownHandler(e){
    if(e.key=="Right" || e.key=="ArrowRight"){
        rightPressed = true;
    }
    else if(e.key=="Left" || e.key=="ArrowLeft"){
        leftPressed = true;
    }
    else if(e.key=="Up" || e.key=="ArrowUp"){
        upPressed = true;
    }
    else if(e.key=="Down" || e.key=="ArrowDown"){
        downPressed = true;
    }
}

function keyUpHandle(e){
    if(e.key=="Right" || e.key == "ArrowRight"){
        rightPressed = false;
    }
    else if(e.key=="Left" || e.key=="ArrowLeft"){
        leftPressed = false;
    }
    else if(e.key=="Up" || e.key=="ArrowUp"){
        upPressed = false;
    }
    else if(e.key=="Down" || e.key=="ArrowDown"){
        downPressed = false;
    }
}

function bullet_move(){
    while(y_bullet > 0){
        y_bullet = y_bullet - 5;
    } 
}

/*gameの実行画面*/
function move(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    draw_CPU();
    draw_bulletball();

    /*bullet_move();*/

    if(rightPressed && x<canvas.width-20){
        x = x + 5;
        x_bullet = x;
        bullet_move();
    }
    else if(leftPressed && x>20){
        x = x - 5;
        x_bullet = x;
        bullet_move();
    }
    else if(upPressed && y>20){
        y = y - 5;
        y_bullet = y;
        y_move = y;
        bullet_move();
    }
    else if(downPressed && y<canvas.height-20){
        y = y + 5;
        y_bullet = y;
        y_move = y;
        bullet_move();
    }
}
/*ここまで*/
setInterval(move,10);