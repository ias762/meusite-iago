document.getElementById("form-contato").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Validação simples para garantir que todos os campos estão preenchidos
    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const problema = document.querySelector('#problema').value;
    const equipamento = document.querySelector('#equipamento').value;
  
    if (!nome || !email || !problema || !equipamento) {
      alert("Por favor, preencha todos os campos!");
      return;
    }
  
    // Desabilitar o botão enquanto o formulário está sendo processado
    const button = this.querySelector("button");
    button.disabled = true;
  
    // Simulando um envio de formulário (em breve sera adaptado para backend)
    setTimeout(() => {
      alert("Mensagem enviada com sucesso! Em breve entrarei em contato. 😊");
      this.reset();  // Limpa os campos após o envio
      button.disabled = false;  // Reabilita o botão
    }, 1000);
  });
  