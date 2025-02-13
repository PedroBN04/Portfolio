document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        if (nome === "" || email === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos antes de enviar.");
            event.preventDefault();
        } else if (!email.includes("@") || !email.includes(".")) {
            alert("Por favor, insira um e-mail válido.");
            event.preventDefault();
        }
    });
});
