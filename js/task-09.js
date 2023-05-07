function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const bodyRef = document.body;
const changeColorBtn = document.querySelector(".change-color");
const colorValue = document.querySelector(".color");

changeColorBtn.addEventListener("click", changeBodyColor);

function changeBodyColor() {
	const currentColor = getRandomHexColor();
	bodyRef.style.backgroundColor = currentColor;
	colorValue.textContent = currentColor;
}
