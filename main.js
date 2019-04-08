function check(){

var question1 = document.quizz.question1.value;
var question2 = document.quizz.question2.value;
var question3 = document.quizz.question3.value;
var question4 = document.quizz.question4.value;
var correct = 0;

    if (question1=="Mojito") {
      correct++;
    }
    if (question2=="Gin and Tonic") {
      correct++;
    }
    if (question3=="Pornstar Martini") {
      correct++;
    }
    if (question4=="Old Fashioned") {
      correct++;
    }

var messages = ["You're a quiz-o-holic!", "Just one more!","You like your marks how you like your drinks...half full!", "One is truly the lonliest number", "Paying more attention to your drink and not this quiz?"];
var pictures = ["images/party.gif", "images/justdoit.gif", "images/glasshalffull.gif", "images/lonely.gif","images/drinkfail.gif"];

var range;

  if (correct == 0) {
    range = 4;
  }

  if (correct == 1) {
    range = 3
  }

  if (correct == 2) {
    range = 2
  }

  if (correct == 3) {
    range = 1
  }

  if (correct == 4) {
    range = 0
  }

  document.getElementById("after_submit").style.visibility="visible";

  document.getElementById("message").innerHTML= messages[range];
  document.getElementById("clicked_correct").innerHTML="You got " + correct + " correct!";
  document.getElementById("picture").src=pictures[range];
  }
