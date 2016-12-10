
function validateEmail(){
	var emailInput = document.getElementById('email').value
	var regEx = /^[a-z0-9._&-]+@[a-z0-9.-]+\.[a-z]{2,5}$/
	console.log(regEx.test(emailInput))

if (regEx.test(emailInput) == false) {
    alert("incorrect input");
} else {
    alert("Good evening, proper email");
}
}
document.getElementById('button').addEventListener('click', validateEmail, false)