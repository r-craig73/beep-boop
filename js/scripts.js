$(document).ready(function () {
// business side



$("form#beepBoopForm").submit(function(event) {
// logic side
  event.preventDefault();
  var number = parseInt($("input#beepBoop").val());
  alert("Input number is " + number);
  // var results = TBDfunction(number);
  // $("#results").text(results);
}); // END event




}); // END ready
