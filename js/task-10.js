function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const inputRef = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const parentBox = document.getElementById("boxes");
inputRef.addEventListener("input", inputValue);
createBtn.addEventListener("click", addCollection);
destroyBtn.addEventListener("click", destroyBoxes);
function inputValue() {
	return Number(inputRef.value);
}

function addCollection() {
	const amount = inputValue();
	createBoxes(amount);
}

function createBoxes(amount) {
	let widthAndHeight = 30;
	for (let i = 1; i <= amount; i += 1) {
		const createdDiv = document.createElement("div");
		createdDiv.style.backgroundColor = getRandomHexColor();
		createdDiv.style.width = `${widthAndHeight}px`;
		createdDiv.style.height = `${widthAndHeight}px`;
		createdDiv.classList.add("created-element");
		widthAndHeight += 10;
		parentBox.append(createdDiv);
	}
}

function destroyBoxes() {
	const newBoxes = document.querySelectorAll(".created-element");
	newBoxes.forEach((box) => {
		box.remove();
	});
	inputRef.value = 0;
}
