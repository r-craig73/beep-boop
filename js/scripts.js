// initialize empty arrays
var byThreeResults = [];
var lists = [];

// Boop! and Beep! Arrays
var boopOneResults = [0, "Boop!", 2, 3, 4, 5, 6, 7, 8, 9, "Boop!", "Boop!",
"Boop!", "Boop!", "Boop!", "Boop!", "Boop!", "Boop!", "Boop!", "Boop!", 20,
"Boop!", 22, 23, 24, 25, 26, 27, 28, 29, 30, "Boop!", 32, 33, 34, 35, 36, 37,
38, 39, 40, "Boop!", 42, 43, 44, 45, 46, 47, 48, 49, 50, "Boop!", 52, 53, 54,
55, 56, 57, 58, 59, 60, "Boop!", 62, 63, 64, 65, 66, 67, 68, 69, 70, "Boop!",
72, 73, 74, 75, 76, 77, 78, 79, 80, "Boop!", 82, 83, 84, 85, 86, 87, 88, 89,
90, "Boop!", 92, 93, 94, 95, 96, 97, 98, 99, 100];
var beepZeroResults = ["Beep!", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
12, 13, 14, 15, 16, 17, 18, 19, "Beep!", 21, 22, 23, 24, 25, 26, 27, 28, 29,
"Beep!", 31, 32, 33, 34, 35, 36, 37, 38, 39, "Beep!", 41, 42, 43, 44, 45, 46,
47, 48, 49, "Beep!", 51, 52, 53, 54, 55, 56, 57, 58, 59, "Beep!", 61, 62, 63, 64,
65, 66, 67, 68, 69, "Beep!", 71, 72, 73, 74, 75, 76, 77, 78, 79, "Beep!", 81, 82,
83, 84, 85, 86, 87, 88, 89, "Beep!", 91, 92, 93, 94, 95, 96, 97, 98, 99, "Beep!"];

$(document).ready(function () {
  $("form#beepBoopForm").submit(function(event) {
  event.preventDefault();
  var results = [];
  var number = parseInt($("input#beepBoop").val());

  for (var i = 0; i <= number; i++) {
  results[i] = i;  //create array of numbers
  }

  ByThree = function(input){
    for (var i = 0; i < results.length; i++) {
      if ((results[i] / 3) === 0) {
        results[i] = "Beep!";  // results[0]=Beep!
      }
      else if (results[i] % 3 === 0) {
        results[i] = "I'm sorry Dave. I'm afraid I can't do that.";
        //add "sorry Dave" string when number is divisible by three
      }
      else if (results[i] === 1) {
        results[i] = "Boop!"; // results[1]=Boop!
      }
      else if ((typeof(results[i]) === 'number') && (typeof(boopOneResults[i]) === 'string')) {
        results[i] = boopOneResults[i];
      }
      else if ((typeof(results[i]) === 'number') && (typeof(beepZeroResults[i]) === 'string')) {
        results[i] = beepZeroResults[i];
      }
      else {
        results[i] = i;
      }
    }
    var byThreeResults = results.slice(); //  clone an array
    displayBeepBoops(byThreeResults); // output to HTML file
  }

  ByThree(number);

  function displayBeepBoops(lists) {
    lists.forEach(function(list) {
    $("#results1").append("<h5>"+ list + "</h5>");
  });
  }

  $(".results").fadeIn();
  }); // END event

}); // END ready
