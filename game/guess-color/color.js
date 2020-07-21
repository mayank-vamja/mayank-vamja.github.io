var colors = pickRandomColors(9);
var pickedColor = colors[Math.floor(Math.random() * colors.length)];
var displayCol = document.querySelector("#rand_color");
var squares = document.querySelectorAll(".square");
var header = document.querySelector("#header");
var msg = document.querySelector("#msg");
var newgamebtn = document.querySelector("#newgame");
var easybtn = document.querySelector("#easy");
var medbtn = document.querySelector("#medium");
var hardbtn = document.querySelector("#hard");
var currentLevel = 9;

displayCol.textContent = pickedColor;
for (var i = 0; i < squares.length; i++) {
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click", function() {
		if (this.style.background === pickedColor) {
			msg.textContent = "Correct !";
			header.style.background = pickedColor;
			guessed();
		}
		else {
			msg.textContent = "Guess Again";
			this.style.background = "#232323";
		}
	});
}

newgamebtn.addEventListener("click", function() {
	reset(currentLevel);
});

easybtn.addEventListener("click", function() {
	easybtn.classList.add("selected");
	if (currentLevel == 9)
		hardbtn.classList.remove("selected");
	else
		medbtn.classList.remove("selected");
	currentLevel = 3;
	reset(currentLevel);
});

medbtn.addEventListener("click", function() {
	medbtn.classList.add("selected");
	if (currentLevel == 9)
		hardbtn.classList.remove("selected");
	else
		easybtn.classList.remove("selected");
	currentLevel = 6;
	reset(currentLevel);
});

hardbtn.addEventListener("click", function() {
	hardbtn.classList.add("selected");
	if (currentLevel == 9)
		hardbtn.classList.remove("selected");
	else
		medbtn.classList.remove("selected");
	currentLevel = 9;
	reset(currentLevel);
});

function reset(level) {
	header.style.background = "#2196F3";
	colors = pickRandomColors(level);
	pickedColor = colors[Math.floor(Math.random() * colors.length)];
	displayCol.textContent = pickedColor;
	msg.textContent = "";
	for (var i = 0; i < colors.length; i++) {
		squares[i].style.background = colors[i];
	}
	for (var i = level; i < squares.length; i++) {
		squares[i].style.background = "#232323";
	}
}

function pickRandomColors(size) {
	var arr = new Array();
	for (var i = 0; i < size; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function guessed() {
	for (var i = 0; i < colors.length; i++) {
		squares[i].style.background = pickedColor;
	}
}