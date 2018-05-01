$(function() {
  //al pulsar el botón de reinicio en este caso inicio:
    $(".btn-reinicio").click(function(){

      //1. cambia el texto de inicio a reiniciar
      var $this = $(this);
      $this.toggleClass(".btn-reinicio");
      if($this.hasClass(".btn-reinicio")){
        $this.text("Reiniciar");
      }
      else {
        $this.text("Iniciar")
      }


      function addCandies(col) {
        var image = [
          "<img src='image/1.png' class='child' id='candy1' style='width: 80px; margin:6px'>",
          "<img src='image/2.png' class='child' id='candy2' style='width: 80px; margin:6px'>",
          "<img src='image/3.png' class='child' id='candy3' style='width: 80px; margin:6px'>",
          "<img src='image/4.png' class='child' id='candy4' style='width: 80px; margin:5px'>"
        ]
        for (var i = 0; i < 7; i++) {
          var x = Math.floor(Math.random()*4);
          $(col).append("<div class='parent'>"+image[x]+"</div>");
        }
        var chld = $(col).css("position","relative");
        candyFall();
        function candyFall(){
          chld.css("bottom","90px");
          chld.animate({bottom: -1}, "slow");

        }
      }
      //2. Se añaden los dulces en cada columna
      addCandies(".col-1");
      addCandies(".col-2");
      addCandies(".col-3");
      addCandies(".col-4");
      addCandies(".col-5");
      addCandies(".col-6");
      addCandies(".col-7");

      /*3. (el problema lo tengo aquí). se destruyen todos los elementos que por su mismo
           id crean una linea veritical*/
      destroyCheckedCandies(".col-1");
      destroyCheckedCandies(".col-2");
      destroyCheckedCandies(".col-3");
      destroyCheckedCandies(".col-4");
      destroyCheckedCandies(".col-5");
      destroyCheckedCandies(".col-6");
      destroyCheckedCandies(".col-7");

    /*4. se le permite al usuario trasladar los dulces dese una posición a otra*/
    jQuery.fn.swap = function(b){
      b = jQuery(b)[0];
      var a = this[0];
      var t = a.parentNode.insertBefore(document.createTextNode(''), a);
      b.parentNode.insertBefore(a, b);
      t.parentNode.insertBefore(b, t);
      t.parentNode.removeChild(t);
      return this;
    };


  $( ".child" ).draggable({ revert: true, helper: "clone" });

  $( ".child" ).droppable({
      accept: ".child",
      activeClass: "ui-state-hover",
      hoverClass: "ui-state-active",
      drop: function( event, ui ) {

          var draggable = ui.draggable, droppable = $(this),
              dragPos = draggable.position(), dropPos = droppable.position();

          draggable.css({
              left: dropPos.left+'px',
              top: dropPos.top+'px'
          });

          droppable.css({
              left: dragPos.left+'px',
              top: dragPos.top+'px'
          });
          draggable.swap(droppable);
      }

    });
    /*Aquí se encuentra el problema, no se como hacer para que cada vez que se encuentren tres o más dulces del mismmo tipo(id)
    estos se eliminen este es al que recurrí de ultimo pero no sé porqué este no funciona, no da ningun error solamente no hace lo}
    que quiero hacer*/
    function destroyCheckedCandies(col) {
      var column= $(col).toArray();
      var idCol = [
        "column[0].attr('id')",
        "column[1].attr('id')",
        "column[2].attr('id')",
        "column[3].attr('id')",
        "column[4].attr('id')",
        "column[5].attr('id')",
        "column[6].attr('id')"
      ]
      for (var a = 0; a < col.length; a++) {
        for (var b = a+1; b < col.length; b++) {
          for (var c = b+1; c < col.length; c++) {
            if (idCol[a]==idCol[b] && idCol[b]==idCol[c]) {
              for (var d = c+1; d < col.length; d++) {
                if (idCol[c]==idCol[d]) {
                  $(column[a]).remove();
                  $(column[b]).remove();
                  $(column[c]).remove();
                  $(column[d]).remove();
                  break;
                }
                break;
              }
              $(column[a]).remove();
              $(column[b]).remove();
              $(column[c]).remove();
              break;
            }
            break;
          }
          continue;
        }
      }

    }


  });
});
