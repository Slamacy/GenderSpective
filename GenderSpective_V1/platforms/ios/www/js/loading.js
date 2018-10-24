var canvas;
var ctx;
var loading = new Image();
loading.src = "img/loading.png";

function sprite (options) {
				
    var that = {},
        frameIndex = 0,
        tickCount = 0,
        ticksPerFrame = 4,
        numberOfFrames = 12;
					
    that.context = options.context;
    that.width = options.width;
    that.height = options.height;
    that.image = options.image;
    that.render = function () {

        // Draw the animation
        that.context.drawImage(
          that.image,
           frameIndex * that.width,
           0,
           that.width,
           that.height,
           0,
           0,
           that.width ,
           that.height);
    };
    
    that.loop = options.loop;
     
    that.update = function () {

        tickCount += 1;
			
        if (tickCount > ticksPerFrame) {
            tickCount = 0;
           
        if (frameIndex < numberOfFrames-1) {	
                
                frameIndex += 1;
              
            }	
        else {
                frameIndex = 0;
                
            }
        }
    }; 
    return that;
}

var canvas = document.getElementById("loading");
canvas.width = innerWidth;
canvas.height = innerHeight;

var loading = sprite({
    context: canvas.getContext("2d"),
    width: 329,
    height: 585,
    image: loading
});


    function gameLoop () {

    window.requestAnimationFrame(gameLoop);
 
    loading.update();
    loading.render();
}


gameLoop();
