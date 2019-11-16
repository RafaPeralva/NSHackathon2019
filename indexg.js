
const database = firebase.database();
const submitBtn = document.getElementById("submit-btn");

function writeUserData(userId, userg) {
  database.ref('usersG/' + userId).set(userg);
}

function idGenerator() {
	return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}


function handleOnSubmit(e) {
	e.preventDefault();

	const firstNameEl = document.getElementById("firstName");
	const firstName = firstNameEl.value;
	const lastNameEl = document.getElementById("lastName");
	const lastName = lastNameEl.value;
	const emailEl = document.getElementById("email");
	const email = emailEl.value;
	const usernameEl = document.getElementById("username");
	const username = usernameEl.value;
	const passwordEl = document.getElementById("password");
	const password = passwordEl.value;
	const locationEl = document.getElementById("location");
	const location = locationEl.value;
	const languageEl = document.getElementById("language");
	const language = languageEl.value;

	const userg = {
		firstName,
		lastName,
		email,
		username,
		password,
		location,
		language,

	}

	console.log(firstName);

	writeUserData(idGenerator(), userg);
	return false;
}