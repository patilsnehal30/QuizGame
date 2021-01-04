function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
 
// create questions here
var questions = [
    new Question("The Detabase Schea is written in ", ["HLL", "DDL","DML", "DCL"], "DDL"),
    new Question("The following are components of detabase except", ["user deta", "metadeta","indexes", "report"], "reports"),
    new Question("In the architecture of detabase system external level is", ["physical", "logical","view", "conceptual"], "view"),
    new Question("In Hirarchical model records are organised as", ["Graph", "Links","Tree", "List"], "Tree"),
    new Question("In E-R diagram attributes are represented by ", ["Rectangle", "square","ellipse", "triangle"], "ellipse"),
    new Question("In E-R diagram an entity set is represented by ", ["rectangle", "ellipse","diamond", "circle"], "rectangle"),
    new Question("relational detabase developer refers to a record", ["criteria", "a relation","a tuple", "attribute"], "a tuple"),
    new Question("count function in SQL returns the number of", ["values", "distinct values","groups", "columns"], "values"),
    new Question("the statement in SQL which allows changing the defination of a table is", ["Alter", "Update","select", "create"], "Alter"),
    new Question("what is relationship called when it is maintained between two entities", ["unary", "Binary","ternary", "quaternery"], ""),
   


   
];
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();