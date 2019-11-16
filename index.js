
const database = firebase.database();
const auth = firebase.auth();
const submitBtn = document.getElementById("submit-btn");

function writeUserData(userId, user) {
  database.ref('users/' + userId).set(user);
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

	const user = {
		firstName,
		lastName,
		email,
		username,
		password,
		location,
		language,

	}

	auth.createUserWithEmailAndPassword(user.email, user.password)
		.then(res => {
			writeUserData(res.user.uid, user);
			window.location.href = "thankyou.html";
		})
		.catch(err => console.log(err));

	
	return false;
}