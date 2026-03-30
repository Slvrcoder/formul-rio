let form = document.getElementById('forms');

form.addEventListener('submit', function(e){

    e.preventDefault();

    let valido = true;

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let CPF = document.getElementById('CPF').value;
    let idade = document.getElementById('idade').value;

    document.getElementById('erroNome').textContent = '';
    document.getElementById('erroEmail').textContent = '';
    document.getElementById('erroTelefone').textContent = '';
    document.getElementById('erroCPF').textContent = '';
    document.getElementById('erroIdade').textContent = '';

    if (nome.length < 3){
        document.getElementById('erroNome').textContent =
        'Nome deve ter pelo menos 3 caracteres';
        valido = false;
    }

    if (!email.includes('@')){
        document.getElementById('erroEmail').textContent =
        'Email inválido';
        valido = false;
    }

    if (telefone.length < 10){
        document.getElementById('erroTelefone').textContent =
        'Telefone deve ter no mínimo 10 caracteres';
        valido = false;
    }

    if (CPF.length !== 11){
        document.getElementById('erroCPF').textContent =
        'CPF deve ter 11 dígitos';
        valido = false;
    }
    if (isNaN(idade) || idade < 18){
        document.getElementById('erroIdade').textContent =
        'Você deve ser maior de 18 anos';
        valido = false;
    }

    if (valido){
        document.getElementById('resultado').innerHTML = `
            <h3>Dados enviados:</h3>
            Nome: ${nome} <br>
            Email: ${email} <br>
            Telefone: ${telefone} <br>
            CPF: ${CPF} <br>
            Idade: ${idade} <br>
            
        `;
    }

});