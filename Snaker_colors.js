function completelyRandom(argument) {
	// body...
	redValue 	= Math.floor(Math.random()*256)
	greenValue 	= Math.floor(Math.random()*256)
	blueValue 	= Math.floor(Math.random()*256)

	ctx.strokeStyle = `rgb(${redValue}, ${greenValue}, ${blueValue})`
	// ctx.strokeStyle = 'rgb( ' + redValue  	+ ',' + greenValue 	+ ',' + blueValue  	+ ')'
}

function increasingValues() {
	// body...
	ctx.strokeStyle = `rgb(${redValue}, ${greenValue}, ${blueValue})` 			//increasing color values
	if(blueValue === 255)		redValue=greenValue=blueValue=0;
	else if(greenValue === 255)	blueValue++;
	else if(redValue === 255)	greenValue++;
	else 						redValue++;
}

function ytColours() {
	// body...
	plusMinus = Math.floor(Math.random()*3)
	if(plusMinus === 0) 		redValue = 255 , blueValue = 255 , greenValue = 255; 
	else if(plusMinus === 1)	redValue = 40  , greenValue = 40 , blueValue = 40;
	else						redValue = 255 , greenValue = 0  , blueValue = 0;
	ctx.strokeStyle = `rgb(${redValue}, ${greenValue}, ${blueValue})` 			//increasing color values
}


function instaColours() {
	// body...

	plusMinus = Math.floor(Math.random()*2)
	if(instaColourValue === 9)			instaColourValue--;		//Consistent
	else if(instaColourValue === 0)	instaColourValue++;
	else{
		if(plusMinus)	instaColourValue++;
		else  			instaColourValue--;
	}

	// instaColourValue = Math.floor(Math.random()*10)				//Random


	switch( instaColourValue ){
		case 0 :
			redValue = 64   , greenValue =  93  , blueValue = 230 ;
			break;
		case 1 :
			redValue = 88  , greenValue =  81  , blueValue = 216 ;
			break;
		case 2 :
			redValue = 131 , greenValue =  58  , blueValue = 180 ;
			break;
		case 3 :
			redValue = 193 , greenValue =  53  , blueValue = 132 ;
			break;
		case 4 :
			redValue = 225 , greenValue =  48  , blueValue = 108 ;
			break;
		case 5 :
			redValue = 253 , greenValue =  29  , blueValue = 29 ;
			break;
		case 6 :
			redValue = 245  , greenValue =  96  , blueValue = 64 ;
			break;
		case 7 :
			redValue = 247 , greenValue =  119 , blueValue = 55 ;
			break;
		case 8 :
			redValue = 252 , greenValue =  175 , blueValue = 69 ;
			break;
		case 9 :
			redValue = 255 , greenValue =  220 , blueValue = 128 ;
			break;
		default :
			redValue = 255 , greenValue = 255 , blueValue = 255;
	}
	ctx.strokeStyle = `rgb(${redValue}, ${greenValue}, ${blueValue})` 			//increasing color values
}


// allColours()
function getStrokeStyle() {
	// body...
	ctx.strokeStyle = `rgb(${redValue}, ${greenValue}, ${blueValue})` 			//increasing color values
	// ctx.strokeStyle = 'rgb( ' + 			//increasing color values
	// redValue 	+ ',' + 
	// greenValue 	+ ',' + 
	// blueValue	+ ')'
	if(blueValue >= 255){
		blueValue = 0 
		if(greenValue >= 255){
			greenValue = 0
			if(redValue >= 255)	redValue = 0;
			else redValue+=redColorChangingValue;
		}else greenValue+=greenColorChangingValue;
	}else blueValue+=blueColorChangingValue;
}
