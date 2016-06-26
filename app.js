$(document).ready(function() {
  turnCounter();


});

function turnCounter() {
  var counter = 0;
  $('form').on("submit", function(event){
      event.preventDefault();
      counter +=1;
      console.log(counter);
  })
}






