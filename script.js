let form = document.getElementById('forms');

form.addEventListener('submit', function(e){

    e.preventDefault();

    let valido = true;

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let CPF = document.getElementById('CPF').value;
    let idade = document.getElementById('idade').value;
    let cidade = document.getElementById('cidade').value;
    let possuiquintal = document.querySelector('input[name="quintal"]:checked');
    let jatevepet = document.querySelector('input[name="tevepet"]:checked');
    let temposozinho = document.getElementById('temposozinho').value;


    document.getElementById('erroNome').textContent = '';
    document.getElementById('erroEmail').textContent = '';
    document.getElementById('erroTelefone').textContent = '';
    document.getElementById('erroCPF').textContent = '';
    document.getElementById('erroIdade').textContent = '';
    document.getElementById('erroCidade').textContent = '';
    document.getElementById('erroPossuiQuintal').textContent = '';
    document.getElementById('erroJatevePet').textContent = '';
    document.getElementById('erroTemposozinho').textContent = '';

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
    if (cidade.length === 0){
        document.getElementById('erroCidade').textContent =
        'Cidade é obrigatória';
        valido = false;
    }
    if (!possuiquintal){
    document.getElementById('erroPossuiQuintal').textContent =
    'Selecione uma opção';
    valido = false;
}
    if (!jatevepet){
    document.getElementById('erroJatevePet').textContent =
    'Selecione uma opção';
    valido = false;
}
if (isNaN(temposozinho) || temposozinho < 0 || temposozinho > 8){
    document.getElementById('erroTemposozinho').textContent =
    'tempo sozinho não deve ser maior que 8 horas';
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
            Cidade: ${cidade} <br>
            Possui Quintal: ${possuiquintal ? 'Sim' : 'Não'} <br>
            Já teve Pet: ${jatevepet ? 'Sim' : 'Não'} <br>
            Tempo Sozinho: ${temposozinho} horas

        `;
    }

});