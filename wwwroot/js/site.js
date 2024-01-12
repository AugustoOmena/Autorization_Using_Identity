/* imagem PessoaPropaganda */
var imagesPessoaPropaganda = ["1.png", "2.png", "3.png", "4.png"];
var index = 0;
var cidadesValidas = [
    "Angra", "Manguaratiba", "Paraty", "Volta Redonda",
];

function changeImage() {
    var imagePath = "img/PessoaPropaganda/" + imagesPessoaPropaganda[index];
    document.getElementById("changingImage").src = imagePath;
    index = (index + 1) % imagesPessoaPropaganda.length;
}
setInterval(changeImage, 2000);

/*Script para manipular os modais*/
document.getElementById('ModalCadastroDeClientePremium').addEventListener('click', function () {
    var ModalPremiums = new bootstrap.Modal(document.getElementById('McriarPremium'));
    ModalPremiums.show();
});

document.getElementById('ChamaModalSelecionarCidade').addEventListener('click', function () {
    var ModalCidade = new bootstrap.Modal(document.getElementById('MselecionarCidade'));
    ModalCidade.show();
});

function SeForNuloRecebeCidade(cidadeEscolhida) {
    if (cidadeEscolhida === null || cidadeEscolhida === undefined) {
        cidadeEscolhida = "Cidade";
    }
    return cidadeEscolhida;
}

function SeForNuloRecebeFrase(cidadeEscolhida) {
    if (cidadeEscolhida === null || cidadeEscolhida === undefined) {
        cidadeEscolhida = "Cidade";
    }
    return cidadeEscolhida;
}


$(document).ready(function () {
    // Recupera a escolha da cidade do armazenamento local
    var cidadeEscolhida = SeForNuloRecebeCidade(localStorage.getItem('cidadeEscolhida'));
    var temCidadeOuNao = cidadesValidas.includes(cidadeEscolhida);

    $("#cidadeEscolhida").text(cidadeEscolhida);
    $("#TextoBotaoCidade").text(cidadeEscolhida);
    $(".comCidade").toggleClass("d-none", !temCidadeOuNao);
    $(".semCidade").toggleClass("d-none", temCidadeOuNao);
});


// Configura o evento de clique no botão
$("#selecionarCidade").click(function () {
    var cidadeEscolhida = SeForNuloRecebeCidade($("#cidadeSelect").val());
    localStorage.setItem('cidadeEscolhida', cidadeEscolhida);//lembrar da cidadeEscolhida
    $("#cidadeEscolhida").text(cidadeEscolhida);
    $("#TextoBotaoCidade").text(cidadeEscolhida);
    $("#MselecionarCidade").modal("hide");
});
