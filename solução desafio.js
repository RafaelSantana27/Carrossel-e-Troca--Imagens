function alterarAutomaticamente() {
    intervalo = setInterval(() => { //Adicionar uma variavel a função "INTERVALO"
      cont += direcao;

      if (cont === max || cont === 1) {
        direcao *= -1; // Inverte a direção
      }

      trocarImagem.src = `img/carrousel${cont}.jpg`;
      console.log(trocarImagem.src);
    }, 5000);
  }

  function pararTrocaAutomatica() { // Criar um função para limpar o fluxo.
    clearInterval(intervalo); // Variavel criada acima.
  }

  checkbox.addEventListener("change", function () { // Evento que vai controlar se está "MARCADO OU DESMARCADO"
    if (this.checked) {
      alterarAutomaticamente();
    } else {
      pararTrocaAutomatica();
    }
  });
