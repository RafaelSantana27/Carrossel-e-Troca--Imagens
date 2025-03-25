let trocarImagem = document.getElementById("img");

const btnAlterar = document.getElementById("alterar");


// EVENTO PARA ALTERAR IMAGEM
btnAlterar.addEventListener("click", function() {
    
    if(trocarImagem.src.includes("img/carrousel1.jpg")) {
        trocarImagem.src = "img/carrousel2.jpg";
        console.log(trocarImagem);
    }else {
        trocarImagem.src = "img/carrousel1.jpg";
        console.log(trocarImagem);
    }

});