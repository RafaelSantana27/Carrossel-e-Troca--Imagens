let trocarImagem = document.getElementById("img");

const btnVoltar = document.getElementById("voltar");

const btnProximo = document.getElementById("proximo");

let checkbox = document.getElementById("automatico");

let cont = 1;
let imgMAX = 5;
let imgMIN = 1;
let direcao = 1; //1 para avançar, -1 para voltar

// EVENTO PARA RETORNAR IMAGEM
btnVoltar.addEventListener("click", function() {
    if(cont > imgMIN) {
        cont--;
    }else{
        console.log("Chegou na primeira img")
    }
    trocarImagem.src = `img/carrousel${cont}.jpg`;
    console.log(trocarImagem.src);
});

// EVENTO PARA AVANÇAR IMAGEM
btnProximo.addEventListener("click", function() {
    if(cont < imgMAX) {
        cont++;
    }else{
        console.log("Chegou na última img")
    }
    trocarImagem.src = `img/carrousel${cont}.jpg`;
    console.log(trocarImagem.src);
})

checkbox.addEventListener("change" , function () {
    if(this.checked){
        alterarAutomaticamente();
    }
})



//Função automática para altenar entre as imagens
function alterarAutomaticamente() {
    setInterval(() => {
        cont += direcao;

        if(cont === imgMAX || cont === imgMIN) {
            direcao *= -1; //Inverte a direção
        }

        trocarImagem.src = `img/carrousel${cont}.jpg`;
        console.log(trocarImagem.src);
    }, 5000) // Trocar a imagem a cada 5 segundos
}

// alterarAutomaticamente();

