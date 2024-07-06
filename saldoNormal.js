document.addEventListener('DOMContentLoaded', () => {
    const saldoNormalElement = document.getElementById('saldo-normal');
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
  
    if (usuarioLogado) {
      const saldo = parseFloat(usuarioLogado.saldo);
      saldoNormalElement.textContent = `R$ ${saldo.toFixed(2)}`
    }

  });