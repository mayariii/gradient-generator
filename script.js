// ELEMENT SELECTIONS
// for colour inputs
var colour1 = document.querySelector(".colour1");
var colour2 = document.querySelector(".colour2");
var gradientFill = document.getElementById("gradient");
// for text output
var css = document.querySelector(".cssTextDisplay");
// for copy button
var copyBtn = document.querySelector(".copyBtn");
// for gradient direction arrows
var upBtn = document.querySelector("#upBtn");
var leftBtn = document.querySelector("#leftBtn");
var rightBtn = document.querySelector("#rightBtn");
var downBtn = document.querySelector("#downBtn");

// for gradient direction settings
var direction = "right";

// MAIN
// check whether Clipboard API available in the browser
// if not available, hide copy button
if (!navigator.clipboard) {
	copyBtn.classList.add('.hidden');
}

// sets gradient according to colour picker inputs & updates css export text
function setGradient() {
	gradientFill.style.background =
		"linear-gradient(to " +
		direction + "," +
		colour1.value +
		", " +
		colour2.value +
		")";

	css.value = gradientFill.style.backgroundImage + ";";

	// clear styling of copy button
	copyBtn.innerHTML = '<i class="far fa-copy copyIcon fa-lg"></i> Copy To Clipboard';
	copyBtn.classList.remove('copied');
}

function copyToClipboard() {
	css.select();
	document.execCommand("copy");

	// add styling to confirm copy
	copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!'
	copyBtn.classList.add('copied');
}

setGradient()

// EVENT LISTENERS
// for colour inputs
colour1.addEventListener("input", setGradient);
colour2.addEventListener("input", setGradient);

// for copy button
copyBtn.addEventListener("click", copyToClipboard);

// for gradient direction buttons
leftBtn.addEventListener("click", () => {
	direction = "left";
	setGradient();
})
rightBtn.addEventListener("click", () => {
	direction = "right";
	setGradient();
})
upBtn.addEventListener("click", () => {
	direction = "top";
	setGradient();
})
downBtn.addEventListener("click", () => {
	direction = "bottom";
	setGradient();
})