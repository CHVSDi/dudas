$(function() {
  var rows = 7;
  var cols = 7;
  var points = 0;
  var grid = [

  ];

  var image = [
    "<img src='image/1.png' class='child' id='candy1' style='width: 80px; margin:6px'>",
    "<img src='image/2.png' class='child' id='candy2' style='width: 80px; margin:6px'>",
    "<img src='image/3.png' class='child' id='candy3' style='width: 80px; margin:6px'>",
    "<img src='image/4.png' class='child' id='candy4' style='width: 80px; margin:5px'>"
  ]

  // function candy(r,c,obj,src) {
  //   return {
  //     r: r,
  //     c: c,
  //     src: src,
  //     locked: false,
  //     isInCombo: false,
  //     o: obj
  //   }
  // }





  $(".btn-reinicio").click(function() {

    var $this = $(this);
    $this.toggleClass(".btn-reinicio");
    if($this.hasClass(".btn-reinicio")){
      $this.text("Reiniciar");
    }
    else {
      $this.text("Iniciar")
    }

    function pickRandomJewel()
      {
        var pickInt = Math.floor((Math.random()*4));
        return image[pickInt];
       }

    for (var i = 0; i < 7; i++) {
      switch (i) {
        case 0:
          grid[0] = []
          for (var j = 0; j < 7; j++) {
            grid[0][j] = pickRandomJewel();
          }
          break;
        case 1:
          grid[1] = []
          for (var j = 0; j < 7; j++) {
              grid[1][j] = pickRandomJewel();
          }
          break;
        case 2:
          grid[2] = []
          for (var j = 0; j < 7; j++) {
              grid[2][j] = pickRandomJewel();
          }
          break;
        case 3:
          grid[3] = []
          for (var j = 0; j < 7; j++) {
              grid[3][j] = pickRandomJewel();
          }
          break;
        case 4:
          grid[4] = []
          for (var j = 0; j < 7; j++) {
              grid[4][j] = pickRandomJewel();
          }
          break;
        case 5:
          grid[5] = []
          for (var j = 0; j < 7; j++) {
              grid[5][j] = pickRandomJewel();
          }
          break;
        case 6:
          grid[6] = []
          for (var j = 0; j < 7; j++) {
              grid[6][j] = pickRandomJewel();
          }
          break;
        default:

      }
    }


    for (var a = 0; a < grid.length; a++) {
      for (var b = a+1; b < grid.length; b++) {
        for (var c = b+1; c < grid.length; c++) {
          if ($("grid[a]").attr("id")==$("grid[b]").attr("id") && $("grid[b]").attr("id")==$("grid[c]").attr("id")) {
            for (var d = c+1; d < grid.length; d++) {
              if ($("grid[d]").attr("id")==$("grid[c]").attr("id")) {
                $(grid[a]).empty();
                $(grid[b]).empty();
                $(grid[c]).empty();
                $(grid[d]).empty();
                points += 4;
                break;
              }
              break;
            }
            $(grid[a]).empty();
            $(grid[b]).empty();
            $(grid[c]).empty();
            points += 3;
            break;
          }
          break;
        }
        break;
      }
    }

    function addCandies(panel) {
      var cols = $(".panel-tablero").children();

      for (var i = 0; i < grid.length; i++) {
        cols[i] = grid[i]
      }
    }

    addCandies(".panel-tablero");


    function addCandies(col) {
      switch (col) {
        case ".col-1":
            $(".col-1").append(grid[0]);
          var chld = $(".col-1").css("position","relative");
          candyFall();
          function candyFall(){
            chld.css("bottom","90px");
            chld.animate({bottom: -1}, "slow");

          }
          break;
        case ".col-2":
            $(".col-2").append(grid[1]);
          var chld = $(".col-2").css("position","relative");
          candyFall();
          function candyFall(){
            chld.css("bottom","90px");
            chld.animate({bottom: -1}, "slow");

          }
          break;
        case ".col-3":
            $(".col-3").append(grid[2]);
          var chld = $(".col-3").css("position","relative");
          candyFall();
          function candyFall(){
            chld.css("bottom","90px");
            chld.animate({bottom: -1}, "slow");

          }
          break;
        case ".col-4":
            $(".col-4").append(grid[3]);
          var chld = $(".col-4").css("position","relative");
          candyFall();
          function candyFall(){
            chld.css("bottom","90px");
            chld.animate({bottom: -1}, "slow");

          }
          break;
        case ".col-5":
            $(".col-5").append(grid[4]);
          var chld = $(".col-5").css("position","relative");
          candyFall();
          function candyFall(){
            chld.css("bottom","90px");
            chld.animate({bottom: -1}, "slow");

          }
          break;
        case ".col-6":
            $(".col-6").append(grid[5]);
          var chld = $(".col-6").css("position","relative");
          candyFall();
          function candyFall(){
            chld.css("bottom","90px");
            chld.animate({bottom: -1}, "slow");

          }
          break;
        case ".col-7":
            $(".col-7").append(grid[6]);
          var chld = $(".col-7").css("position","relative");
          candyFall();
          function candyFall(){
            chld.css("bottom","90px");
            chld.animate({bottom: -1}, "slow");

          }
          break;
        default:

      }
    }

    addCandies(".col-1");
    addCandies(".col-2");
    addCandies(".col-3");
    addCandies(".col-4");
    addCandies(".col-5");
    addCandies(".col-6");
    addCandies(".col-7");


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


    document.getElementById("score-text").innerHTML = points;

    })



});
