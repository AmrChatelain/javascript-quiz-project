class Quiz {
    // YOUR CODE HERE:
    constructor(questions,timeLimit,timeRemaining) {

    this.questions= [
    new Question("What is 2 + 2?", ["3", "4", "5", "6"], "4", 1),
    new Question("What is the capital of France?", ["Miami", "Paris", "Oslo", "Rome"], "Paris", 1),
    new Question("Who created JavaScript?", ["Plato", "Brendan Eich", "Lea Verou", "Bill Gates"], "Brendan Eich", 2),
    new Question("What is the mass–energy equivalence equation?", ["E = mc^2", "E = m*c^2", "E = m*c^3", "E = m*c"], "E = mc^2", 3),
    ]
    // 1. constructor (questions, timeLimit, timeRemaining)

        this.questions= questions;
        this.timeLimit= timeLimit;
        this.timeRemaining= timeRemaining;
        this.correctAnswers=0;
        this.currentQuestionIndex=0;


    }

    // 2. getQuestion()
     getQuestion(){
       return this.questions[this.currentQuestionIndex];

    }
    
    // 3. moveToNextQuestion()
    moveToNextQuestion(){

    }

    // 4. shuffleQuestions()
    shuffleQuestions(){

    }

    // 5. checkAnswer(answer)
    checkAnswer(answer){

    }

    // 6. hasEnded()
    hasEnded(){
        
    }
}