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
	let increaseBy = 30;
	for (let i = 1; i <= amount; i += 1) {
		const createdDiv = document.createElement("div");
		createdDiv.style.backgroundColor = getRandomHexColor();
		createdDiv.style.width = `${increaseBy}px`;
		createdDiv.style.height = `${increaseBy}px`;
		createdDiv.classList.add("created-element");
		increaseBy += 10;
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
