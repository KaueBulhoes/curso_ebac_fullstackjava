/**$(document).ready(function(){
    //document.querySelector('header button')
    //faz a mesma coisa que o de cima
    $('form').on('submit', function(e){
        e.preventDefault()

        const nomeTarefa = $('#nome-tarefa').val()
        const novoItem = $('<li></li>')

        $(nomeTarefa).appendTo(novoItem)
        $(novoItem).appendTo('ul')

        $(`#nome-tarefa`).val('')//limpar a caixa de url

    })
}) */

$(document).ready(function(){
    $('ul').on('click', 'li', function() {
        $(this).toggleClass('clicked'); // Adiciona/remove a classe 'clicked' quando o item é clicado
    });
    
    $('form').on('submit', function(e){
        e.preventDefault()

        const nomeTarefa = $('#nome-tarefa').val()
        const novoItem = $('<li></li>').text(nomeTarefa)

        $(novoItem).appendTo('ul')

        $('#nome-tarefa').val('') // Limpar a caixa de texto

    })
})

/**Em Javascript puro para questões de estudo
 * document.addEventListener('DOMContentLoaded', function() {
    var ul = document.querySelector('ul');

    ul.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            event.target.classList.toggle('clicked');
        }
    });

    var form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        var nomeTarefa = document.getElementById('nome-tarefa').value;
        var novoItem = document.createElement('li');
        novoItem.textContent = nomeTarefa;

        ul.appendChild(novoItem);

        document.getElementById('nome-tarefa').value = ''; // Limpar a caixa de texto
    });
});

 */
