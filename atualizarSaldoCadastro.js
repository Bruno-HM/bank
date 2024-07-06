function atualizarSaldoCadastro() {
    const saldoInput = document.getElementById('saldo');
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

    if (usuarioLogado) {
        saldoInput.value = usuarioLogado.saldo; 
    }
}