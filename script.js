document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-contato");
  const sucesso = document.getElementById("mensagem-sucesso");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      form.reset();
      sucesso.style.display = "block";
    } else {
      alert("Erro ao enviar. Tente novamente.");
    }
  });
});
