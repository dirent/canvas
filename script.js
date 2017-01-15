// Set up!
var gameLoop;
var framesPerSecond = 10;
var a_canvas = document.getElementById("canvas");
var context = a_canvas.getContext("2d");
var count = 0;

run();


function run() {

    console.log( "Loading content..." );
    loadContent();
    console.log( "Initializing game..." );
    initialize();

    console.log( "Starting game loop..." );
    gameLoop = setInterval( doGameLoop, 1000/framesPerSecond );
    if( gameLoop ) {
        console.log( "Game is running with " + framesPerSecond + " frames per second..." );
    }
}


function loadContent() {
}


function initialize() {

    count = 0;

    document.addEventListener("keydown", function(event) {
        if( gameLoop  &&  event.keyCode == 81 /* 'q' */ ) {
            console.log( "Stopping game loop..." );
            clearInterval(gameLoop);
            gameLoop = null;
            console.log( "Game loop stopped." );
        }
    });
}


function doGameLoop() {

    update();
    draw();
}


function update() {

    count++;
}


function draw() {

    if( count % 50 == 0 ) {
        console.log( "Game time is " + (count/10) + " seconds." );
    }
}


