   
  // Here we establish the "targetNumber" (set to 50 in this example).
  var targetNumber = 50;

  // Here we set the "number-to-guess" header to match the "targetNumber".
  // Eventually this will allow us to change the HTML to match the value in the JavaScript.
  $("#number-to-guess").text(targetNumber); //this will be between 19 - 120.


 // Here we created a counter, we'll be using this to track the user's total.
 var counter = 0;
 var incrementOptions = ["1","2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
 for (var i = 0; i < incrementOptions.length; i++) {

 var crystalVal = incrementOptions[Math.round(Math.random())];

$(".crystal-image").on("click", function() {
   counter += crystalVal;
   
   alert("Your new score is: " + counter);

    if (counter === targetNumber) {

        alert("You win!");
    }

    else if (counter >= targetNumber) {

        alert("You lose!");
}



    


   //add MathcrystalArrayVal.math[];




  // Created "alerts" for clicking the crystals
    alert("You clicked this crystal " + counter + " times!");
    
    alert("You win!");
  



});    

<div id="crystal buttons"