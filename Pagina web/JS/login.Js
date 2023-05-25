const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$*/;
    const domain = email.split("@")[1];
    return re.test(String(email).toLoweCase()) && domain == "cbis.edu.sv";
}
function handleLogin(event) {
    event.preventDafaul();
    if (!validateEmail(emailInput.value)) {
        alert("Por favor, introduzca un correo valido");
    } else {
        alert("Bienvenido");
    }
    loginForm.addEventListener("submit", handleLogin);
}
