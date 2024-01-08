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

/*Script para manipular o modal*/
document.getElementById('openModalBtn').addEventListener('click', function () {
    var myModal = new bootstrap.Modal(document.getElementById('myModal'));
    myModal.show();
});