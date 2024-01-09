// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

/* imagem PessoaPropaganda */
var images = ["1.png", "2.png", "3.png", "4.png"];
var index = 0;

function changeImage() {
    var imagePath = "img/PessoaPropaganda/" + images[index];
    document.getElementById("changingImage").src = imagePath;
    index = (index + 1) % images.length;
}

// Change image every 2 seconds (2000 milliseconds)
setInterval(changeImage, 2000);

/*Script para manipular os modais*/
document.getElementById('openModalBtn').addEventListener('click', function () {
    var myModal = new bootstrap.Modal(document.getElementById('myModal'));
    myModal.show();
});

document.getElementById('openModalPesquisaBtn').addEventListener('click', function () {
    var myModal = new bootstrap.Modal(document.getElementById('myModalPesquisa'));
    myModal.show();
});

/* Cidade Escolhida */
$(document).ready(function () {
    // Recupera a escolha da cidade do armazenamento local
    var cidadeEscolhida = localStorage.getItem('cidadeEscolhida');

    // Verifica se cidadeEscolhida é nula ou indefinida
    if (cidadeEscolhida === null || cidadeEscolhida === undefined) {
        cidadeEscolhida = "Cidades";
    }

    // Define a cidade escolhida no elemento de exibição
    $("#cidadeEscolhida").text(cidadeEscolhida);

    // Configura o evento de clique no botão
    $("#enviarBtn").click(function () {
        // Obtém a cidade escolhida
        var cidadeEscolhida = $("#cidadeSelect").val();

        // Armazena a escolha da cidade no armazenamento local
        localStorage.setItem('cidadeEscolhida', cidadeEscolhida);

        // Atualiza o elemento de exibição
        $("#cidadeEscolhida").text(cidadeEscolhida);
    });

    /* barra pesquisa */
    $(document).ready(function () {
        $("#searchIcon").click(function () {
            // Verifica se há texto no input e uma cidade escolhida
            var searchText = $("#searchInput").val();
            var cidadeEscolhida = $("#cidadeEscolhida").text();

            if (searchText && cidadeEscolhida !== "Cidade") {
                // Realiza a pesquisa (coloque aqui o código que você deseja executar ao pesquisar)
                console.log("Pesquisar: " + searchText + " na cidade: " + cidadeEscolhida);
            } else {
                alert("Por favor, insira texto e escolha uma cidade para pesquisar.");
            }
        });

        $("#closeIcon").click(function () {
            // Limpa o input e esconde o ícone de fechar
            $("#searchInput").val("");
            $("#closeIcon").hide();
        });

        // Outras funcionalidades podem ser adicionadas conforme necessário
    });
});