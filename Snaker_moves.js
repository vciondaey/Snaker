// ---------------- line snake ---------------------
function MakeLineSnake() {
	// body...
	xLine = x,	yLine = y
	point = {xLine,yLine}

	// newPoint = getRandomXY(xLine,yLine)		//regular
	if(mouseIN) newPoint =  getRandomXYWithMouse(xLine,yLine); // with mouse
	else newPoint = getRandomXY(xLine,yLine)
	
	xLine = newPoint[0], yLine = newPoint[1]
	ctx.lineTo(xLine,yLine)
	ctx.stroke()
	x = xLine, y = yLine
	// console.log("here")
}


// --------------- random x and y ------------------------
function getRandomXY(x,y) {
	// body...
	const point = [x,y]
	i = Math.floor(Math.random()*widthAdder)
	j = Math.floor(Math.random()*heightAdder)
	plusMinus = Math.floor(Math.random()*2)
	if((plusMinus && point[0]<canvasWidth )|| point[0]<0)	point[0]+=i;
	else			point[0]-=i;
	plusMinus = Math.floor(Math.random()*2)
	if((plusMinus && point[1]<canvasHeight )|| point[1]<0)	point[1]+=j;
	else			point[1]-=j;
	return point
}


// --------------- circle Snake -----------------------

function MakeCircleSnake() {
	// body...
	xQuadraticCurve = x, yQuadraticCurve = y
	newPoint = getRandomXY(xQuadraticCurve,yQuadraticCurve)
	xQuadraticCurve = newPoint[0], yQuadraticCurve = newPoint[1] 

	xCircle = xQuadraticCurve,	yCircle = yQuadraticCurve
	if(mouseIN) newPoint =  getRandomXYWithMouse(xCircle,yCircle);	//with mouse
	else newPoint = getRandomXY(xCircle,yCircle)

	xCircle = newPoint[0], yCircle = newPoint[1]

	ctx.quadraticCurveTo(xQuadraticCurve, yQuadraticCurve, xCircle, yCircle)
	x = xCircle,	y = yCircle
	ctx.stroke()
}

// function continuousLineWidthChange() {
// 	// body...
// 	plusMinus = Math.floor(Math.random()*2)
// 	if((plusMinus && curLineWidth<maxLineWidth) || curLineWidth<2)
// 		curLineWidth += Math.floor(Math.random()*2);
// 	else curLineWidth -= Math.floor(Math.random()*2);
// 	ctx.lineWidth = curLineWidth

// }

// line and circle snake call
function makeLineAndCircleSnake() {
	// body...
	ctx.beginPath()
	ctx.moveTo(x,y)
	// ctx.lineWidth=Math.random()*maxLineWidth
	ctx.lineWidth=Math.random()*maxLineWidth + 50
	// ctx.lineWidth= 5

	plusMinus = Math.floor(Math.random()*2)
	if(plusMinus)	MakeLineSnake();
	else MakeCircleSnake()
}


// ---------------- spiral snake ------------------------
let up=true , curRadius = 1 
yCircle = y , xCircle = x
function makeSpiralSnake() {
	// body... root3* a/2
	ctx.beginPath()
	ctx.moveTo(x,y)
	if(up){
		xQuadraticCurve = xCircle - curRadius, yQuadraticCurve = yCircle - 2.6*curRadius
		xCircle = xQuadraticCurve - curRadius;
	}else {
		xQuadraticCurve = xCircle + curRadius, yQuadraticCurve = yCircle + 2.6*curRadius
	 	xCircle = xQuadraticCurve + curRadius;
	}
	ctx.quadraticCurveTo(xQuadraticCurve, yQuadraticCurve, xCircle, yCircle)
	ctx.stroke()
	curRadius++
	up = !up
	if(curRadius>(canvasWidth)){
		curRadius = 0;
		xCircle = canvasWidth/2;
		yCircle = canvasHeight/2
	}
	x = xCircle, y = yCircle
}
// (Math.sqrt(3)*(curRadius/2));



