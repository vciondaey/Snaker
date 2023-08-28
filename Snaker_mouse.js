// mouse detection mechanism
// comment this script in html to remove this function

let rect = canvas.getBoundingClientRect()
window.addEventListener('mousemove',function (e) {
	// body...
	mouseX = e.clientX - rect.left
	mouseY = e.clientY - rect.top
	if(mouseX>=0 && mouseX<=canvasWidth &&
		mouseY>=0 && mouseY<=canvasHeight)	mouseIN = true;
	else mouseIN = false;
	// console.log(mouseX,mouseY)
})

function getRandomXYWithMouse(x,y) {
	// body...
	const point = [x,y]
	// console.log(cur++)
	// ctx.lineWidth=Math.random()*5	
	i = Math.floor(Math.random()*widthAdder)
	j = Math.floor(Math.random()*heightAdder)
	if(mouseX<point[0])	point[0]-=i;
	else point[0]+=i
	if(mouseY<point[1])	point[1]-=j;
	else point[1]+=j

	return point
}