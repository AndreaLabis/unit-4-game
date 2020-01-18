
// Here we establish the "targetNumber" (set to 50 in this example).

$(document).ready(function() {

  var targetNumber;
  var Score = 0;



  $("#number-to-guess").text(targetNumber); //this will be between 19 - 120.


  let wins = 0
  let losses = 0;
  let counter = 0;
  let incrementOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
  for (var i = 0; i < incrementOptions.length; i++) {
      console.log(incrementOptions[i]);
  }  

    var crystalVal = incrementOptions[Math.round(Math.random() * incrementOptions.length)];

    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-images");
    imageCrystal.attr("src", url= "/assets/images/crystal1.png", "/assets/images/crystal2.png", "/assets/images/crystal3.png", "/assets/images/crystal4.png");
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;


    $(".crystal-image").on("click", function () {
      counter += crystalVal;
      $("#crystals").append(imageCrystal);
    
   
     alert('Your new score is: ' + counter);

    if (counter === targetNumber) {

      alert("You win!");
    }

    else if (counter >= targetNumber) {

      alert("You lose!");

    }
  }

  




  });
}); 
