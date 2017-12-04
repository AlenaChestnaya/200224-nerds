var link = document.querySelector(".address .contact-button");
var popup = document.querySelector(".contact-form");
var close = popup.querySelector(".close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=full-name]");
var email = popup.querySelector("[name=email]");
var storageLogin = localStorage.getItem("login");
var storageEmail = localStorage.getItem("email");

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("contact-form-show");
	if (storageLogin) {
		login.value = storageLogin;
		email.focus();
	} else {
		login.focus();
	}
	if (storageEmail) {
		email.value = storageEmail;
	}
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("contact-form-show");
	popup.classList.remove("contact-form-error");
});

form.addEventListener("submit", function (evt) {
	if (!login.value || !email.value) {
		evt.preventDefault();
		popup.classList.remove("contact-form-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("contact-form-error");
	} else {
		localStorage.setItem("login", login.value);
		localStorage.setItem("email", email.value)
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (popup.classList.contains("contact-form-show")) {
			popup.classList.remove("contact-form-show");
			popup.classList.remove("contact-form-error");
		}
	}
});