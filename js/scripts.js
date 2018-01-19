$(document).ready(function () {
// business side

// initialize and add filter variables
var results = [];
var byThreeResults = [];
var boopOneResults = [];
var beepZeroResults = [];
var boop1 = /[1]/;
var beep0 = /[0]/;

var beepBoopByThree = function(input){
  for (var i = 0; i <= input; i++) {
  // alert("loop # " + i);
  results[i] = i;  //creates the array of numbers
  }
  alert("results array: " + results);
  for (var i = 0; i < results.length; i++) {
    if ((results[i] / 3) === 0) {
      results[i] = "Beep!";  //replace results[0]=Beep!
    }
    else if (results[i] % 3 === 0) {
      results[i] = "I'm sorry Dave. I'm afraid I can't do that.";
      //add string when number is divisible by three
    }
    else if (results[i] === 1) {
      results[i] = "Boop!"; //replace results[1]=Boop!
    }
  }
  alert("divisible by three and zero array: " + results);
  var byThreeResults = results.slice();
  console.log(byThreeResults);
}




// var beepBoopZero = function (input) {
//   for (var i = 0; i < results.length; i++) {
//     if (results[i] === 0) {
//       results[i] = "Beep!";
//     }
//   }
//   alert("numbers containing 0 array: " + results);
// }


$("form#beepBoopForm").submit(function(event) {
// logic side
  event.preventDefault();
  var number = parseInt($("input#beepBoop").val());
  alert("Input number is " + number);
  var results = beepBoopByThree(number);
  // var results = beepBoopOne(byThreeResults);

  // $("#results").text(results);
}); // END event


}); // END ready
