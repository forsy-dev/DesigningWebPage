var submitButton = document.getElementById("submit-button")

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Sorry, it's just a design");
})

var togglePassword = document.getElementById("togglePassword")

togglePassword.addEventListener("click", () => {
    const passField = document.getElementById("inputPassword");
    passField.type = passField.type === "password" ? "text" : "password";
    event.preventDefault();
});