$(document).ready(function() {
  turnCounter();
  whoseTurn();

  $('input[type="submit"]').on('click',function(){
    div = $(this).closest("div")
    cells = div.children('.cell')
     for (i=5;i>-1;i--) {
      console.log(cells[i])
    }

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



