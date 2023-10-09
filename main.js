 // Pom-----------------------------
 function tocaSomPom (idElementoAudio) { 
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//enquanto 
for (let contador = 0; contador < listaDeTeclas.length;contador++) { 

     conts tecla = listaDeTeclas[contador];
     conts isntrumento = tecla.classList[1];
     conts idAudio = '#som_{instrumento}'; //template string 

     tecla.onclick =function () {
         tocaSom(idAudio);
 }
      
 tecla.onkeydown = function (evento) {
     tecla.classlist.add('ativa');
 
      console.log(evento.code=='Space')

      if (evento.code=='Space') {
          tecla.classList.add('ativa');
       }

     if(evento,code=='Enter') {
        tecla.add('ativa');
     } 
 }

 tecla,onkeyup = function() {
    tecla,classList,remove('ativa');
    }

}