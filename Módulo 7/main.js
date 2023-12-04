const form = document.getElementById('form-validacao');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);

    if (!isNaN(campoA) && !isNaN(campoB) && campoB > campoA) {
        exibirMensagem('Formulário válido!', 'green');
        limparCampos();
    } else {
        exibirMensagem('Formulário inválido. Certifique-se de que o número B é maior que o número A.', 'red');
    }
});

function exibirMensagem(mensagem, cor) {
    const mensagemElement = document.querySelector('.mensagem');
    mensagemElement.textContent = mensagem;
    mensagemElement.style.color = cor;
}

function limparCampos() {
    document.getElementById('campoA').value = '';
    document.getElementById('campoB').value = '';
}
