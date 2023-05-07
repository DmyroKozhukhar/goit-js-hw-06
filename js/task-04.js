const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueRef = document.getElementById("value");

let counterValue = Number(valueRef.textContent);
decrementBtn.addEventListener("click", decreaseByOne);
incrementBtn.addEventListener("click", increaseByOne);

function decreaseByOne() {
	counterValue -= 1;
	valueRef.textContent = String(counterValue);
}

function increaseByOne() {
	counterValue += 1;
	valueRef.textContent = String(counterValue);
}
