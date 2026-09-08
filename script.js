const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email =
            document.getElementById("email").value;

        const tipo =
            document.getElementById("tipoUsuario").value;

        localStorage.setItem("usuarioEmail", email);

        localStorage.setItem("tipoUsuario", tipo);

        window.location.href = "index.html";

    });

}
const usuario = document.getElementById("usuario");

if (usuario) {

    const email =
        localStorage.getItem("usuarioEmail");

    const tipo =
        localStorage.getItem("tipoUsuario");

    if (email) {

        usuario.innerHTML =
            `Você entrou como <strong>${tipo}</strong>.
             <br>
             E-mail: ${email}`;

    } else {

        window.location.href = "login.html";

    }

}
function sair() {

    localStorage.removeItem("usuarioEmail");

    localStorage.removeItem("tipoUsuario");

    window.location.href = "login.html";

}
