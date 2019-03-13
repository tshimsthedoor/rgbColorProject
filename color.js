var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
resetButton.addEventListener("click", function(){
	//generaate all new colors
	colors = generateRandomColors(6);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorsDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(var i=0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor ="#232323";
});
//picked a color to display uppdate
colorDisplay.textContent = pickedColor;


for(var i = 0; i < squares.length; i++) {
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	// add click listener to squares
	squares[i].addEventListener("click", function(){
		// grad color at clicked square
		var clickedColor = this.style.backgroundColor;
		//  compare color to pickedColor
		if (clickedColor === pickedColor){
			messageDisplay.textContent = "Correct";
			resetButton.textContent = "Play Again";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try again";
		}
	});
}

function changeColors(color){
	//loop through all squares
	for(var i=0; i<squares.length; i++){
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
	 
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//repeat num times
	for (var i = 0; i < num; i++){
		// get random colors and push into array
		arr.push(randomColors());

	}
	//return that array
	return arr;
}

function randomColors(){
	//pick a red from 0-2555
	var r = Math.floor(Math.random() *256);
	//pick a green from 0-255
	var g = Math.floor(Math.random() *256);
	//pick a blue from 0-255
	var b = Math.floor(Math.random() *256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}