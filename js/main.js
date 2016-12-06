//current time
var start = new Date().getTime();
// display a random color for each shape
function randomColor() {
	var letters = "0123456789ABCDEF".split("");

	var color = "#";

	for(var i = 0; i < 6; i++){
		color = color + letters[Math.floor(Math.random() * 16)]
	}
	return color
}


function makeShapeAppear() {
	var top = Math.random() * 400;

	var left = Math.random() * 400;

	var width = (Math.random() * 200) + 100;

	if(Math.random() > 0.5){
		document.getElementById("shape").style.borderRadius = "50%";
	} else {
		document.getElementById("shape").style.borderRadius = "0"
	}
	//random backgroundColor
	document.getElementById("shape").style.backgroundColor = randomColor();
	//random top margin
	document.getElementById("shape").style.top = top + "px";
	//random left margin
	document.getElementById("shape").style.left = left + "px";
	//random width size shape
	document.getElementById("shape").style.width = width + "px"
	//random height size shape
	document.getElementById("shape").style.height = width + "px"
	//display shape 
	document.getElementById("shape").style.display = "block";

	start = new Date().getTime();
}
//function to delay few second when the shape in click or when the page is refresh
function delay(){
	setTimeout(makeShapeAppear, Math.random() * 2000);
}

delay();
//function onclick 
document.getElementById("shape").onclick = function() {
	document.getElementById("shape").style.display = "none";
	var end = new Date().getTime();
	var timeTaken = (end - start) / 1000;
	document.getElementById("timeTaken").innerHTML = timeTaken + "s";
	delay();
}