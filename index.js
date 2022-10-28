const form = document.querySelector(".form");
const email = document.querySelector("#email");
const error = document.querySelector("#error");
const button1 = document.querySelector(".btn-primary");

form.addEventListener("submit", (event) => {
	event.preventDefault();
	const validEmail =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if (email.value.match(validEmail)) {
		console.log("sumbitted");
	} else {
		error.textContent = "Please provide a valid email address";
		button1.style.borderColor = "hsl(354, 100%, 66%)";
		error.style.display = "block";
	}
	if (email.value.length === 0) {
		error.textContent = "Whoops! It looks like you forgot to add your email";
		error.style.display = "block";
		button1.style.borderColor = "hsl(354, 100%, 66%)";
		throw new Error("no email");
	}
	return console.log(email.value);
});
