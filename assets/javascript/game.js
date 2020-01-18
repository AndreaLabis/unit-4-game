$(function() {
  var targetNumber;
  var wins = 0;
  var losses = 0;
  var userScore = 0;

  function reset() {
    for(var i = 0; i < crystals.length; i++) {
        crystals[i].setAttribute("score", Math.floor(Math.random() * 11 + 1))
    }
    targetNumber = Math.floor(Math.random() * 101 + 19);
    
    $("#user-Score").text(userScore);
    $("#target-number").text(targetNumber);
  }

  function initialize() {
    crystals = document.getElementsByTagName("img")
    for(var i = 0; i < crystals.length; i++) {
        crystals[i].setAttribute("score", Math.floor(Math.random() * 11 + 1))
        crystals[i].addEventListener("click", (args) => {
            value = Math.round(args.target.getAttribute("score"))
            userScore = userScore + value;
            $("#user-Score").text(userScore);
            console.log(userScore);
            logic();
        })
    }
    targetNumber = Math.floor(Math.random() * 101 + 19);
    $("#target-number").text(targetNumber);
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#user-score").text(userScore);
  }
  function logic() {
    if (userScore === targetNumber) {
        alert("You Win!");
        reset();
        wins++;
        $("#wins").text(wins);
        $("#user-score").text(userScore);
    }
    else if (userScore > targetNumber) {
        alert("You lose!");
        reset();
        losses++;
        $("#losses").text(losses);
        $("#user-score").text(userScore);
    }
  }

  initialize();

}); 
