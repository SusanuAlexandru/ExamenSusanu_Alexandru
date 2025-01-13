document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "password") {
      document.getElementById("message").textContent = "Autentificare reușită!";
      document.getElementById("message").style.color = "green";
    } else {
      document.getElementById("message").textContent =
        "Utilizator sau parolă greșite!";
      document.getElementById("message").style.color = "red";
    }
  });
