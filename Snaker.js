const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let mul = 100
let canvasHeight = 9*mul, canvasWidth = 16*mul
// let canvasHeight = 720, canvasWidth = 1300
let heightAdder = canvasHeight/2, widthAdder	= canvasWidth/2
let curLineWidth = 1, maxLineWidth = (canvasHeight + canvasWidth)/70
let mouseIN = false, ballIsMoving = false
let x=canvasWidth/2,y=canvasHeight/2, point, newPoint
let i=0,j=0,	s=0 , mouseX = canvasWidth + 10 , mouseY = canvasHeight + 10
let xLine , yLine , xCircle, yCircle, xQuadraticCurve, yQuadraticCurve
let redValue = 0, greenValue = 0, blueValue = 0 , instaColourValue = Math.floor(Math.random()*10) , startLineWidth = 5
// let redColorChangingValue = 20 , greenColorChangingValue = 51 , blueColorChangingValue = 1
let redColorChangingValue = Math.floor(Math.random()*20) + 1 , greenColorChangingValue = Math.floor(Math.random()*20) + 1 , blueColorChangingValue = Math.floor(Math.random()*20) + 1
canvas.height = canvasHeight
canvas.width = canvasWidth 

ctx.lineWidth = startLineWidth

// call random function
function randomFunCall() {
	// body...

	// plusMinus = 0 		//0 curve 1 line

	// ctx.beginPath()
	// ctx.moveTo(x,y)
	// ctx.lineWidth=Math.random()*maxLineWidth
	
	// continuousLineWidthChange() 			//to link different brush strokes together 
											//UPDATE: doesn't look good since it's supposed to be abstract

	// completelyRandom()					//random
	// increasingValues()					//increasing color values
			
	ytColours()								// YT colours

	// instaColours() 							// Insta colours
	
	// getStrokeStyle()						//all colors

	// makeSpiralSnake()						//spiral snake

	drawRandomShape()						//random shapes with increasing size

	// makeLineAndCircleSnake()					// circle and line snake

	console.log(redValue,greenValue,blueValue)
}
let timerID  , timeInterval=10
// ballIsMoving = true
// timerID = setInterval(randomFunCall,timeInterval)
window.addEventListener('keydown',function (e) {
	// body...

	if(e.keyCode == 67){	//c
		ctx.clearRect(0,0,canvasWidth,canvasHeight)
		return;
	}else if(e.keyCode == 38){	//up
		curMultiplier++
		return;
	}else if(e.keyCode == 40){	//down
		curMultiplier--
		return;
	}else if(e.keyCode == 78){	//n
		makeRandomShape()
		return;
	}else if(e.keyCode == 82){	//r
		curMultiplier = 1
		return;
	}else if(e.keyCode == 90){	//z
		ctx.clearRect(0,0,canvasWidth,canvasHeight)
		makeRandomShape()
		curMultiplier = 1
		redValue = 0, greenValue = 0, blueValue = 0
		return;
	}else if(e.keyCode == 83){	//s 		[ for smallest size ]
		curMultiplier = 1;
		return;
	}
	if(e.keyCode != 80)	return;	//p!

	if(ballIsMoving)	clearInterval(timerID);
	else timerID = setInterval(randomFunCall,timeInterval)

	ballIsMoving = !ballIsMoving
})
