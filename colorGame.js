//Original Code
// var numSquares = 6;
// var colors = generateRandomColors(numSquares);
// var squares = document.querySelectorAll('.square');
// var pickedColor = pickColor();
// var colorDisplay = document.querySelector('#colorDisplay');
// var messageDisplay = document.querySelector('#message');
// var h1 = document.querySelector('h1');
// var resetButton = document.querySelector('#reset');
// var easy = document.querySelector('#easy');
// var hard = document.querySelector('#hard');

// //change selected color to easy and remove from hard when clicked. Also hide three lower colors and reset three upper colors
// easy.addEventListener('click', function() {
// 	easy.classList.add('selected');
// 	hard.classList.remove('selected');
// 	numSquares = 3;
// 	//generate all new colors
// 	colors = generateRandomColors(numSquares);
// 	//pick a new random color
// 	pickedColor = pickColor();
//  h1.style.backgroundColor = 'steelblue';
// 	//change display color to match picked color
// 	colorDisplay.textContent = pickedColor;
// 	//change colors of squares
// 	for (i = 0; i < squares.length; i++) {
// 		if (colors[i]) {
// 			squares[i].style.backgroundColor = colors[i];
// 		} else {
// 			squares[i].style.display = 'none';
// 		}
// 	}
// });
// //change selected color to hard and remove from easy
// hard.addEventListener('click', function() {
// 	hard.classList.add('selected');
// 	easy.classList.remove('selected');
// 	numSquares = 6;
// 	//generate all new colors
// 	colors = generateRandomColors(numSquares);
// 	//pick a new random color
// 	pickedColor = pickColor();
//  h1.style.backgroundColor = 'steelblue';
// 	//change display color to match picked color
// 	colorDisplay.textContent = pickedColor;
// 	//change colors of squares
// 	for (i = 0; i < squares.length; i++) {
// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display = 'block';
// 	}
// });

// resetButton.addEventListener('click', function() {
// 	//generate all new colors
// 	colors = generateRandomColors(numSquares);
// 	//pick a new random color
// 	pickedColor = pickColor();
// 	//change display color to match picked color
// 	colorDisplay.textContent = pickedColor;
// 	messageDisplay.textContent = '';
// 	//change colors of squares
// 	for (i = 0; i < colors.length; i++) {
// 		squares[i].style.backgroundColor = colors[i];
// 	}
// 	//change top banner color back to original color
// 	h1.style.backgroundColor = 'steelblue';
// 	resetButton.textContent = 'New Colors';
// });

// //assign a desired color in the title text
// colorDisplay.textContent = pickedColor;
// for (let i = 0; i < squares.length; i++) {
// 	//give a different color to each of the squares
// 	squares[i].style.backgroundColor = colors[i];
// 	//add click listeners to squares
// 	squares[i].addEventListener('click', function() {
// 		//grab color of clicked square
// 		var clickedColor = this.style.backgroundColor;
// 		//compare color of pickedColor to clicked color
// 		if (clickedColor === pickedColor) {
// 			messageDisplay.textContent = 'Correct!';
// 			resetButton.textContent = 'Play Again?';
// 			changeColors(clickedColor);
// 			h1.style.backgroundColor = clickedColor;
// 		} else {
// 			this.style.backgroundColor = '#232323';
// 			messageDisplay.textContent = 'Try Again';
// 		}
// 	});
// }

// //function to change all of the colors to the correct color
// function changeColors(color) {
// 	//loop through all squares
// 	for (let i = 0; i < squares.length; i++) {
// 		//change colors to correct given color
// 		squares[i].style.backgroundColor = color;
// 	}
// }

// function pickColor() {
// 	var random = Math.floor(Math.random() * colors.length);
// 	return colors[random];
// }

// function generateRandomColors(num) {
// 	//make an array
// 	var arr = [];
// 	//add num random colors to array
// 	for (var i = 0; i < num; i++) {
// 		//get random color and push into array
// 		arr.push(randomColor());
// 	}
// 	//return that array
// 	return arr;
// }

// function randomColor() {
// 	//pick a "red", "green", and "blue" from 0-255
// 	var r = Math.floor(Math.random() * 256);
// 	var g = Math.floor(Math.random() * 256);
// 	var b = Math.floor(Math.random() * 256);
// 	return 'rgb(' + r + ', ' + g + ', ' + b + ')';
// }

//refactored code
var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll('.square');
var colorDisplay = document.querySelector('#colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var modeButtons = document.querySelectorAll('.mode');

init();

function init() {
	setupModeButtons();
	setupSquares();
	reset();
}

function extremeSquareClasses() {
	for (i = 0; i < squares.length; i++) {
		squares[i].classList.add('extremeSquares');
		squares[i].classList.remove('square');
	}
}

function normalSquareClasses() {
	for (i = 0; i < squares.length; i++) {
		squares[i].classList.add('square');
		squares[i].classList.remove('extremeSquares');
	}
}

function setupModeButtons() {
	//mode buttons event listeners
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener('click', function() {
			modeButtons[0].classList.remove('selected');
			modeButtons[1].classList.remove('selected');
			modeButtons[2].classList.remove('selected');
			this.classList.add('selected');
			//Turnary Operator
			this.textContent === 'Easy' ? (numSquares = 3) : (numSquares = 6);
			if (this.textContent === 'Easy') {
				numSquares = 3;
				normalSquareClasses();
			} else if (this.textContent === 'Hard') {
				numSquares = 6;
				normalSquareClasses();
			} else {
				numSquares = 16;
				extremeSquareClasses();
			}
			reset();
		});
	}
}

function setupSquares() {
	for (let i = 0; i < squares.length; i++) {
		//add click listeners to squares
		squares[i].addEventListener('click', function() {
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare color of pickedColor to clicked color
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = 'Correct!';
				resetButton.textContent = 'Play Again?';
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			} else {
				this.style.backgroundColor = '#232323';
				messageDisplay.textContent = 'Try Again';
			}
		});
	}
}

function reset() {
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color
	pickedColor = pickColor();
	//change display color to match picked color
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = '';
	//change colors of squares
	for (i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = 'block';
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = 'none';
		}
		squares[i].style.backgroundColor = colors[i];
	}
	//change top banner color back to original color
	h1.style.backgroundColor = 'steelblue';
	resetButton.textContent = 'New Colors';
}

resetButton.addEventListener('click', function() {
	reset();
});

//function to change all of the colors to the correct color
function changeColors(color) {
	//loop through all squares
	for (let i = 0; i < squares.length; i++) {
		//change colors to correct given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//add num random colors to array
	for (var i = 0; i < num; i++) {
		//get random color and push into array
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor() {
	//pick a "red", "green", and "blue" from 0-255
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
