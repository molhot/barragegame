var canvas = document.getElementById("Canvas");
var ctx = canvas.getContext("2d");


var x_bullet = x;
var y_bullet = y;
/*自機からでる球の記載*/
function draw_bulletball(){
    ctx.beginPath();
    ctx.arc(x_bullet,y_bullet,3,0,Math.PI*2);
    ctx.fillStyle="red";
    ctx.fill();
    ctx.closePath();
}
/*ここまで*/