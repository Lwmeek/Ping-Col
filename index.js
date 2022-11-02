const form = document.querySelector(".form");
const email = document.querySelector("#email");
const error = document.querySelector("#error");
const button1 = document.querySelector(".btn-primary");

const validEmail =
		/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function emailSuccess(){
	if (email.value.match(validEmail)) {
		return true;
	} else {
		return false;
	}
}

form.addEventListener("submit", (event) => {
	event.preventDefault();
	error.style.display = "none";
	button1.style.borderColor = "hsl(223, 100%, 88%)";
	error.style.color = "hsl(354, 100%, 66%)";

	if (email.value.length === 0) {
		error.textContent = "Whoops! It looks like you forgot to add your email";
		error.style.display = "block";
		button1.style.borderColor = "hsl(354, 100%, 66%)";
	} else if (emailSuccess() === false) {
		error.textContent = "Please provide a valid email address";
		button1.style.borderColor = "hsl(354, 100%, 66%)";
		error.style.display = "block";
	} else {
		console.log("sumbitted");
		error.textContent = "You will be notified";
		error.style.display = "block";
		error.style.color = "hsl(223, 100%, 88%)";
	}
});
