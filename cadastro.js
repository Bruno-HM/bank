document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registration-form');
    const users = JSON.parse(localStorage.getItem('users')) || [];

    
  
    function saveUsers() {
        localStorage.setItem('users', JSON.stringify(users));
    }

    registrationForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nome = document.getElementById('nome').value;
        const cpf_cnpj = document.getElementById('cpf_cnpj').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;
        const saldo = document.getElementById('saldo').value;
        const lojista = document.getElementById('lojista').checked;

        // Verifica se o CPF/CNPJ já existe
        const usuarioExistenteCnpj = users.find(user => user.cpf_cnpj === cpf_cnpj);
        if (usuarioExistenteCnpj) {
            alert('CPF/CNPJ já cadastrado!');
            return;
        }

        // Verifica se o email já existe
        const usuarioExistenteEmail = users.find(user => user.email === email);
        if (usuarioExistenteEmail) {
            alert('Email já cadastrado!');
            return;
        }

        // Adiciona o novo usuário
        users.push({
            nome,
            cpf_cnpj,
            email,
            senha,
            saldo: parseFloat(saldo),
            lojista
        });

        saveUsers();

        alert('Usuário cadastrado com sucesso!');
        registrationForm.reset(); // Limpa o formulário

    });
});