// ---------Make random shape and keep making that shape-----------------
/*
Choose random number of points 1 to 6 (from a single stationary point[stpoint](x,y) that will change)
now define random poinst as x & y values(can be negative) that will be added to the stpoint
increase random point by a constantly increasing multiplier
make all the strokes
then choose new stpoint and add mouse part as well
*/
let numberOfCorners , cornerPoints = [] , curCornerPoints = [] , xCorner , yCorner , curMultiplier = 1
let maxCornerLengthFromCentre = 6
function makeRandomShape() {
	// body...
	numberOfCorners = 3 + Math.floor(Math.random()*7)  			// 3 + whatever you desire
	// numberOfCorners = 4
	cornerPoints 	= []
	curCornerPoints	= []
	for(let i=0 ; i<numberOfCorners ; i++){
		plusMinus = Math.floor(Math.random()*2)
		if(plusMinus)	xCorner = Math.floor(Math.random()*maxCornerLengthFromCentre);
		else 			xCorner = 0 - Math.floor(Math.random()*maxCornerLengthFromCentre);

		plusMinus = Math.floor(Math.random()*2)
		if(plusMinus)	yCorner = Math.floor(Math.random()*maxCornerLengthFromCentre);
		else 			yCorner = 0 - Math.floor(Math.random()*maxCornerLengthFromCentre);

		plusMinus = Math.floor(Math.random()*2)
		cornerPoints.push([xCorner,yCorner])
		curCornerPoints.push([xCorner,yCorner,plusMinus])
	}
	curCornerPoints[numberOfCorners-1][2] = 0
	console.log(cornerPoints,numberOfCorners)
	console.log(curCornerPoints)

}
makeRandomShape()
// makeCircle()

function makeCircle(argument) {
	// body...
	// numberOfCorners = 3 + Math.floor(Math.random()*7)  			// 3 + whatever you desire
	let a = 2 , b = -2
	// cornerPoints.push([b,0])
	cornerPoints.push([b,a])
	// cornerPoints.push([0,a])
	cornerPoints.push([a,a])
	// cornerPoints.push([a,0])
	cornerPoints.push([a,b])
	// cornerPoints.push([0,b])
	cornerPoints.push([b,b])
	// curCornerPoints.push([b,0,a])
	curCornerPoints.push([b,a,0])
	// curCornerPoints.push([0,a,a])
	curCornerPoints.push([a,a,0])
	// curCornerPoints.push([a,0,a])
	curCornerPoints.push([a,b,0])
	// curCornerPoints.push([0,b,a])
	curCornerPoints.push([b,b,0])
	// curCornerPoints[numberOfCorners-a][2] = 0
	numberOfCorners = cornerPoints.length
	console.log(cornerPoints,numberOfCorners)
	console.log(curCornerPoints)
}

function drawRandomShape() {
	// body...
	if(mouseIN){
		x = mouseX
		y = mouseY
	}else{
		plusMinus = Math.floor(Math.random()*2)
		if( (plusMinus && x<canvasWidth) || x<0)	x += Math.floor(Math.random()*widthAdder);
		else 			x -= Math.floor(Math.random()*widthAdder);

		plusMinus = Math.floor(Math.random()*2)
		if( (plusMinus && y<canvasHeight) || y<0)	y += Math.floor(Math.random()*heightAdder);
		else 			y -= Math.floor(Math.random()*heightAdder);
	}

	for( let i = 0 ; i<numberOfCorners ; i++){
		curCornerPoints[i][0] = x + cornerPoints[i][0]*curMultiplier
		curCornerPoints[i][1] = y + cornerPoints[i][1]*curMultiplier
	}
	ctx.beginPath()
	ctx.moveTo(curCornerPoints[0][0],curCornerPoints[0][1])
	ctx.lineWidth = startLineWidth + curMultiplier/25
	for( let i=0 ; i<numberOfCorners ; i++){
		if(i === (numberOfCorners - 1) )
			ctx.lineTo(curCornerPoints[0][0],curCornerPoints[0][1]);
		else{
			if(curCornerPoints[i][2]){
				if(i === numberOfCorners-2)
					ctx.quadraticCurveTo(curCornerPoints[i+1][0],curCornerPoints[(i++)+1][1],
						curCornerPoints[0][0],curCornerPoints[0][1]);
				else
					ctx.quadraticCurveTo(curCornerPoints[i+1][0],curCornerPoints[i+1][1],
						curCornerPoints[i+2][0],curCornerPoints[(i++)+2][1]);
			}else ctx.lineTo(curCornerPoints[i+1][0],curCornerPoints[i+1][1]);
			// console.log(i);
		}
		ctx.stroke()
	}

		curMultiplier += 1
		if(curMultiplier>300){
			curMultiplier = 1
			// ctx.lineWidth = 2;
		}
}