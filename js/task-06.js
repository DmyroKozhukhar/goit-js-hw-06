const inputRef = document.getElementById("validation-input");
const numberOfSymbols = Number(inputRef.dataset.length);

inputRef.addEventListener("blur", checkInputLength);

function checkInputLength() {
	if (inputRef.value.length === numberOfSymbols) {
		inputRef.classList.remove("invalid");
		inputRef.classList.add("valid");
	} else {
		inputRef.classList.remove("valid");
		inputRef.classList.add("invalid");
	}
}
