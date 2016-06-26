$(document).ready(function() {
  turnCounter();
  whoseTurn();

  $('input[type="submit"]').on('click',function(){
    turtle = $(this).closest("div")
    cells = turtle.children('.cell')

    var currentEmptyCell = []
    for (i=5;i>-1;i--) {
      // console.log(cells[i])
      if (cells.eq(i).is(':empty')) {
        // console.log(cells[i])
        // console.log(cells.eq(i))
        currentEmptyCell.push(i)
      }
    }
    console.log(currentEmptyCell[0])
    cells.eq(currentEmptyCell[0]).append('test')
  })


});

function turnCounter() {
  var counter = 0;
  $('form').on("submit", function(event){
    event.preventDefault();
    counter +=1;
  })
  return counter;
}

function whoseTurn() {
  if (turnCounter() % 2 == 0) {
    return "black";
  }
  else {
    return "red";
  }
}




// $(dfdk).prepend("<img alt='ghengis' src='kdjfk.jpg'>")



// console.log(cells[i])
