document.getElementById("loginButton").addEventListener("click", () => {
    const firstName = document.getElementById("firstName").value.trim();
    const password = document.getElementById("password").value.trim();
    const clue = document.getElementById("clue");

    // Validation
    if (firstName.toLowerCase() === "caryl" && password === "10302019") {
        window.location.href = "doyouloveme.html"; // Redirect on successful login
    } else if (password !== "10302019") {
        clue.style.display = "block";
        clue.textContent = "Clue: Anniversary date in numerical format (DD/MM/YYYY).";
    } else {
        alert("Invalid credentials. Please try again!");
    }
});