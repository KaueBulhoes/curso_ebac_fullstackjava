const form = document.getElementById('form-validacao');

/*Vai ficar de olho no botao submit para chamar a função e */
form.addEventListener('submit', function (e) {
    e.preventDefault();
    /*parseFloat para transformar o número digitado em um número flutuante */
    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);
    /*confere se o digitado não for um número para lançar uma mensagem de erro, e também também */
    if (!isNaN(campoA) && !isNaN(campoB) && campoB > campoA) {
        exibirMensagem('Formulário válido!', 'green');
        limparCampos();
    } else {
        exibirMensagem('Formulário inválido. Certifique-se de que o número B é maior que o número A.', 'red');
    }
});

function exibirMensagem(mensagem, cor) {
    const mensagemElement = document.querySelector('.mensagem');
    /*chamada para mudar a mensagem da função */
    mensagemElement.textContent = mensagem;
    /*chamada para mudar a cor da função */
    mensagemElement.style.color = cor;
}

function limparCampos() {
    document.getElementById('campoA').value = '';
    document.getElementById('campoB').value = '';
}
