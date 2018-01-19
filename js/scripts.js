$(document).ready(function () {
// business side
results = [];
boop1 = /[1]/;
beep0 = "/[0]/";

var beepBoopByThree = function(input){
  for (var i = 0; i <= input; i++) {
  // alert("loop # " + i);
  results[i] = i;
  }
  alert("results array: " + results);
  for (var i = 0; i < results.length; i++) {
    if (results[i] / 3 === 0) {
      results[i] = "Beep!";
    }
    else if (results[i] % 3 === 0) {
      results[i] = "I'm sorry Dave. I'm afraid I can't do that.";
    }
  }
  alert("divisible by three and zero array: " + results);
}

var beepBoopOne = function (input){
for (var i = 0; i < results.length; i++) {
    if (results[i] = boop1) {
      results[i] = "Boop!";
    }
  }
  alert("numbers containing 1 array: " + results);
}

var beepBoopZero = function (input) {
  for (var i = 0; i < results.length; i++) {
    if (results[i] === 0) {
      results[i] = "Beep!";
    }
  }
  alert("numbers containing 0 array: " + results);
}


$("form#beepBoopForm").submit(function(event) {
// logic side
  event.preventDefault();
  var number = parseInt($("input#beepBoop").val());
  alert("Input number is " + number);
  var results = beepBoopByThree(number);
  $("#results").text(results);
}); // END event


}); // END ready
