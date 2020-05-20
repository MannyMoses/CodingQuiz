function populate() {
  if(quiz.isEnded()) {
      showScores();
  } else {
      // show question
      var element = document.getElementById('question');
      element.innerHTML = quiz.getQuestionIndex().text;


 
      var choices = quiz.getQuestionIndex().choices;
     
     

     
      for (var i= 0; i < choices.length; i++) {
          var element = document.getElementById('choice' + i);//choice 0
          element.innerHTML = choices[i]; //set choice 0 innerhtml to slytherin
          guess("btn" + i, choices[i]);

      }

      showProgress();
  }
}

function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function() {
      quiz.guess(guess);
      populate();
  }
}


function showProgress() {
  var currentQuestionNumber = quiz.questionIndex + 1;
  var element = document.getElementById("progress");
  element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;

}



function showScores() {
  var gameOverHtml = "<h1>Result</h1>";
  gameOverHtml += "<h2 id='score'>Score: " + quiz.score + "</h2>";
  var element = document.getElementById("quiz");
  element.innerHTML = gameOverHtml;

}


var questions = [
  new Question("What does a boolean return?", ["yes/no", "positive/negative", "true/false"],"true/false"),
  new Question("What kind of dog does Jeff the instructor have?", ["Pitbull", "Corgi", "Huskie"], "Corgi"), 
  new Question("What kind of scope is the variable Var?", ["function scope", "block scope", "telescope"], "function scope"),
  new Question("When using a timer in Javascript, how is the time measured?", ["seconds", "minutes", "milliseconds"], "milliseconds"),
  new Question("As far as best practice goes, where does one want to put their jQuery link in the HTML?", ["top", "bottom", "true/false"], "bottom")
];

var quiz = new Quiz(questions);

populate();

