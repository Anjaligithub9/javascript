const form = document.getElementById("form");
const name = document.getElementById("names");
const username = document.getElementById("username");
const email = document.getElementById("email");
const number = document.getElementById("number");
const password = document.getElementById("password");
const button = document.getElementById("btnInsert");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // trim to remove the whitespaces
  const nameValue = name.value.trim();
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const numberValue = number.value.trim();
  const passwordValue = password.value.trim();

  if (nameValue === "") {
    setErrorFor(name, "Name cannot be blank");
  } else {
    setSuccessFor(name);
  }

  if (usernameValue === "") {
    setErrorFor(username, "Username cannot be blank");
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
  } else {
    setSuccessFor(email);
  }

  if (numberValue === "") {
    setErrorFor(number, "Number cannot be blank");
  } else {
    setSuccessFor(number);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
  } else {
    setSuccessFor(password);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

//localstorage functioning

btnInsert.onclick = function () {
  const names = name.value;
  const usernames = username.value;
  const emails = email.value;
  const numbers = number.value;
  const passwords = password.value;

  localStorage.setItem("name", names);
  localStorage.setItem("username", usernames);
  localStorage.setItem("email", emails);
  localStorage.setItem("number", numbers);
  localStorage.setItem("password", passwords);

  for (let i = 0; i < localStorage.length; i++) {
    const name = localStorage.getItem(names);
    const username = localStorage.getItem(usernames);
    const email = localStorage.getItem(emails);
    const number = localStorage.getItem(numbers);
    const password = localStorage.getItem(passwords);

    console.log(names);
    console.log(usernames);
    console.log(emails);
    console.log(numbers);
    console.log(passwords);
  }
};

