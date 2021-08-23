function validateForm(event) {
  // here form will get validated as per need
  event.preventDefault();
  let interest_value = document.forms["register"]["interest"].value;
  let name_value = document.forms["register"]["name"].value;

  let email_value = document.forms["register"]["email"].value;
  let phone_value = document.forms["register"]["phone"].value;
  console.log(interest_value);
  console.log(name_value);

  // validating name
  var regex = /^[A-Za-z ]+$/;
  var regex_phone = /^[0-9]+$/;
  var regex_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var isValid = regex.test(name_value);

  if (name_value == "" && email_value == "") {
    alert("Please enter all fields");
  }
  if (isValid == false) {
    alert("contains special character in Name");
  }

  // validating phone number
  var isPhoneValid = regex_phone.test(phone_value);
  if (isPhoneValid == false) {
    alert("Phone is Invaled");
  }
  // validating email
  var isEmailValid = regex_email.test(email_value);
  if (isEmailValid == false) {
    alert("Email is Invaled");
  }
  // validating interest
  if (interest_value.length < 20) {
    alert("Interest is less than 20 characters");
    return false;
  }
  if (interest_value.length > 1000) {
    alert("Interest is more than 2000 characters");
    return false;
  }
}

// HAREK ELEMEMENT KO VALUE LINA PARYO
