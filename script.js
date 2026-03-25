let from = document.getElementById('forms')

from.addEventListener('submit'), function(e){


    e.preventDefault();

    let valido = true

    let nome = document.getElementById ('nome').value;
    let email = document.getElementById ('email').value;
    let senha = document.getElementById ('senha').value;

    document.getElementById ('errorNome'). textContent = '';
    document.getElementById ('errorEmail'). textContent = '';
    document.getElementById ('error'). textContent = '';

    if (nome.length < 3 ){

        document.getElementById('errorNome').textContent = 'Nome deve ter pelo menos 3 caracteres'

        valido = false
    }

    if (!email.includes('@')) {
        document.getElementById('erroemail').textContent = 'Email inválido.';
        valido = false
    }

    if (senha.length < 6){
        document.getElementById('errosenha').textContent = 'Senha inválida, deve conter 6 caracteres no minimo.';
        valido = false;
    
    }

    if (valido){
        let resultado = document.getElementById('resultado');

        resultado.innerHTML = 'dados'
        
        

    }

    
}

