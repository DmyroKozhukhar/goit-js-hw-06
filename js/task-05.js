const inputRef = document.getElementById("name-input");
const userName = document.getElementById("name-output");

inputRef.addEventListener("input", nameToRegister);

function nameToRegister() {
	const inputValue = inputRef.value;
	const inputLength = inputValue.length;

	userName.textContent = inputValue;
	if (inputLength < 1) {
		userName.textContent = "Anonymous";
	}
}
