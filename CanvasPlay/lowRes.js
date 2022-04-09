function draw() {
    const canvas = document.querySelector('#canvas');

    if (!canvas.getContext) {
        return;
    }
    const ctx = canvas.getContext('2d');

    // turn off image smoothing - this will give the pixelated effect
    ctx.mozImageSmoothingEnabled = false;
    ctx.webkitImageSmoothingEnabled = false;
    ctx.imageSmoothingEnabled = false;

    // set line stroke and line width
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 1;

    // draw a red line
    ctx.beginPath();
    ctx.moveTo(10, 10);
    ctx.lineTo(90, 90);
    ctx.stroke();

ctx.fillStyle = "red";
    ctx.moveTo(0, 0);
    ctx.fillRect( 0, 0, 1, 1 );
    ctx.fillRect( 1, 1, 1, 1 );
    ctx.fillRect( 2, 2, 1, 1 );
    ctx.fillRect( 3, 3, 1, 1 );
    ctx.fillRect( 4, 4, 1, 1 );
    ctx.fillRect( 5, 5, 1, 1 );
    ctx.fillRect( 6, 6, 1, 1 );
    ctx.fillRect( 7, 7, 1, 1 );
    ctx.fillRect( 8, 8, 1, 1 );
    ctx.fillRect( 9, 9, 1, 1 );

}
draw();