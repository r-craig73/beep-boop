$(document).ready(function () {
// business side
results = [];
var newBeepBoop = function(input){
  //return input;
  for (var i = 0; i <= input; i++) {
  alert("loop # " + i);
  results[i] = i;
  }
  alert(results);
}


$("form#beepBoopForm").submit(function(event) {
// logic side
  event.preventDefault();
  var number = parseInt($("input#beepBoop").val());
  alert("Input number is " + number);
  var results = newBeepBoop(number);
  $("#results").text(results);
}); // END event




}); // END ready
