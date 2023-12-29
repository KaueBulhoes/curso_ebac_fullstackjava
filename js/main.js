$(document).ready(function () {
    $('.menu-hamburguer').click(function () {
        $('nav').slideToggle()
    })
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(xx) xxxxx-xxxx'
    })
    $('#cpf').mask('000.000.000-00', {
        placeholder: 'xxx.xxx.xxx-xx'
    })
    $('#cep').mask('00.0000-00', {
        placeholder: 'xx.xxxxx-xx'
    })
    $('form').validate({
        rules:{
            nome:{
                required: true
            },
            email:{
                required: true
            },
            telefone:{
                required: true
            },
            mensagem:{
                required: true
            },
            cpf:{
                required: true
            },
            endereco:{
                required: true
            },
            cep:{
                required: true
            }
        }
    })
})