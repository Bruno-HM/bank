document.addEventListener('DOMContentLoaded', () => {
    
    const transferirButton = document.getElementById('botaoTransferir')
    const valorTransferenciaInput = document.getElementById('valor-transferencia');
    const cpf_cnpjTransferenciaInput = document.getElementById('cpf_cnpj-transferencia');
    const saldoNormalElement = document.getElementById('saldo-normal');


    transferirButton.addEventListener('click', (e) => 
    {
        e.preventDefault();

        const valorTransferencia = parseFloat(valorTransferenciaInput.value)
        const cpf_cnpjTransferencia = cpf_cnpjTransferenciaInput.value;
        const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

        
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const destinatario = users.find(user => user.cpf_cnpj === cpf_cnpjTransferencia)

        if (!destinatario) 
        {
            alert('Destinatario invalido')
        } 
        else if (destinatario == usuarioLogado) 
            {
            alert('Voce nao pode transferir para si mesmo!')
        }
        else if (usuarioLogado.saldo >= valorTransferencia) 
        {
            usuarioLogado.saldo -= valorTransferencia;
            destinatario.saldo += valorTransferencia;
          
            const indexDestinatario = users.findIndex(user => user.cpf_cnpj === cpf_cnpjTransferencia)
            users[indexDestinatario] = destinatario
            
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado))

            saldoNormalElement.textContent = `R$ ${usuarioLogado.saldo.toFixed(2)}`
                    
            alert('Transferência realizada com sucesso!');
            atualizarSaldoCadastro();
        } 
        else 
        {
            alert('Saldo insuficiente!')
        }        
        
    })
})