function check(){

var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var question4 = document.quiz.question4.value;
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

  document.getElementById("after_submit").style.visibility="visible";
  document.getElementById("clicked_correct").innerHTML="You got " + correct + " correct!";
  }
