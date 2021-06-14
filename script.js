var css = document.querySelector("h3");
var colour1 = document.querySelector(".colour1");
var colour2 = document.querySelector(".colour2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ colour1.value 
	+ ", " 
	+ colour2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}
setGradient()

colour1.addEventListener("input", setGradient);

colour2.addEventListener("input", setGradient);