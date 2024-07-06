document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users')) || [];

        const emaill = document.getElementById('emaill').value;
        const senhaa = document.getElementById('senhaa').value;

        const usuario = users.find(user => user.email === emaill && user.senha === senhaa);


        if (usuario) 
        {
            console.log('Login efetuado com sucesso!');
            if (usuario.lojista)
            {
                window.location.href = 'lojista.html'
                
            }
            else 
            {
            window.location.href = 'normal.html'
            }
            localStorage.setItem('usuarioLogado', JSON.stringify(usuario)); 
            atualizarSaldoCadastro();
        }
        else 
        {
            alert('Email ou senha inválidos!')
        }
    })
})






