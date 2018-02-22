var numSquare = 3;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#status");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#newGame");
var modebtn = document.querySelectorAll(".mode");

init();

function init() {
	setupModebtn();
	setupSquares();
	reset();
}

function setupModebtn() {
	for(var i = 0; i < modebtn.length; i++) {
		modebtn[i].addEventListener("click", function () {
			modebtn[0].classList.remove("selected");
			modebtn[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquare=3 : numSquare=6;
			reset();
		});
	}
}

function setupSquares() {
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];

		squares[i].addEventListener("click", function() {
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct";
				changeColor(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Again?";
			} else {
				messageDisplay.textContent = "Try Again";
				this.style.backgroundColor = "rgb(0, 0, 0)";
			}
		});
	}
}

function reset() {
	colors = generateRandomColor(numSquare);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	resetButton.textContent = "New Game";
	for(var i = 0 ; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
}

resetButton.addEventListener("click", function() {
	reset();
});

function changeColor(color) {
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	//Math.random give floating point x; 0 < x < 1
	var rand = Math.floor(Math.random() * colors.length);
	return colors[rand];
}

function generateRandomColor(num) {
	var arr = [];
	for(var i = 0 ; i < num; i++) {
		var r = Math.floor(Math.random()*256);
		var g = Math.floor(Math.random()*256);
		var b = Math.floor(Math.random()*256);
		arr.push("rgb(" + r + ", " + g + ", " + b + ")");
	}
	return arr;
}