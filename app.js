$(document).ready(function() {
  var turn = "black"
  function turnCounter() {
    if (turn === "black") {
      turn = "red"
    }
    else {
      turn = "black"
    }
  }

  function whoseTurn() {
    if (turn === "black") {
      turnCounter();
      return "<img alt='Ghengis Black Token' src='genghis_khan_B.png'>"
    }
    else {
      turnCounter();
      return "<img alt='Ghengis Red Token' src='genghis_khan_R.png'>"
    }
  }

  $('input[type="submit"]').on('click',function(event){
    event.preventDefault();
    turtle = $(this).closest("div");
    cells = turtle.children('.cell');

    var currentEmptyCell = [];
    for (i=5;i>-1;i--) {
      if (cells.eq(i).is(':empty')) {
        currentEmptyCell.push(i);
      }
    }
    cells.eq(currentEmptyCell[0]).append(whoseTurn());
  })
});
