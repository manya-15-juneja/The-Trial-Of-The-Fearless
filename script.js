//for welcome message
let welcomeBtn = document.getElementById("welcomeBtn");
let welcomeMessage = document.getElementById("welcomeMessage");

welcomeBtn.addEventListener("click", function () {
  
  let name = document.getElementById("nameInput").value;

  if (name === "") {
    welcomeMessage.innerText = "Please enter your name";
  } else {
    welcomeMessage.innerText = "Welcome, " + name + "!";
  }

});
//for login page 
let loginBtn = document.getElementById("loginBtn");
let message = document.getElementById("message");

loginBtn.addEventListener("click", function () {

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username === "" || password === "") {
    message.textContent = "Please fill all fields";
    message.style.color = "red";
  }

  else if (username === "admin" && password === "1234") {
    message.textContent = "Login Successful!";
    message.style.color = "green";

  
    window.location.href = "index.html";
  }

  else {
    message.textContent = "Invalid username or password";
    message.style.color = "red";
  }

});
//login page show pass option

let showPass = document.getElementById("showPass");
let password = document.getElementById("password");

showPass.addEventListener("click", function () {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
});


