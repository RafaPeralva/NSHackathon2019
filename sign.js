if(document.getElementById('btn').clicked == true)
{
	firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  		// Handle Errors here.
  		var errorCode = error.code;
  		var errorMessage = error.message;
  		// ...
});
	firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.firstName;
    var email = user.email;
    var uid = user.uid;
    //var providerData = user.providerData;
    window.location.href = "thankyou.html";
    // ...
  } else {
    // User is signed out.
    // ...
  }
});



   
}
