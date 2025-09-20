// View divs
  const quizView = document.querySelector("#quizView");
  const endView = document.querySelector("#endView");

// Quiz view elements
    const progressBar = document.querySelector("#progressBar");
    const questionCount = document.querySelector("#questionCount");
    const questionContainer = document.querySelector("#question");
    const choiceContainer = document.querySelector("#choices");
    const nextButton = document.querySelector("#nextButton");

  // Array with the quiz questions
  const questions = [
    new Question("What is 2 + 2?", ["3", "4", "5", "6"], "4", 1),
    new Question("What is the capital of France?", ["Miami", "Paris", "Oslo", "Rome"], "Paris", 1),
    new Question("Who created JavaScript?", ["Plato", "Brendan Eich", "Lea Verou", "Bill Gates"], "Brendan Eich", 2),
    new Question("What is the mass–energy equivalence equation?", ["E = mc^2", "E = m*c^2", "E = m*c^3", "E = m*c"], "E = mc^2", 3),
    // Add more questions here
  ];
  const quizDuration = 120; // 120 seconds (2 minutes)


  // YOUR CODE HERE:
  

// 1. Show the question
// // Update the inner text of the question container element and show the question text
    function getQuestionIndex(questions) {
        let currentQuestionIndex= 0;

        for (let q of questions){
      
        return currentQuestionIndex +=1;
         }

      
    }

    function showQuestion() {
        
      const currentQuestion = quizView[currentQuestionIndex];

      CurrentQuestion.textContent= currentQuestionIndex +1;
      questionText.textContent = currentQuestion.question;
    }

    
    // 2. Update the green progress bar
    // Update the green progress bar (div#progressBar) width so that it shows the percentage of questions answered
    
    progressBar.style.width = `65%`; // This value is hardcoded as a placeholder
     //
      const progressBar=(currentQuestionIndex/ questions.length)* 100;
      progressBar.style.width =`${progressBar}%`;
