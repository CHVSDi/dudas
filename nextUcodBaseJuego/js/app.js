$(document).ready(function() {
 setInterval(function() {

   var selectedRow=-1
   var selectedCol=-1
   var posX;
   var posY;
   var candies=new Array();
   var movingItems=0;
   var gameState="pick";

    $('.main-titulo').animate( { color: '#DCFF0E' }, 300)
    .animate( { color: 'white' }, 300);
    }, 1000);

  $(".btn-reinicio").click(function(){
    var $this = $(this);
    $this.toggleClass(".btn-reinicio");
    if($this.hasClass(".btn-reinicio")){
      $this.text("Reiniciar");
    }
    else {
      $this.text("Iniciar")
    }


    function AddCandies(col) {
      var image = [
        "<img src='image/1.png' id='img1' style='width: 90px; margin:4px'>",
        "<img src='image/2.png' id='img2' style='width: 90px; margin:4px'>",
        "<img src='image/3.png' id='img3' style='width: 90px; margin:4px'>",
        "<img src='image/4.png' id='img4' style='width: 90px; margin:4px'>"
      ]
      for (var i = 0; i < 7; i++) {
        var x = Math.floor(Math.random()*4);
        $(col).append(image[x])
      }
      var chld = $(col).css("position","relative");
      candyFall();
      function candyFall(){
        chld.css("bottom","300px");
        chld.animate({bottom: -1}, "slow");

      }
    }

    AddCandies(".col-1");
    AddCandies(".col-2");
    AddCandies(".col-3");
    AddCandies(".col-4");
    AddCandies(".col-5");
    AddCandies(".col-6");
    AddCandies(".col-7");


    function moveSweets(col) {

      $(col).children().draggable({
          start: handleDragStart,
          cursor: 'move',
          revert: "invalid",
      });
      $(col).children().droppable({
          drop: handleDropEvent,
          tolerance: "touch",
      });
    }

    function handleDragStart (event, ui) { }

    function handleDropEvent (event, ui) {
      if (ui.draggable.element !== undefined) {
          ui.draggable.element.droppable('enable');
      }
      $(this).droppable('disable');
      ui.draggable.position({of: $(this),my: 'left top',at: 'left top'});
      ui.draggable.draggable('option', 'revert', "invalid");
      ui.draggable.element = $(this);
    }

    moveSweets(".col-1");
    moveSweets(".col-2");
    moveSweets(".col-3");
    moveSweets(".col-4");
    moveSweets(".col-5");
    moveSweets(".col-6");
    moveSweets(".col-7");
    moveSweets(".col-8");


  })
});
