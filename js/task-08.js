const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
	event.preventDefault();

	const formElements = event.currentTarget.elements;
	const email = formElements.email.value;
	const password = formElements.password.value;
	if (email.length < 1) {
		
		return alert("Введіть емейл");
	} else if (password.length < 1) {
		return alert("Введіть пароль");
		
	} else {
		const userData = {
			email,
			password,
		};
		console.log(userData);
	}
	formRef.reset();
}
