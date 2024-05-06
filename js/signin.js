const form = document.getElementById("signin-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {
        alert("Please fill out all fields.");
        return;
    }

    form.submit();
});