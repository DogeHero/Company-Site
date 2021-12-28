
var questionario = document.querySelector(".formulario");

questionario.botao.addEventListener("click", function (event) {
    event.preventDefault();
    var name = questionario.nome.value;
    var company = questionario.empresa.value;
    var city = questionario.cidade.value;
    var adress = questionario.endereco.value;
    var mail = questionario.eMail.value;
    var phone = questionario.telefone.value;
    var sms = questionario.mensagem.value;
})