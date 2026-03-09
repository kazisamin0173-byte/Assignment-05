const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function () {
  const userInput = document.getElementById("userInput");
  const inputValue = userInput.value;

  const userPin = document.getElementById("userPin");
  const pin = userPin.value;
  if (inputValue == "admin" && pin == "admin123") {
    
    window.location.assign("./home.html")
    alert("Sign in Successful");
  } else {
    alert("Please input right Username and Password");
  }
});
