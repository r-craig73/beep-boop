$(document).ready(function () {
// business side
results = [];
var newBeepBoop = function(input){
  //return input;
  for (var i = 0; i <= input; i++) {
  alert("loop # " + i);
  results[i] = i;
  }
  alert("results array: " + results);
  for (var i = 0; i < results.length; i++) {
    if (results[i] === 0) {
      results[i] = "Beep!";
    }
  }
  alert("second results array:" + results);
  for (var i = 0; i < results.length; i++) {
    if (results[i] === 1) {
      results[i] = "Boop!";
    }
  }
  alert("third results array:" + results);
  for (var i = 0; i < results.length; i++) {
    if (results[i] === 3) {
      results[i] = "I'm sorry Dave. I'm afraid I can't do that.";
    }
  }
  alert("fourth results array:" + results);
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
