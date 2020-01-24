var squares = document.querySelectorAll('.squares');
var displayColor = document.querySelector('#displayColor');
var mode = document.querySelectorAll('.modeButtons');
var resetButton = document.querySelector('#resetButton');
var message = document.querySelector('#message');
var colors;
var pickedColor;

var numSquares = 6;
reset();

modeSelection();
resetB();
setupSquares();
// clickedSquare();

//resets random colors to the squares as well as correctColor
function reset() {
	colors = generateRandomColors(numSquares);
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	pickedColor = pickColor();
	displayColor.textContent = pickedColor;
}
//makes it so the New Colors button resets the colors of the squares
function resetB() {
	resetButton.addEventListener('click', function() {
		reset();
	});
}

//selects the diffulty mode buttons when clicked and sets numSquares to the right value
function modeSelection() {
	for (i = 0; i < mode.length; i++) {
		mode[i].addEventListener('click', function() {
			//remove selected class from all modes
			mode[0].classList.remove('selected');
			mode[1].classList.remove('selected');
			mode[2].classList.remove('selected');
			//add selected class to clicked button
			this.classList.add('selected');
			//change numSquares variable depending on selection
			if (this.textContent === 'Easy') {
				numSquares = 3;
			} else {
				numSquares = 6;
			}
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
				message.textContent = 'Correct!';
				resetButton.textContent = 'Play Again?';
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			} else {
				this.style.backgroundColor = '#232323';
				message.textContent = 'Try Again';
			}
		});
	}
}

//pick one of the displayed colors to be the color the user needs to guess
function pickColor() {
	return colors[Math.floor(Math.random() * colors.length)];
}
//Generate an array of num random colors
function generateRandomColors(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}
//Generate a random color in RGB format
function randomColor() {
	var Red = Math.floor(Math.random() * 256);
	var Green = Math.floor(Math.random() * 256);
	var Blue = Math.floor(Math.random() * 256);
	return 'RGB(' + Red + ', ' + Green + ', ' + Blue + ')';
}
