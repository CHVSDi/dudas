$(document).ready(function() {
  function AddCandies(col) {
    var image = [
      "<div class='parent'><img src='image/1.png' class='child' id='candy1' style='width: 90px; margin:4px'></div>",
      "<div class='parent'><img src='image/2.png' class='child' id='candy2' style='width: 90px; margin:4px'></div>",
      "<div class='parent'><img src='image/3.png' class='child' id='candy3' style='width: 90px; margin:4px'></div>",
      "<div class='parent'><img src='image/4.png' class='child' id='candy4' style='width: 90px; margin:4px'></div>"
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

  checkedCandy = {
    init : function() {
      var candylist = $(".col-1").toArray();
      for (var a = 0; a < candylist.length; a++) {
        for (var b = a+1; b < candlist.length; b++) {
          for (var c = b+1; c < candylist.length; c++) {
            if (candylist[b]==candylist[c]) {
              var candy = candylist[b];
            }
          }
        }
      }
      var candyId = $(candy).attr("id");
      return candyId;
    }
  }


    $(".child").draggable({
      revert: true
    });

    var draggableCandy = $(this).attr("id")

    $(".parent").droppable({
      if (draggableCandy==checkedCandy) {
        accept: '.child',
          drop: function(event, ui) {
          if ($(this).children().length > 0) {
            var move = $(this).children().detach();
            $(ui.draggable).parent().append(move);
          }
          $(this).append($(ui.draggable));
        }
      }
    });

    var colLn= $(".col-1").toArray;
    var colVct = [
      "$('.col-1').chidren('#candy1')",
      "$('.col-1').chidren('#candy2')",
      "$('.col-1').children('#candy3')",
      "$('.col-1').children('#candy4')"
    ];

    for (var a = 0; a < colLn.length; a++) {
      for (var b = a+1; b < colLn.length; b++) {
        for (var c = b+1; c < colLn.length; c++) {
          if (colLn[a]==colVct[b] && col[b]==colVct[c]) {
            for (var d = c+1; d < colLn.length; d++) {
              if (colLn[c]==colVct[d]) {
                $(col[a]).hide();
                $(col[b]).hide();
                $(col[c]).hide();
                $(col[d]).hide();
                break;
              }
              break;
            }
            $(col[a]).hide();
            $(col[b]).hide();
            $(col[c]).hide();
            break;
          }
          break;
        }
        break;
      }

    }



});
