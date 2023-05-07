const inputRef = document.getElementById("font-size-control");
const textRef = document.getElementById("text");
inputRef.addEventListener("input", inputValue);

function inputValue() {
	const inputCurrentValue = Number(inputRef.value);
	textRef.style.fontSize = `${inputCurrentValue}px`;
}
