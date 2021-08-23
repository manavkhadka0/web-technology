// Selectors

// listeners

function validate(e) {
  e.preventDefault();

  let name_value = document.getElementById("name").value;
  let email_value = document.getElementById("email").value;
  let phone_value = document.getElementById("phone").value;
  let interest_value = document.getElementById("interest").value;
  let error = document.getElementById("error");

  let name_regex = /^[A-Za-z ]+$/;
  let phone_regex = /^[0-9+]+$/;
  var email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (name_value === "" || email_value === "" || phone_value === "") {
    error.innerHTML = "Please fill in all fields";
  } else if (!name_regex.test(name_value)) {
    error.innerHTML = "Please enter a valid name";
  } else if (!email_regex.test(email_value)) {
    error.innerHTML = "Please enter a valid email";
  } else if (!phone_regex.test(phone_value)) {
    error.innerHTML = "Please enter a valid phone number";
  } else if (interest_value.length < 20 || interest_value.length > 1000) {
    error.innerHTML = "Please enter a valid interest of 20 to 1000 characters";
  } else {
    error.innerHTML = "Form Submitted";
  }
}
