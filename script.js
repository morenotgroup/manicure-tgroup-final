
document.getElementById('form-agendamento').addEventListener('submit', async function(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const empresa = document.getElementById('empresa').value;
  const servico = document.getElementById('servico').value;
  const dia = document.getElementById('dia').value;
  const horario = document.getElementById('horario').value;

  const dados = { nome, email, empresa, servico, dia, horario };

  const mensagem = document.getElementById('mensagem');
  mensagem.innerText = "Enviando...";

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbzcPkl9Y4KeWAaLyNVMIuk6OOx2ABf_lOBgeu9FUcUcN4F8Tx1Hmcyoby9yxOy3dHN9Rw/exec", {
      method: "POST",
      body: JSON.stringify(dados)
    });

    const texto = await response.text();
    mensagem.innerText = texto;
  } catch (error) {
    mensagem.innerText = "❌ Erro ao enviar: " + error.message;
  }
});
