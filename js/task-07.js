const inputRef = document.getElementById("font-size-control");
const textRef = document.getElementById("text");
textRef.style.fontSize = `${inputRef.value}px`;

inputRef.addEventListener("input", inputValue);

function inputValue() {
	const inputCurrentValue = Number(inputRef.value);
	textRef.style.fontSize = `${inputCurrentValue}px`;
}
