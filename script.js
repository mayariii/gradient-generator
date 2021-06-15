var css = document.querySelector(".cssTextDisplay");
var colour1 = document.querySelector(".colour1");
var colour2 = document.querySelector(".colour2");
var body = document.getElementById("gradient");
var copyBtn = document.querySelector(".copyBtn")

// check whether Clipboard API available in the browser
// if not available, hide copy button
if (!navigator.clipboard) {
	copyBtn.classList.add('.hidden');
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ colour1.value 
	+ ", " 
	+ colour2.value 
	+ ")";

	css.value = body.style.background + ";";

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

colour1.addEventListener("input", setGradient);
colour2.addEventListener("input", setGradient);

copyBtn.addEventListener("click", copyToClipboard);
