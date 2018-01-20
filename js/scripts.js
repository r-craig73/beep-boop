$(document).ready(function () {

// initialize and add filter variables
var results = [];
var byThreeResults = [];
var lists = [];

// variables I will use for the next submit
var boopOneResults = [];
var beepZeroResults = [];
// possible string regular expressions filters for beep and boop
var boop1 = /[1]/;
var beep0 = /[0]/;

var beepBoopByThree = function(input){
  for (var i = 0; i <= input; i++) {
  results[i] = i;  //creates the array of numbers
  }
  // alert("results array: " + results);
  for (var i = 0; i < results.length; i++) {
    if ((results[i] / 3) === 0) {
      results[i] = "Beep!";  //replace results[0]=Beep!
    }
    else if (results[i] % 3 === 0) {
      results[i] = "I'm sorry Dave. I'm afraid I can't do that.";
      //add sorry Dave string when number is divisible by three
    }
  }
  var byThreeResults = results.slice(); //  creates a new variable
  // console.log(byThreeResults);
  displayBeepBoops(byThreeResults); // output to HTML file
}

function displayBeepBoops(lists) {
  lists.forEach(function(list) {
  $("#results1").append("<h5>"+ list + "</h5>");
});
}

$("form#beepBoopForm").submit(function(event) {
  event.preventDefault();
  var number = parseInt($("input#beepBoop").val());
  // alert("Input number is " + number);
  var results = beepBoopByThree(number);
  // alert(byThreeResultsStrings);
  $(".results").fadeIn();
}); // END event
}); // END ready
