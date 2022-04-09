var canvas = document.getElementsByTagName("canvas");

canvas[1].onwheel = zoom;
var width, height;
let scale = 1;
width = canvas[0].width;
height = canvas[0].height;

const canvas_ctx = canvas[0].getContext("2d");
const grid_ctx = canvas[1].getContext("2d");

function zoom(event) {
    event.preventDefault();
    scale += event.deltaY * -0.01;
    // Restrict scale
    scale = Math.min(Math.max(1, scale), canvas[0].width<=100 ? 60 : 20);
    //Apply scale
    canvas[0].style.width = (canvas[0].width * scale) + "px";
    canvas[0].style.height = (canvas[0].height * scale) + "px";
    console.log((canvas[0].width * scale)+"px", canvas[0].height * scale);
    canvas[1].width = (canvas[0].width * scale);
    canvas[1].height = (canvas[0].height * scale);
    canvas[1].style.width = (canvas[0].width * scale) + "px";
    canvas[1].style.height = (canvas[0].height * scale) + "px";
    draw();
}

function draw() {
    const cnv = document.querySelector('#grid');

    if (!cnv.getContext) {
        return;
    }
    const ctx = cnv.getContext('2d');

    // turn off image smoothing - this will give the pixelated effect
    ctx.mozImageSmoothingEnabled = false;
    ctx.webkitImageSmoothingEnabled = false;
    ctx.imageSmoothingEnabled = false;

    // set line stroke and line width
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 0.1;
    ctx.mozDash = [1,1];

    let i=0;
    while(i<canvas[1].width) {
        i+=scale;
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas[1].height*scale);
        ctx.closePath();
        ctx.stroke(); 
    } i=0;
    while(i<canvas[1].width) {
        i+=scale;
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvas[1].width*scale, i);
        ctx.closePath();
        ctx.stroke(); 
    }

    console.log(scale);
}
draw();