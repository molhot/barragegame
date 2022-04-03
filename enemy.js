var canvas = document.getElementById("Canvas");
var ctx = canvas.getContext("2d");

/*自機の動かしに対してキーボードの上下右左を対応させる*/
var rightPressed=false;
var leftPressed=false;
/*ここまで*/

/* 自機の記載*/
function draw_CPU(){
    ctx.beginPath();
    ctx.arc(x,y,20,0,Math.PI*2);
    ctx.fillStyle="green";
    ctx.fill();
    ctx.closePath();
}
/*ここまで*/

/*自機からでる球の記載*/
function draw_bulletball(){
    ctx.beginPath();
    ctx.arc(x_bullet,y_bullet,3,0,Math.PI*2);
    ctx.fillStyle="red";
    ctx.fill();
    ctx.closePath();
}
/*ここまで*/

function draw_enemy1(){
    /*enemy1 三角形*/
    ctx.beginPath();
    ctx.strokeStyle = 'red';
    /*始点を表している（三角形の一番上）*/
    ctx.moveTo(50,50);
    /*左下*/
    ctx.lineTo(20,100);
    /*右下*/
    ctx.lineTo(80,100);
    ctx.closePath();
    ctx.stroke();
    /*ここまで*/
}
setInterval(draw,10)

function draw_enemy2(){
    /*enemy2 四角形*/
    ctx.beginPath();
    /*左2点が始点をきめて、そこから長さを指定している*/
    ctx.rect(60,60,30,30);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
    /*ここまで*/
}