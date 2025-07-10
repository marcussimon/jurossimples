// Script JS opcional
console.log("Site MVC carregado.");

$(document).ready(function(){
      // Começa com o parágrafo escondido
      $(".js").hide();

      // Detecta o scroll do mouse para baixo
      $(window).on("wheel", function(event){
        if (event.originalEvent.deltaY > 0) {
          // Scroll para baixo → mostra o parágrafo com slideDown
          $(".js").slideDown();
        }
      });
    });

