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
    new Question("Who developed the Python language?", ["Zim Den", "Guido van Rossum","Niene Stom", "Wick Rossum"], "Guido van Rossum"),
    new Question("Which character is used in Python to make a single line comment?", ["#", "//","!", "/"], "#"),
    new Question("What is the method inside the class in python language?", ["Object", "Function","Attribute", "Argument"], "Function"),
    new Question("Which of the following is not a keyword in Python language?", ["val", "rise","with", "try"], "val"),
    new Question("Which one of the following has the highest precedence in the expression?", ["-", "/","()", "^"], "()"),
    new Question("What is the output when we execute list(“hello”)?", ["[‘h’, ‘e’, ‘l’, ‘l’, ‘o’]", "[‘hello’]","[‘llo’]", "[‘olleh’]"], "[‘h’, ‘e’, ‘l’, ‘l’, ‘o’]"),
    new Question(" Suppose list1 is [1, 5, 9], what is sum(list1)?", ["1", "9","15", "Error"], "15"),
    new Question("Which of these is not a core data type?", ["List", "tuple","Class", "Dictionary"], "Class"),
    new Question("print 9//2", ["4.5", "4.0","4", "Error"], "4"),
    new Question("Which among them is incorrect for set s={100,101,102,103}", ["len(s)", "sum(s)","print(s[3])", "max(s)"], "print(s[3])"),
    new Question("Which keyword is use for function?", ["fun", "def","function", "define"], "fun"),
    new Question("what is the return type of function Id", ["float", "boolean","int", "dict"], "int"),
    new Question("Select the reserved words in python", ["else", "rise","import", "All"], "All"),
    new Question(" The format function, when applied on a string returns :", ["List", "Boolean","Int", "Str"], "Str"),
    new Question("Which of these is not a core data type?", ["List", "Tuple","Dictionary", "Class"], "Class"),
    
   
];
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();