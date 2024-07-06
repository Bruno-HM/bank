
document.addEventListener('DOMContentLoaded', () => {
    const saldoLojistaElement = document.getElementById('saldo-lojista');
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
  
    if (usuarioLogado) {
      const saldo = parseFloat(usuarioLogado.saldo);
      saldoLojistaElement.textContent = `R$ ${saldo.toFixed(2)}`
    }

  });