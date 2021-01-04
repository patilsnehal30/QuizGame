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
    new Question("Who is known as father of Java Programming Language?", ["James Gosling", "M. P Java","Charel Babbage", "Blais Pascal"], "James Gosling"),
    new Question("Which provides runtime environment for java byte code to be executed?", ["JDK", "JVM","JRE", "JAVAC"], "JVM"),
    new Question("_____ is used to find and fix bugs in the Java programs.", ["JVM", "JRE","JDK", "JDB"], "JDB"),
    new Question("What is the return type of the hashCode() method in the Object class?", ["Object", "Int","Void", "long"], "Int"),
    new Question("Which of the following is a reserved keyword in Java?", ["strictfp", "main","object", "system"], "strictfp"),
    new Question("Which keyword is used for accessing the features of a package?", ["package", "import","export", "extends"], "import"),
    new Question("Which of the following are not Java keywords ?", ["double", "instenceof","switch", "then"], "then"),
    new Question("Which of these have highest precedence?", ["()", "++","*", "<<"], "()"),
    new Question("Which of these is returned by operator '&' ?", ["Int", "Boolean","Char", "Float"], "Char"),
    new Question("Java language was initially called as ___", ["Oak", "j++","Pine", "Sumatra"], "Oak"),
    new Question("Which of these operators is used to allocate memory to array variable in Java?", ["malloc", "alloc","new", "create"], "new"),
    new Question("Which of the following are not the methods of the Thread class?", ["sleep()", "go()","yield()", "stop()"], "go()"),
    new Question("Division operator has ____ precedence over multiplication operator", ["Highest", "least","equal", "none"], "equal"),
    new Question("Which of the following are not Java modifiers?", ["protected", "public","private", "All"], "All"),
    
 
   
];
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();