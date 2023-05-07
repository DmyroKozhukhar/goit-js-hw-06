const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
	event.preventDefault();

	const formElements = event.currentTarget.elements;
	const userInputMail = formElements.email.value;
	const userInputPsw = formElements.password.value;
	if (userInputMail.length < 1) {
		alert("Введіть емейл");
	} else if (userInputPsw.length < 1) {
		alert("Введіть пароль");
	} else {
		const userData = {
			userInputMail,
			userInputPsw,
		};
		console.log(userData);
	}
	formRef.reset();
}
